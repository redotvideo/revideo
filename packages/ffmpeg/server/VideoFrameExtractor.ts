import {ChildProcessByStdio, spawn} from 'child_process';
import {Readable} from 'stream';

type VideoFrameExtractorState = 'processing' | 'done' | 'error';

/**
 * Walks through a video file and extracts frames.
 */
export class VideoFrameExtractor {
  private static readonly jpegSOI = Buffer.from([0xff, 0xd8]); // Start of Image marker
  private static readonly jpegEOI = Buffer.from([0xff, 0xd9]); // End of Image marker

  private static readonly chunkLengthInSeconds = 10;

  public state: VideoFrameExtractorState;
  public filePath: string;

  private buffer: Buffer = Buffer.alloc(0);

  // Images are buffered in memory until they are requested.
  private imageBuffers: Buffer[] = [];
  private hooksWaiting: (() => any)[] = [];

  private lastImage: Buffer | null = null;

  private startTime: number;
  private toTime: number;
  private fps: number;
  private duration: number;

  private process: ChildProcessByStdio<null, Readable, null>;

  public constructor(
    filePath: string,
    startTime: number,
    fps: number,
    duration: number,
  ) {
    this.startTime = startTime;
    this.toTime = startTime + VideoFrameExtractor.chunkLengthInSeconds;
    this.filePath = filePath;
    this.fps = fps;
    this.duration = duration;

    // Create a new ffmpeg process to extract the first 10 seconds of the video.
    this.process = this.createFfmpegProcess(
      this.startTime,
      this.toTime,
      this.filePath,
      this.fps,
    );

    this.state = 'processing';
  }

  private createFfmpegProcess(
    startTime: number,
    toTime: number,
    filePath: string,
    fps: number,
  ) {
    const process = spawn(
      'ffmpeg',
      [
        '-ss',
        startTime.toString(),
        '-to',
        toTime.toString(),
        '-i',
        filePath,
        '-vf',
        `fps=fps=${fps}`,
        '-f',
        'image2pipe',
        '-vcodec',
        'mjpeg',
        '-q:v',
        '2',
        '-',
      ],
      {stdio: ['ignore', 'pipe', 'inherit']},
    );

    process.stdout.on('data', this.processData.bind(this));
    process.on('close', this.handleClose.bind(this));
    process.on('error', this.handleError.bind(this));

    return this.process;
  }

  private processData(data: Buffer) {
    this.buffer = Buffer.concat([this.buffer, data]);

    let start = 0;
    let end;

    // Look for JPEG_SOI and JPEG_EOI markers to extract full frames
    while (
      (start = this.buffer.indexOf(VideoFrameExtractor.jpegSOI, start)) !==
        -1 &&
      (end = this.buffer.indexOf(VideoFrameExtractor.jpegEOI, start)) !== -1
    ) {
      end += 2; // Include the EOI marker itself
      const frame = this.buffer.subarray(start, end);

      this.imageBuffers.push(frame);

      this.hooksWaiting.forEach(hook => hook());
      this.hooksWaiting = [];

      this.buffer = this.buffer.subarray(end); // Remove the processed frame from buffer.
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

      this.process = this.createFfmpegProcess(
        this.startTime,
        this.toTime,
        this.filePath,
        this.fps,
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

  private handleError() {
    this.state = 'error';
  }
}
