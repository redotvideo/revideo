import {Segment} from './segment';

export class FrameSampler {
  private lastFrame?: VideoFrame;

  public constructor(
    private segment: Segment,
    private sourceFps: number,
    private targetFps: number,
    private sum: number = 0,
  ) {}

  public async getNextFrame() {
    const samplingRate = this.sourceFps / this.targetFps;
    this.sum += samplingRate;

    // Return last frame if we haven't progressed enough to get a new frame.
    if (this.sum < 1 && this.lastFrame) {
      return this.lastFrame;
    }

    // Burn frames if we have too many.
    while (this.sum >= 2) {
      // Burn frame
      const frame = await this.segment.getNextFrame();

      // If there are no more frames, return
      if (!frame) {
        return;
      }

      frame.close();
      this.sum -= 1;
    }

    // Get a new frame.
    if (this.sum >= 1 || !this.lastFrame) {
      this.sum -= 1;
      const frame = await this.segment.getNextFrame();

      // If there are no more frames, return
      if (!frame) {
        return;
      }

      this.lastFrame?.close();
      this.lastFrame = frame;
      return frame;
    }

    // One of the three if statements above is always true.
    throw new Error('Unreachable code');
  }

  public getLastFrame() {
    return this.lastFrame;
  }

  public async close() {
    this.lastFrame?.close();
    this.segment.close();
  }

  public getSum() {
    return this.sum;
  }

  public getSegment() {
    return this.segment;
  }
}
