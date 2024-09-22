import {Project} from '../app/Project';
import type {
  AssetInfo,
  RendererResult,
  RendererSettings,
} from '../app/Renderer';
import {EventDispatcher} from '../events';
import {Exporter} from './Exporter';
import {download} from './download-videos';

type ServerResponse =
  | {
      status: 'success';
      method: string;
      data: unknown;
    }
  | {
      status: 'error';
      method: string;
      message?: string;
    };

export interface FfmpegExporterOptions {
  format: 'mp4' | 'webm' | 'proRes';
}

/**
 * FFmpeg video exporter.
 *
 * @remarks
 * Most of the export logic is handled on the server. This class communicates
 * with the FFmpegBridge through a WebSocket connection which lets it invoke
 * methods on the FFmpegExporterServer class.
 *
 * For example, calling the following method:
 * ```ts
 * async this.invoke('process', 7);
 * ```
 * Will invoke the `process` method on the FFmpegExporterServer class with `7`
 * as the argument. The result of the method will be returned as a Promise.
 *
 * Before any methods can be invoked, the FFmpegExporterServer class must be
 * initialized by invoking `start`.
 */
export class FFmpegExporterClient implements Exporter {
  public static readonly id = '@revideo/core/ffmpeg';
  public static readonly displayName = 'Video (FFmpeg)';

  public static async create(project: Project, settings: RendererSettings) {
    return new FFmpegExporterClient(project, settings);
  }

  private static readonly response = new EventDispatcher<ServerResponse>();

  static {
    if (import.meta.hot) {
      import.meta.hot.on(
        `revideo:ffmpeg-exporter-ack`,
        (response: ServerResponse) => this.response.dispatch(response),
      );
    }
  }

  public constructor(
    private readonly project: Project,
    private readonly settings: RendererSettings,
  ) {}

  public async start(): Promise<void> {
    await this.invoke('start', this.settings);
  }

  public async handleFrame(canvas: HTMLCanvasElement): Promise<void> {
    const format = (this.settings.exporter.options as FfmpegExporterOptions)
      .format;
    const blob = await new Promise<Blob | null>(resolve =>
      canvas.toBlob(
        resolve,
        ['proRes', 'webm'].includes(format) ? 'image/png' : 'image/jpeg',
      ),
    );

    if (!blob) {
      throw Error('Failed to convert canvas to Blob.');
    }

    const dataUrl = await this.blobToDataUrl(blob);
    await this.invoke('handleFrame', {
      data: dataUrl,
    });
  }

  private async blobToDataUrl(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  public async stop(result: RendererResult): Promise<void> {
    await this.invoke('end', result);
    await fetch('/revideo-ffmpeg-decoder/finished', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
  }

  public async kill(): Promise<void> {
    await this.invoke('kill', {});
  }

  public async downloadVideos(assets: AssetInfo[][]): Promise<void> {
    await download(assets);
  }

  public async generateAudio(
    assets: AssetInfo[][],
    startFrame: number,
    endFrame: number,
  ): Promise<void> {
    await fetch('/audio-processing/generate-audio', {
      method: 'POST',
      body: JSON.stringify({
        tempDir: `revideo-${this.settings.name}-${this.settings.hiddenFolderId}`,
        assets,
        startFrame,
        endFrame,
        fps: this.settings.fps,
      }),
    });
  }

  public async mergeMedia(): Promise<void> {
    const outputFilename = this.settings.name;
    const tempDir = `revideo-${this.settings.name}-${this.settings.hiddenFolderId}`;
    const format = (this.settings.exporter.options as FfmpegExporterOptions)
      .format;

    await fetch('/audio-processing/merge-media', {
      method: 'POST',
      body: JSON.stringify({
        outputFilename,
        tempDir,
        format,
      }),
    });
  }

  /**
   * Remotely invoke a method on the server and wait for a response.
   *
   * @param method - The method name to execute on the server.
   * @param data - The data that will be passed as an argument to the method.
   *               Should be serializable.
   */
  private invoke<TResponse = unknown, TData = unknown>(
    method: string,
    data: TData,
  ): Promise<TResponse> {
    if (import.meta.hot) {
      return new Promise((resolve, reject) => {
        const handle = (response: ServerResponse) => {
          if (response.method !== method) {
            return;
          }

          FFmpegExporterClient.response.unsubscribe(handle);
          if (response.status === 'success') {
            resolve(response.data as TResponse);
          } else {
            reject({
              message: `An error occurred while exporting the video: ${response.message}`,
              remarks: `Method: ${method}<br>Server error: ${response.message}`,
              object: data,
            });
          }
        };
        FFmpegExporterClient.response.subscribe(handle);
        import.meta.hot!.send('revideo:ffmpeg-exporter', {method, data});
      });
    } else {
      throw new Error('FFmpegExporter can only be used locally.');
    }
  }
}
