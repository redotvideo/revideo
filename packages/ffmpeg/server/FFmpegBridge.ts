import {PluginConfig} from '@revideo/vite-plugin/lib/plugins';
import type {WebSocketServer} from 'vite';
import {
  FFmpegExporterServer,
  FFmpegExporterSettings,
} from './FFmpegExporterServer';
import {VideoFrameExtractor} from './VideoFrameExtractor';

interface BrowserRequest {
  method: string;
  data: unknown;
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
    private readonly config: PluginConfig,
  ) {
    ws.on('revideo/ffmpeg-exporter', this.handleMessage);
    ws.on('revideo/ffmpeg-video-frame', this.handleVideoFrameMessage);
  }

  private handleMessage = async ({method, data}: BrowserRequest) => {
    if (method === 'start') {
      try {
        this.process = new FFmpegExporterServer(
          data as FFmpegExporterSettings,
          this.config,
        );
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
    this.ws.send('revideo/ffmpeg-exporter-ack', {
      status: 'success',
      method,
      data,
    });
  }

  private respondError(method: string, message = 'Unknown error.') {
    this.ws.send('revideo/ffmpeg-exporter-ack', {
      status: 'error',
      method,
      message,
    });
  }

  // List of VideoFrameExtractors
  private videoFrameExtractors = new Map<string, VideoFrameExtractor>();

  private handleVideoFrameMessage = async ({data}: BrowserRequest) => {
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

    if (!extractor) {
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

    this.ws.send('revideo/ffmpeg-video-frame-res', {
      status: 'success',
      data: {
        frame,
      },
    });
  };
}
