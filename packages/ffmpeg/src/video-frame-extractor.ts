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
  private framesProcessed: number = 0;

  private codec: string | null = null;
  private process: ffmpeg.FfmpegCommand | null = null;
  private terminated: boolean = false;

  public constructor(
    filePath: string,
    startTime: number,
    fps: number,
    duration: number,
  ) {
    this.state = 'processing';
    this.filePath = filePath;

    this.startTime = startTime;
    this.duration = duration;
    this.toTime = this.getEndTime(this.startTime);
    this.fps = fps;

    console.log("jo constructor")

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

  public getTime() {
    return this.startTime + this.framesProcessed / this.fps;
  }

  public getLastTime() {
    return this.startTime + (this.framesProcessed - 1) / this.fps;
  }

  public getLastFrame() {
    return this.lastImage;
  }

  private getEndTime(startTime: number) {
    return Math.min(
      startTime + VideoFrameExtractor.chunkLengthInSeconds,
      this.duration,
    );
  }

  private getArgs(
    codec: string,
    range?: [number, number],
    fps?: number,
  ): {inputOptions: string[]; outputOptions: string[]} {
    const inputOptions = [];
    const outputOptions = [];

    inputOptions.push('-loglevel', ffmpegSettings.getLogLevel());

    if (range) {
      inputOptions.push(
        ...['-ss', range[0].toFixed(2), '-to', range[1].toFixed(2)],
      );
    }

    if (codec === 'vp9') {
      inputOptions.push('-vcodec', 'libvpx-vp9');
    }

    if (fps) {
      outputOptions.push('-vf', `fps=fps=${fps}`);
    }

    if (!range) {
      outputOptions.push('-vframes', '1');
    }

    outputOptions.push('-f', 'rawvideo');
    outputOptions.push('-pix_fmt', 'rgb24');
  
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
      codec,
      [startTime, toTime],
      fps,
    );

    console.log("creating process")

    const process = ffmpeg(filePath)
      .setFfmpegPath(this.ffmpegPath)
      .inputOptions(inputOptions)
      .outputOptions(outputOptions)
      .on('end', () => {
        this.handleClose(0);
      })
      .on('error', err => {
        this.handleError(err);
      })
      .on('progress', (progress) => {
        console.log("\n\n\n")
        console.log("ahhhh")
        console.log(`FFmpeg Progress: ${progress.percent} frames`);
        console.log("\n\n\n")
      })  
      .on('stderr', stderrLine => {
        console.log(stderrLine);
      })
      .on('stdout', stderrLine => {
        console.log(stderrLine);
      });

    const ffstream = process.pipe();
    ffstream.on('data', (data: Buffer) => {
      this.processData(data);
    })
    .on('progress', (progress) => {
      console.log("\n\n\n")
      console.log("ahhhh")
      console.log(`FFmpeg Progress: ${progress.percent} frames`);
      console.log("\n\n\n")
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
      codec,
      undefined,
      undefined,
    );

    console.log("first")

    const process = ffmpeg(filePath)
      .setFfmpegPath(this.ffmpegPath)
      .inputOptions(inputOptions)
      .outputOptions(outputOptions)
      .on('end', () => {
        this.handleClose(0);
      })
      .on('error', err => {
        this.handleError(err);
      })
      .on('stderr', stderrLine => {
        console.log(stderrLine);
      })
      .on('progress', (progress) => {
        console.log("\n\n\n")
        console.log("ahhhh")
        console.log(`FFmpeg Progress: ${progress.percent} frames`);
        console.log("\n\n\n")
      })  
      .on('stdout', stderrLine => {
        console.log(stderrLine);
      });

    const ffstream = process.pipe();
    ffstream.on('data', (data: Buffer) => {
      console.time("processdata")
      this.processData(data);
      console.timeEnd("processdata")
    })
    .on('progress', (progress) => {
      console.log("\n\n\n")
      console.log("ahhhh")
      console.log(`FFmpeg Progress: ${progress.percent} frames`);
      console.log("\n\n\n")
    });


    console.log("return first");

    return process;
  }
  private processData(data: Buffer) {
    // Assuming we know the frame size (width * height * 3 for RGB)
    const frameSize = 1080 * 1920 * 3;
    
    while (this.buffer.length >= frameSize) {
      const frame = this.buffer.subarray(0, frameSize);
      this.imageBuffers.push(frame);
  
      this.hooksWaiting.forEach(hook => hook());
      this.hooksWaiting = [];
  
      this.buffer = this.buffer.subarray(frameSize);
    }
  
    this.buffer = Buffer.concat([this.buffer, data]);
  }
  public async popImage() {
    console.log("PPPPOP")

    if (this.imageBuffers.length) {
      console.log("pop in if statement");
      const image = this.imageBuffers.shift()!;
      this.framesProcessed++;
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
        const image = this.imageBuffers.shift()!;
        this.framesProcessed++;
        this.lastImage = image;
        res(image);
      });
    });
  }

  private handleClose(code: number) {
    this.state = code === 0 ? 'done' : 'error';
  }

  private async handleError(err: any) {
    const code = err.code;

    if (this.terminated) {
      return;
    }

    if (code === 'ENOENT') {
      sendEvent(EventName.Error, {error: 'ffmpeg-not-found'});
      throw new Error(
        'Error: ffmpeg not found. Make sure ffmpeg is installed on your system.',
      );
    } else if (err.message.includes('SIGSEGV')) {
      sendEvent(EventName.Error, {
        error: 'ffmpeg-sigsegv',
        message: err.message,
      });
      throw new Error(
        `Error: Segmentation fault when running ffmpeg. This is a common issue on Linux, you might be able to fix it by installing nscd ('sudo apt-get install nscd'). For more information, see https://docs.re.video/common-issues/ffmpeg/`,
      );
    } else {
      await sendEvent(EventName.Error, {
        error: 'ffmpeg-error',
        message: err.message,
      });
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
