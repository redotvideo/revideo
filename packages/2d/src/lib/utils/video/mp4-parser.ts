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

export class FrameExtractor {
  private frameBuffer: VideoFrame[] = [];
  private closed = false;

  // URI of the video.
  private uri: string;
  // FPS to target when extracting frames. We use frame sampling.
  private targetFps: number;
  // Actual FPS of the video.
  private sourceFps: number;
  // Offset when the video starts.
  private startTime: number;
  // Number of frames that have been requested and returned.
  private framesRequested = 0;
  // Number of samples that have been passed to the decoder but have not been output yet.
  private framesDue = 0;
  // Last frame that has been output.
  private lastFrame: VideoFrame | null = null;

  private decoder: VideoDecoder;
  private file: any;

  private readMoreFromResponse: () => Promise<void> = async () => {};
  private responseFinished = false;

  public constructor(uri: string, targetFps: number, startTime: number) {
    this.uri = uri;
    this.startTime = startTime;

    // Initialized after the file is loaded.
    this.sourceFps = 0;
    this.targetFps = targetFps;

    this.decoder = new VideoDecoder({
      output: this.onFrame.bind(this),
      error(e) {
        console.error(e);
      },
    });
  }

  /**
   * Starts streaming the video at the given URI from the given offset.
   * @param file - MP4Box file. Needs to be created and configured before calling this function.
   * @param uri - URI of the video file.
   * @param offset - Offset to start streaming from.
   * @returns - A function to read more data from the response.
   */
  private async startStreamingAtOffset(file: any, uri: string, offset: number) {
    return fetch(uri, {
      headers: {
        /* eslint-disable-next-line @typescript-eslint/naming-convention */
        Range: `bytes=${offset}-`,
      },
    }).then(async response => {
      if (!response.body) {
        throw new Error('Response body is null');
      }

      const reader = response.body.getReader();
      const sink = new MP4FileSink(file, () => {}, offset);

      return async () => {
        return reader.read().then(({done, value}) => {
          // Request is done.
          if (done) {
            this.responseFinished = true;
            this.decoder.flush();
            sink.close();
            return;
          }

          sink.write(value);
        });
      };
    });
  }

  /**
   * Loads the file at the given URI until it finds the moov box.
   * Once found, it calls `setConfig` with the video configuration.
   * @param uri - The URI of the video file.
   * @param setConfig - Callback to set the video configuration.
   * @returns
   */
  private async getFileInfo(
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

        // Calculate FPS
        if (track.nb_samples && track.timescale && info.duration) {
          this.sourceFps = track.nb_samples / (info.duration / info.timescale);
        }

        setConfig(config);

        file.setExtractionOptions(track.id);
        file.start();

        res(file);
      };

      return fetch(uri).then(async response => {
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
   * Starts the extraction process.
   */
  public async start() {
    this.file = await this.getFileInfo(
      this.uri,
      this.decoder.configure.bind(this.decoder),
    );
    this.file.onSamples = this.onSamples.bind(this);

    const seekInfo = this.file.seek(this.startTime, true);
    this.readMoreFromResponse = await this.startStreamingAtOffset(
      this.file,
      this.uri,
      seekInfo.offset,
    );
  }

  /**
   * Called when we are done with the extractor.
   */
  public close() {
    this.closed = true;
    this.file.flush();
    this.frameBuffer.forEach(frame => frame.close());
    this.lastFrame?.close();
  }

  /**
   * @returns - Time in seconds of the current frame (using the target FPS)
   */
  public getTime() {
    return this.startTime + this.framesRequested / this.targetFps;
  }

  /**
   * @returns - Time in seconds of the last frame (using the target FPS)
   */
  public getLastTime() {
    return this.startTime + (this.framesRequested - 1) / this.targetFps;
  }

  public getLastFrame() {
    return this.lastFrame;
  }

  /**
   * Called when samples are available on the MP4 file.
   * Sends chunks to the decoder.
   */
  private onSamples(_unused1: any, _unused2: any, samples: any) {
    for (const sample of samples) {
      const chunk = new EncodedVideoChunk({
        type: sample.is_sync ? 'key' : 'delta',
        timestamp: (1e6 * sample.cts) / sample.timescale,
        duration: (1e6 * sample.duration) / sample.timescale,
        data: sample.data,
      });
      this.framesDue++;
      this.decoder.decode(chunk);
    }
  }

  /**
   * Called when the decoder has a frame ready.
   * Pushes the frame to the buffer so it can be consumed.
   */
  private onFrame(frame: VideoFrame) {
    this.framesDue--;
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

  private sum = 0;

  private async populateBuffer() {
    // Fetch more frames if we don't have any.
    while (this.frameBuffer.length === 0 && !this.responseFinished) {
      await this.readMoreFromResponse();
      await new Promise(res => setTimeout(res, 0));
    }

    // Wait for decoder if there are frames due.
    if (this.frameBuffer.length === 0 && this.framesDue) {
      let maxIterations = 1000;
      while (this.frameBuffer.length === 0) {
        await new Promise(res => setTimeout(res, 10));
        maxIterations--;

        if (maxIterations === 0) {
          throw new Error(
            'Timed out while waiting for VideoDecoder to produce a frame.',
          );
        }
      }
    }
  }

  public async getNextFrame(): Promise<VideoFrame> {
    const samplingRate = this.sourceFps / this.targetFps;
    this.sum += samplingRate;

    if (this.sum <= 1 && this.lastFrame) {
      this.framesRequested++;
      return this.lastFrame;
    }

    await this.populateBuffer();

    // We're at the end of the video and there are no more frames to extract.
    if (this.frameBuffer.length === 0) {
      return this.lastFrame!;
    }

    while (this.sum >= 2) {
      // Burn frame
      const frame = this.frameBuffer.shift()!;
      frame.close();
      this.sum -= 1;

      await this.populateBuffer();
      if (this.frameBuffer.length === 0) {
        return this.lastFrame!;
      }
    }

    if (this.sum >= 1 || !this.lastFrame) {
      this.sum -= 1;
      const frame = this.frameBuffer.shift()!;
      this.lastFrame?.close();
      this.lastFrame = frame;
      this.framesRequested++;
      return frame;
    }

    // One of the three if statements above is always true.
    throw new Error('Unreachable code');
  }
}
