export class ImageCommunication {
  public constructor() {
    if (!import.meta.hot) {
      throw new Error('FfmpegVideoFrame can only be used with HMR.');
    }

    import.meta.hot.on(
      'revideo:ffmpeg-decoder:video-frame-res',
      this.handler.bind(this),
    );
  }

  private nextFrameHandlers: ((event: MessageEvent) => void)[] = [];

  private handler(event: MessageEvent) {
    const handlers = this.nextFrameHandlers;
    this.nextFrameHandlers = [];

    for (const handler of handlers) {
      handler(event);
    }
  }

  public async getFrame(
    id: string,
    src: string,
    time: number,
    duration: number,
    fps: number,
  ) {
    const response = await fetch('/revideo-ffmpeg-decoder/video-frame', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        filePath: src,
        startTime: time,
        duration,
        fps,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();

    // Assuming fixed dimensions for now
    const width = 1080; // or whatever your fixed width is
    const height = 1920; // or whatever your fixed height is

    let imageData: ImageData;

    try {
      imageData = new ImageData(
        new Uint8ClampedArray(arrayBuffer),
        width,
        height,
      );
    } catch {
      const width = 1080; // your desired width
      const height = 1920; // your desired height

      // Create a black frame
      const blackFrame = new Uint8ClampedArray(width * height * 4); // 4 channels: R, G, B, A
      for (let i = 0; i < blackFrame.length; i += 4) {
        blackFrame[i] = 0; // R
        blackFrame[i + 1] = 0; // G
        blackFrame[i + 2] = 0; // B
        blackFrame[i + 3] = 255; // A (fully opaque)
      }

      imageData = new ImageData(blackFrame, width, height);
    }
    const imageBitmap = await createImageBitmap(imageData);
    return imageBitmap;
  }
}
