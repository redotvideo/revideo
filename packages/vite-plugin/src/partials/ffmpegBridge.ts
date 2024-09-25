import {
  FFmpegExporterServer,
  FFmpegExporterSettings,
  VideoFrameExtractor,
  generateAudio,
  mergeMedia,
} from '@revideo/ffmpeg';
import {existsSync, unlinkSync} from 'fs';
import type {IncomingMessage, ServerResponse} from 'http';
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

      const handlePostRequest = async (
        req: IncomingMessage,
        res: ServerResponse,
        handler: (data: any) => Promise<any>,
      ) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end('Method Not Allowed');
          return;
        }

        try {
          const body: any = await new Promise((resolve, reject) => {
            let data = '';
            req.on('data', (chunk: string) => (data += chunk));
            req.on('end', () => resolve(data));
            req.on('error', reject);
          });

          const parsedBody = JSON.parse(body);
          const result = await handler(parsedBody);

          if (res.writableEnded) {
            return;
          }

          res.statusCode = 200;
          if (result) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
            return;
          }
          res.end('OK');
        } catch (error) {
          console.error('error in request handler', error);
          res.statusCode = 500;
          res.end('Internal Server Error');
        }
      };

      server.middlewares.use('/audio-processing/generate-audio', (req, res) =>
        handlePostRequest(
          req,
          res,
          async ({tempDir, assets, startFrame, endFrame, fps}) =>
            generateAudio({
              outputDir: output,
              tempDir,
              assets,
              startFrame,
              endFrame,
              fps,
            }),
        ),
      );

      server.middlewares.use('/audio-processing/merge-media', (req, res) =>
        handlePostRequest(req, res, async ({outputFilename, tempDir, format}) =>
          mergeMedia(outputFilename, output, tempDir, format),
        ),
      );

      server.middlewares.use(
        '/revideo-ffmpeg-decoder/video-frame',
        (req, res) =>
          handlePostRequest(req, res, async data => {
            const {frame, width, height} =
              await ffmpegBridge.handleDecodeVideoFrame(data);
            res.setHeader('X-Frame-Width', width.toString());
            res.setHeader('X-Frame-Height', height.toString());
            res.setHeader('Content-Type', 'application/octet-stream');
            res.end(Buffer.from(frame as Buffer));
          }),
      );

      server.middlewares.use('/revideo-ffmpeg-decoder/finished', (req, res) => {
        handlePostRequest(req, res, async () => {
          await ffmpegBridge.handleRenderFinished();
        });
      });

      server.middlewares.use(
        '/revideo-ffmpeg-decoder/download-video-chunks',
        (req, res) =>
          handlePostRequest(req, res, async videoDurations => {
            const downloadedPaths =
              await ffmpegBridge.handleDownloadVideoChunks(videoDurations);
            return {success: true, paths: downloadedPaths};
          }),
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

  public async handleDownloadVideoChunks(
    videoDurations: {src: string; startTime: number; endTime: number}[],
  ) {
    const downloadPromises = videoDurations.map(({src, startTime, endTime}) =>
      VideoFrameExtractor.downloadVideoChunk(src, startTime, endTime),
    );
    await Promise.all(downloadPromises);
  }

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
        height: extractor!.getHeight(),
      };
    }

    // If the video has skipped back we need to create a new extractor
    if (
      extractor &&
      typedData.startTime + frameDuration < extractor.getTime()
    ) {
      extractor.destroy();
      this.videoFrameExtractors.delete(id);
      extractor = undefined;
    }

    // If the video has skipped forward we need to create a new extractor
    if (
      extractor &&
      typedData.startTime > extractor.getTime() + frameDuration
    ) {
      extractor.destroy();
      this.videoFrameExtractors.delete(id);
      extractor = undefined;
    }

    if (!extractor) {
      extractor = new VideoFrameExtractor(
        data.filePath,
        data.startTime,
        data.fps,
        data.duration,
      );
      this.videoFrameExtractors.set(id, extractor);
    }

    // Go to the frame that is closest to the requested time
    const frame = await extractor.popImage();

    return {
      frame: frame,
      width: extractor!.getWidth(),
      height: extractor!.getHeight(),
    };
  }

  public async handleRenderFinished() {
    this.videoFrameExtractors.forEach(extractor => {
      extractor.destroy();
      const localFile = VideoFrameExtractor.downloadedVideoMap.get(
        extractor.filePath,
      )?.localPath;
      if (localFile && existsSync(localFile)) {
        unlinkSync(localFile);
      }
    });
    this.videoFrameExtractors.clear();
  }
}
