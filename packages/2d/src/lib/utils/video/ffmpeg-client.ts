let ID: number = 0;

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
  return new Promise<ImageBitmap>(async (resolve, reject) => {
    try {
      var now = new Date();
      var seconds = now.getSeconds().toString().padStart(2, '0');
      var milliseconds = now.getMilliseconds().toString().padStart(3, '0');
      console.log("calling fetch", `${seconds}.${milliseconds}`);    
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

      now = new Date();
      seconds = now.getSeconds().toString().padStart(2, '0');
      milliseconds = now.getMilliseconds().toString().padStart(3, '0');
      console.log("done with calling fetch", `${seconds}.${milliseconds}`);    

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }


      console.time("timetest1")
      const arrayBuffer = await response.arrayBuffer();
      const frameArray = new Uint8Array(arrayBuffer);
      console.timeEnd("timetest1")

      console.log("Received frame data:", { frameLength: frameArray.length });

      // Assuming fixed dimensions for now
      const width = 1080;  // or whatever your fixed width is
      const height = 1920; // or whatever your fixed height is

      let imageData: ImageData;

      try {
        console.time("TIMEE");
        imageData = new ImageData(
          new Uint8ClampedArray(frameArray),
          width,
          height
        );
        console.timeEnd("TIMEE");
      } catch {
        const width = 1080;  // your desired width
        const height = 1920; // your desired height
        
        // Create a black frame
        const blackFrame = new Uint8ClampedArray(width * height * 4); // 4 channels: R, G, B, A
        for (let i = 0; i < blackFrame.length; i += 4) {
          blackFrame[i] = 0;     // R
          blackFrame[i + 1] = 0; // G
          blackFrame[i + 2] = 0; // B
          blackFrame[i + 3] = 255; // A (fully opaque)
        }
        
        imageData = new ImageData(blackFrame, width, height);
      }
      const imageBitmap = await createImageBitmap(imageData);
      console.log("ImageBitmap created successfully");
      resolve(imageBitmap);
    } catch (error) {
      console.error("Failed to fetch or process frame", error);
      reject(error);
    }
  });
}}