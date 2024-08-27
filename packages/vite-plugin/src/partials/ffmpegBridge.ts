import {
  FFmpegExporterServer,
  FFmpegExporterSettings,
  VideoFrameExtractor,
  generateAudio,
  mergeMedia,
} from '@revideo/ffmpeg';
import type {Plugin, WebSocketServer} from 'vite';

interface BrowserRequest {
  method: string;
  data: unknown;
}

interface ExporterPluginConfig {
  output: string;
}

export function ffmpegBridgePlugin({output}: ExporterPluginConfig): Plugin {
  return {
    name: 'revideo/ffmpeg',

    configureServer(server) {
      const ffmpegBridge = new FFmpegBridge(server.ws, {output});

      server.middlewares.use(
        '/audio-processing/generate-audio',
        async (req, res) => {
          if (req.method !== 'POST') {
            return;
          }

          const {tempDir, assets, startFrame, endFrame, fps} = JSON.parse(
            await new Promise((resolve, reject) => {
              let body = '';
              req.on('data', chunk => (body += chunk));
              req.on('end', () => resolve(body));
              req.on('error', reject);
            }),
          );

          try {
            await generateAudio({
              outputDir: output,
              tempDir,
              assets,
              startFrame,
              endFrame,
              fps,
            });
            res.statusCode = 200;
          } catch (e) {
            console.error(e);
            res.statusCode = 500;
          } finally {
            res.end();
          }
        },
      );

      server.middlewares.use(
        '/audio-processing/merge-media',
        async (req, res) => {
          if (req.method !== 'POST') {
            return;
          }

          const {outputFilename, tempDir} = JSON.parse(
            await new Promise((resolve, reject) => {
              let body = '';
              req.on('data', chunk => (body += chunk));
              req.on('end', () => resolve(body));
              req.on('error', reject);
            }),
          );

          try {
            await mergeMedia(outputFilename, output, tempDir);
            res.statusCode = 200;
          } catch (e) {
            console.error(e);
            res.statusCode = 500;
          } finally {
            res.end();
          }
        },
      );

      server.middlewares.use(
        '/revideo-ffmpeg-decoder/video-frame',
        async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end('Method Not Allowed');
            return;
          }
      
          let body = '';
          req.on('data', chunk => (body += chunk));
          req.on('end', async () => {
            console.log("received getframe request", JSON.parse(body));
            try {
              const data = JSON.parse(body);
              const {frame, width, height} = await ffmpegBridge.handleDecodeVideoFrame(data);
      
              // Send frame dimensions as headers
              res.setHeader('X-Frame-Width', width.toString());
              res.setHeader('X-Frame-Height', height.toString());
              
              res.setHeader('Content-Type', 'application/octet-stream');
              res.end(Buffer.from(frame as Buffer));
            } catch (e) {
              console.error(e);
              res.statusCode = 500;
              res.end('Internal Server Error');
            }
          });
        },
      );
    },
  };
}

/**
 * A simple bridge between the FFmpegExporterServer and FFmpegExporterClient.
 *
 * @remarks
 * This class lets the client exporter invoke methods on the server and receive
 * responses using a simple Promise-based API.
 */
export class FFmpegBridge {
  private process: FFmpegExporterServer | null = null;

  public constructor(
    private readonly ws: WebSocketServer,
    private readonly config: ExporterPluginConfig,
  ) {
    ws.on('revideo:ffmpeg-exporter', this.handleMessage);
  }

  private handleMessage = async ({method, data}: BrowserRequest) => {
    if (method === 'start') {
      try {
        this.process = new FFmpegExporterServer({
          ...(data as FFmpegExporterSettings),
          ...this.config,
        });
        this.respondSuccess(method, await this.process.start());
      } catch (e: any) {
        this.respondError(method, e?.message);
      }
      return;
    }

    if (!this.process) {
      this.respondError(method, 'The exporting process has not been started.');
      return;
    }

    if (!(method in this.process)) {
      this.respondError(method, `Unknown method: "${method}".`);
      return;
    }

    try {
      this.respondSuccess(method, await (this.process as any)[method](data));
    } catch (e: any) {
      this.respondError(method, e?.message);
    }

    if (method === 'kill') {
      this.process = null;
      return;
    }
  };

  private respondSuccess(method: string, data: any = {}) {
    this.ws.send('revideo:ffmpeg-exporter-ack', {
      status: 'success',
      method,
      data,
    });
  }

  private respondError(method: string, message = 'Unknown error.') {
    this.ws.send('revideo:ffmpeg-exporter-ack', {
      status: 'error',
      method,
      message,
    });
  }

  // List of VideoFrameExtractors
  private videoFrameExtractors = new Map<string, VideoFrameExtractor>();

  public async handleDecodeVideoFrame(data: {
    id: string;
    filePath: string;
    startTime: number;
    duration: number;
    fps: number;
  }) {
    const typedData = data as {
      id: string;
      filePath: string;
      startTime: number;
      duration: number;
      fps: number;
    };

    // Check if we already have a VideoFrameExtractor for this video
    const id = typedData.filePath + '-' + typedData.id;
    let extractor = this.videoFrameExtractors.get(id);

    const frameDuration = 1 / typedData.fps;

    const isOldFrame =
      extractor &&
      Math.abs(typedData.startTime - extractor.getLastTime()) <
        frameDuration / 2;

    // If time has not changed, return the last frame
    if (isOldFrame) {
      const frame = extractor!.getLastFrame();
      return {
        frame,
        width: extractor!.getWidth(),
        height: extractor!.getHeight()
      };
    }

    // If the video has skipped back we need to create a new extractor
    if (
      extractor &&
      typedData.startTime + frameDuration < extractor.getTime()
    ) {
      console.log("destroy case UNNNNNNOOOOOO")
      console.log("reasons", typedData.startTime, frameDuration, extractor.getTime());
      extractor.destroy();
      this.videoFrameExtractors.delete(id);
      extractor = undefined;
    }

    // If the video has skipped forward we need to create a new extractor
    if (
      extractor &&
      typedData.startTime > extractor.getTime() + frameDuration
    ) {
      console.log("destroy case DOOOOOOOOOOS")
      extractor.destroy();
      this.videoFrameExtractors.delete(id);
      extractor = undefined;
    }

    if (!extractor) {
      console.log("no extractor, creating new");
      extractor = new VideoFrameExtractor(
        typedData.filePath,
        typedData.startTime,
        typedData.fps,
        typedData.duration,
      );
      this.videoFrameExtractors.set(id, extractor);
    }

    // Go to the frame that is closest to the requested time
    const frame = await extractor.popImage();

    return {
      frame: frame,
      width: extractor!.getWidth(),
      height: extractor!.getHeight()
    };
  }

  private handleRenderFinished = async () => {
    console.log("destroy case TREEEEEES")
    this.videoFrameExtractors.forEach(extractor => extractor.destroy());
    this.videoFrameExtractors.clear();
  };
}