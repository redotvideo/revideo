export class ImageCommunication {
  public constructor() {
    if (!import.meta.hot) {
      throw new Error('FfmpegVideoFrame can only be used with HMR.');
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
        // eslint-disable-next-line
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

    const width = parseInt(response.headers.get('X-Frame-Width') || '1080', 10);
    const height = parseInt(
      response.headers.get('X-Frame-Height') || '1920',
      10,
    );

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
