import {EventName, sendEvent} from '@revideo/telemetry';
import * as ffmpeg from 'fluent-ffmpeg';
import {ffmpegSettings} from './settings';
import {getVideoCodec} from './utils';

type VideoFrameExtractorState = 'processing' | 'done' | 'error';

/**
 * Walks through a video file and extracts frames.
 */
export class VideoFrameExtractor {
  private static readonly pngSignature = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ]);
  private static readonly pngEOF = Buffer.from([
    0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
  ]);

  private static readonly jpegSOI = Buffer.from([0xff, 0xd8]);
  private static readonly jpegEOI = Buffer.from([0xff, 0xd9]);

  private static readonly chunkLengthInSeconds = 45;

  private readonly ffmpegPath = ffmpegSettings.getFfmpegPath();

  public state: VideoFrameExtractorState;
  public filePath: string;

  private buffer: Buffer = Buffer.alloc(0);

  // Images are buffered in memory until they are requested.
  private imageBuffers: Buffer[] = [];
  private hooksWaiting: (() => any)[] = [];

  private lastImage: Buffer | null = null;

  private startTime: number;
  private duration: number;
  private toTime: number;
  private fps: number;
  private transparency: boolean;

  private codec: string | null = null;
  private process: ffmpeg.FfmpegCommand | null = null;
  private terminated: boolean = false;

  public constructor(
    filePath: string,
    startTime: number,
    fps: number,
    duration: number,
    transparent?: boolean,
  ) {
    this.state = 'processing';
    this.filePath = filePath;

    this.startTime = startTime;
    this.duration = duration;
    this.toTime = this.getEndTime(this.startTime);
    this.fps = fps;
    this.transparency = transparent || false;

    if (this.startTime >= this.duration) {
      getVideoCodec(this.filePath).then(codec => {
        this.process = this.createFfmpegProcessToExtractFirstFrame(
          filePath,
          codec,
        );
      });
      return;
    }

    getVideoCodec(this.filePath).then(codec => {
      this.codec = codec;

      // Create a new ffmpeg process to extract the first 10 seconds of the video.
      this.process = this.createFfmpegProcess(
        this.startTime,
        this.toTime,
        this.filePath,
        this.fps,
        this.codec,
      );
    });
  }

  private getEndTime(startTime: number) {
    return Math.min(
      startTime + VideoFrameExtractor.chunkLengthInSeconds,
      this.duration,
    );
  }

  private getArgs(
    filePath: string,
    codec: string,
    range?: [number, number],
    fps?: number,
  ): {inputOptions: string[]; outputOptions: string[]} {
    const inputOptions = [];
    const outputOptions = [];

    inputOptions.push('-loglevel', ffmpegSettings.getLogLevel());

    if (range) {
      inputOptions.push(
        ...['-ss', range[0].toString(), '-to', range[1].toString()],
      );
    }

    if (this.transparency && codec === 'vp9') {
      inputOptions.push('-vcodec', 'libvpx-vp9');
    }

    inputOptions.push('-i', filePath);

    if (fps) {
      outputOptions.push('-vf', `fps=fps=${fps}`);
    }

    if (!range) {
      outputOptions.push('-vframes', '1');
    }

    outputOptions.push('-f', 'image2pipe');

    /**
     * PNG is significantly slower than JPEG,
     * so we only use it when transparency is needed.
     */
    if (this.transparency) {
      outputOptions.push('-vcodec', 'png');
    } else {
      outputOptions.push('-vcodec', 'mjpeg');
    }

    return {inputOptions, outputOptions};
  }

  private createFfmpegProcess(
    startTime: number,
    toTime: number,
    filePath: string,
    fps: number,
    codec: string,
  ): ffmpeg.FfmpegCommand {
    const {inputOptions, outputOptions} = this.getArgs(
      filePath,
      codec,
      [startTime, toTime],
      fps,
    );

    const process = ffmpeg(filePath)
      .setFfmpegPath(this.ffmpegPath)
      .inputOptions(inputOptions)
      .outputOptions(outputOptions)
      .on('start', commandLine => {
        console.log('FFmpeg process started:', commandLine);
      })
      .on('end', () => {
        this.handleClose(0);
      })
      .on('error', err => {
        this.handleError(err);
      });

    const ffstream = process.pipe();
    ffstream.on('data', (data: Buffer) => {
      this.processData(data);
    });

    return process;
  }

  /**
   * We call this in the case that the time requested is greater than the
   * duration of the video. In this case, we want to display the first frame
   * of the video.
   *
   * Note: This does NOT match the behavior of the old implementation
   * inside of 2d/src/lib/components/Video.ts. In the old implementation, the
   * last frame is shown instead of the first frame.
   */
  private createFfmpegProcessToExtractFirstFrame(
    filePath: string,
    codec: string,
  ): ffmpeg.FfmpegCommand {
    const {inputOptions, outputOptions} = this.getArgs(
      filePath,
      codec,
      undefined,
      undefined,
    );

    const process = ffmpeg(filePath)
      .setFfmpegPath(this.ffmpegPath)
      .inputOptions(inputOptions)
      .outputOptions(outputOptions)
      .on('start', commandLine => {
        console.log('FFmpeg process started:', commandLine);
      })
      .on('end', () => {
        this.handleClose(0);
      })
      .on('error', err => {
        this.handleError(err);
      });

    const ffstream = process.pipe();
    ffstream.on('data', (data: Buffer) => {
      this.processData(data);
    });

    return process;
  }
  private processData(data: Buffer) {
    this.buffer = Buffer.concat([this.buffer, data]);

    let start = 0;
    let end;

    const startSignature = this.transparency
      ? VideoFrameExtractor.pngSignature
      : VideoFrameExtractor.jpegSOI;

    const endSignature = this.transparency
      ? VideoFrameExtractor.pngEOF
      : VideoFrameExtractor.jpegEOI;

    while (
      (start = this.buffer.indexOf(startSignature, start)) !== -1 &&
      (end = this.buffer.indexOf(endSignature, start)) !== -1
    ) {
      end += endSignature.length;
      const frame = this.buffer.subarray(start, end);

      this.imageBuffers.push(frame);

      this.hooksWaiting.forEach(hook => hook());
      this.hooksWaiting = [];

      this.buffer = this.buffer.subarray(end);
      start = 0;
    }
  }

  public async popImage() {
    if (this.imageBuffers.length) {
      const image = this.imageBuffers.shift()!;
      this.lastImage = image;
      return image;
    }

    if (this.state === 'error') {
      throw new Error('An error occurred while extracting the video frames.');
    }

    // If the video is done and there are no more frames to extract, return the last frame.
    if (this.state === 'done' && this.toTime >= this.duration) {
      return this.lastImage;
    }

    // If there are more frames to extract, request the next chunk.
    if (this.state === 'done') {
      this.startTime = this.toTime;
      this.toTime = Math.min(
        this.startTime + VideoFrameExtractor.chunkLengthInSeconds,
        this.duration,
      );

      if (!this.codec) {
        throw new Error(
          "Can't extract frames without a codec. This error should never happen.",
        );
      }

      this.process = this.createFfmpegProcess(
        this.startTime,
        this.toTime,
        this.filePath,
        this.fps,
        this.codec,
      );

      this.state = 'processing';
    }

    return await new Promise<Buffer>(res => {
      this.hooksWaiting.push(() => {
        res(this.imageBuffers.shift()!);
      });
    });
  }

  private handleClose(code: number) {
    this.state = code === 0 ? 'done' : 'error';
  }

  private handleError(err: Error) {
    const code = (err as any).code;

    if (this.terminated) {
      return;
    }

    if (code === 'ENOENT') {
      sendEvent(EventName.Error, {error: 'ffmpeg-not-found'});
      throw new Error(
        'Error: ffmpeg not found. Make sure ffmpeg is installed on your system.',
      );
    } else {
      sendEvent(EventName.Error, {error: 'ffmpeg-error', message: err.message});
      throw new Error(
        `An ffmpeg error occurred while fetching frames from source video ${this.filePath}: ${err}`,
      );
    }
  }

  public destroy() {
    this.terminated = true;
    this.process?.kill('SIGTERM');
  }
}
