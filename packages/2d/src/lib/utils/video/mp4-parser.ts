import {createFile, DataStream} from 'mp4box';

// Wraps an MP4Box File as a WritableStream underlying sink.
class MP4FileSink {
  private setStatus;
  private file;
  private offset;

  public constructor(file: any, setStatus: any, offset: number = 0) {
    this.file = file;
    this.setStatus = setStatus;
    this.offset = offset;
  }

  public write(chunk: any) {
    const buffer = new ArrayBuffer(chunk.byteLength);
    new Uint8Array(buffer).set(chunk);

    // Inform MP4Box where in the file this chunk is from.
    (buffer as any).fileStart = this.offset;
    this.offset += buffer.byteLength;

    this.setStatus('fetch', (this.offset / 1024 ** 2).toFixed(1) + ' MiB');
    this.file.appendBuffer(buffer);
  }

  public close() {
    this.setStatus('fetch', 'Done');
    this.file.flush();
  }
}

function description(file: any, track: any) {
  const trak = file.getTrackById(track.id);
  for (const entry of trak.mdia.minf.stbl.stsd.entries) {
    const box = entry.avcC || entry.hvcC || entry.vpcC || entry.av1C;
    if (box) {
      const stream = new DataStream(undefined, 0, DataStream.BIG_ENDIAN);
      box.write(stream);
      return new Uint8Array(stream.buffer, 8); // Remove the box header.
    }
  }
  throw new Error('avcC, hvcC, vpcC, or av1C box not found');
}

/**
 * Loads the file at the given URI until it finds the moov box.
 * Once found, it calls `setConfig` with the video configuration.
 * @param uri - The URI of the video file.
 * @param setConfig - Callback to set the video configuration.
 * @returns
 */
async function getFileInfo(
  uri: string,
  setConfig: (config: VideoDecoderConfig) => void,
) {
  return new Promise<any>((res, rej) => {
    const file = createFile();
    let found = false;

    file.onReady = (info: any) => {
      found = true;

      const track = info.videoTracks[0];

      const config = {
        // Browser doesn't support parsing full vp8 codec (eg: `vp08.00.41.08`),
        // they only support `vp8`.
        codec: track.codec.startsWith('vp08') ? 'vp8' : track.codec,
        codedHeight: track.video.height,
        codedWidth: track.video.width,
        description: description(file, track),
      };

      setConfig(config);

      file.setExtractionOptions(track.id);
      file.start();

      res(file);
    };

    console.log('fetching uri', uri);
    return fetch(uri).then(async response => {
      console.log(response);

      if (!response.body) {
        throw new Error('Response body is null');
      }

      const reader = response.body.getReader();
      const sink = new MP4FileSink(file, () => {});

      while (!found) {
        await reader.read().then(({done, value}) => {
          if (done) {
            file.flush();
            rej('Could not find moov');
            return;
          }

          sink.write(value);
        });
      }
    });
  });
}

/**
 * Starts streaming the video at the given URI from the given offset.
 * @param file - MP4Box file. Needs to be created and configured before calling this function.
 * @param uri - URI of the video file.
 * @param offset - Offset to start streaming from.
 * @returns - A function to read more data from the response.
 */
async function startStreamingAtOffset(file: any, uri: string, offset: number) {
  return fetch(uri, {
    headers: {
      /* eslint-disable */
      Range: `bytes=${offset}-`,
    },
  }).then(async response => {
    if (!response.body) {
      throw new Error('Response body is null');
    }

    const reader = response.body.getReader();
    const sink = new MP4FileSink(file, () => {}, offset);

    return async () => {
      return reader.read().then(function process({done, value}) {
        if (done) {
          sink.close();
          return;
        }

        sink.write(value);
      });
    };
  });
}

export class FrameExtractor {
  private frameBuffer: VideoFrame[] = [];
  private closed = false;

  private uri: string;
  // TODO
  private fps: number;
  private startTime: number;

  private framesProcessed = 0;
  private lastFrame: VideoFrame | null = null;

  private decoder: VideoDecoder;
  private file: any;

  private readMoreFromResponse: () => Promise<void> = async () => {};

  public constructor(uri: string, fps: number, startTime: number) {
    this.uri = uri;
    this.fps = fps;
    this.startTime = startTime;

    console.log('FrameExtractor constructor', uri, fps, startTime);

    this.decoder = new VideoDecoder({
      output: this.onFrame.bind(this),
      error(e) {
        console.error(e);
      },
    });
  }

  public async start() {
    this.file = await getFileInfo(
      this.uri,
      this.decoder.configure.bind(this.decoder),
    );
    this.file.onSamples = this.onSamples.bind(this);

    console.log(this.file);

    const seekInfo = this.file.seek(this.startTime, true);
    this.readMoreFromResponse = await startStreamingAtOffset(
      this.file,
      this.uri,
      seekInfo.offset,
    );
  }

  public close() {
    this.closed = true;
    this.file.flush();
    this.frameBuffer.forEach(frame => frame.close());
  }

  public getTime() {
    return this.startTime + this.framesProcessed / this.fps;
  }

  public getLastTime() {
    return this.startTime + (this.framesProcessed - 1) / this.fps;
  }

  public getLastFrame() {
    return this.lastFrame;
  }

  /**
   * Called when samples are available on the MP4 file.
   * Sends chunks to the decoder.
   * @param _
   * @param __
   * @param samples
   */
  private onSamples(_: any, __: any, samples: any) {
    for (const sample of samples) {
      const chunk = new EncodedVideoChunk({
        type: sample.is_sync ? 'key' : 'delta',
        timestamp: (1e6 * sample.cts) / sample.timescale,
        duration: (1e6 * sample.duration) / sample.timescale,
        data: sample.data,
      });
      this.decoder.decode(chunk);
    }
  }

  /**
   * Called when the decoder has a frame ready.
   * Pushes the frame to the buffer so it can be consumed.
   * @param frame
   */
  private onFrame(frame: VideoFrame) {
    const timestampInSeconds = frame.timestamp / 1e6;
    if (timestampInSeconds < this.startTime) {
      frame.close();
      return;
    }

    // If the extractor is already closed, close the frame.
    if (this.closed) {
      frame.close();
      return;
    }

    this.frameBuffer.push(frame);
  }

  public async getNextFrame(): Promise<VideoFrame> {
    while (this.frameBuffer.length === 0) {
      await this.readMoreFromResponse();

      // Hand control back to the event loop.
      await new Promise(res => setTimeout(res, 0));
    }

    const frame = this.frameBuffer.shift()!;
    this.lastFrame = frame;
    return frame;
  }
}
