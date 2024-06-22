import loadMp4Module from 'mp4-wasm';
import {Project} from '../app/Project';
import type {
  AssetInfo,
  RendererResult,
  RendererSettings,
} from '../app/Renderer';
import {EventDispatcher} from '../events';
import {BoolMetaField, MetaField, ObjectMetaField} from '../meta';
import {Exporter} from './Exporter';

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

export class WasmExporter implements Exporter {
  public static readonly id = '@revideo/core/wasm';
  public static readonly displayName = 'Video (Wasm)';

  public static async create(project: Project, settings: RendererSettings) {
    return new WasmExporter(project, settings);
  }

  private static readonly response = new EventDispatcher<ServerResponse>();

  public constructor(
    private readonly project: Project,
    private readonly settings: RendererSettings,
  ) {}

  // TODO: remove
  private startTime: number = 0;

  public static meta(project: Project): MetaField<any> {
    return new ObjectMetaField(this.displayName, {
      fastStart: new BoolMetaField('fast start', true),
      includeAudio: new BoolMetaField('include audio', true).disable(
        !project.audio,
      ),
    });
  }

  public async start(): Promise<void> {
    this.startTime = Date.now();
  }

  private encoder: any;

  private async configure() {
    const resp = await fetch('/@mp4-wasm');
    const buffer = await resp.arrayBuffer();

    const mp4 = await loadMp4Module({
      wasmBinary: buffer,
    });

    this.encoder = mp4.createWebCodecsEncoder({
      width: this.project.meta.shared.size.get().x,
      height: this.project.meta.shared.size.get().y,
      fps: this.project.meta.rendering.fps.get(),
    });
  }

  public async handleFrame(canvas: HTMLCanvasElement): Promise<void> {
    if (!this.encoder) {
      await this.configure();
    }

    const start = Date.now();

    const frame = new VideoFrame(canvas, {timestamp: 0});
    await this.encoder.addFrame(frame);
    frame.close();

    console.log('Frame took', Date.now() - start, 'ms');
  }

  public async stop(result: RendererResult): Promise<void> {
    // await this.invoke('end', result);
    console.log(result);
    const buf = await this.encoder.end();
    const url = URL.createObjectURL(new Blob([buf], {type: 'video/mp4'}));
    console.log(url);
    console.log(`Rendering took ${(Date.now() - this.startTime) / 1000}s`);

    fetch('/uploadVideoFile', {
      method: 'POST',
      body: buf,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'video/mp4',
      },
    }).then(res => {
      console.log(res);
    });
  }

  public async generateAudio(
    assets: AssetInfo[][],
    startFrame: number,
    endFrame: number,
  ): Promise<void> {
    await this.invoke('generateAudio', {assets, startFrame, endFrame});
  }

  public async mergeMedia(): Promise<void> {
    await this.invoke('mergeMedia', {});
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
      return new Promise(() => {
        /*(response: ServerResponse) => {
          if (response.method !== method) {
            return;
          }

          // FFmpegExporterClient.response.unsubscribe(handle);
          if (response.status === 'success') {
            resolve(response.data as TResponse);
          } else {
            reject({
              message: `An error occurred while exporting the video: ${response.message}`,
              remarks: `Method: ${method}<br>Server error: ${response.message}`,
              object: data,
            });
          }
        };*/
        // FFmpegExporterClient.response.subscribe(handle);
        import.meta.hot!.send('revideo:ffmpeg-exporter', {method, data});
      });
    } else {
      throw new Error('Exporter can only be used locally.');
    }
  }
}
