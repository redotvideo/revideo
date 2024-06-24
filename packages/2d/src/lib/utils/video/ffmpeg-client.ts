export class ImageCommunication {
  public constructor() {
    if (!import.meta.hot) {
      throw new Error('FfmpegVideoFrame can only be used with HMR.');
    }

    import.meta.hot.on(
      'revideo:ffmpeg-video-frame-res',
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
    return new Promise<HTMLImageElement>((resolve, reject) => {
      if (!import.meta.hot) {
        reject('FfmpegVideoFrame can only be used with HMR.');
        return;
      }

      function handler(event: MessageEvent) {
        const image = new Image();

        const uint8Array = new Uint8Array(event.data.frame.data);
        const blob = new Blob([uint8Array], {type: 'image/png'});
        const url = URL.createObjectURL(blob);

        image.src = url;

        image.onload = () => {
          resolve(image);
        };
      }

      this.nextFrameHandlers.push(handler);

      import.meta.hot.send('revideo:ffmpeg-video-frame', {
        data: {
          id: id,
          filePath: src,
          startTime: time,
          duration,
          fps,
          png: true,
        },
      });
    });
  }
}
