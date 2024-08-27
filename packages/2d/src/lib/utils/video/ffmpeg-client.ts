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
    console.log("getframe at time", time);
    const response = await fetch('/revideo-ffmpeg-decoder/video-frame', {
      method: 'POST',
      headers: {
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
      console.log("received BAAAAAD response to getframe for ", time)
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("received ok response to getframe for ", time)

    const width = parseInt(response.headers.get('X-Frame-Width') || '1080', 10);
    const height = parseInt(response.headers.get('X-Frame-Height') || '1920', 10);

    const arrayBuffer = await response.arrayBuffer();

    const imageData = new ImageData(
      new Uint8ClampedArray(arrayBuffer),
      width,
      height,
    );
    
    const imageBitmap = await createImageBitmap(imageData);
    return imageBitmap;
  }
}