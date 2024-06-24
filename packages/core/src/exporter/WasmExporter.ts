import loadMp4Module from 'mp4-wasm';
import {Project} from '../app/Project';
import type {AssetInfo, RendererSettings} from '../app/Renderer';
import {MetaField, ObjectMetaField} from '../meta';
import {Exporter} from './Exporter';

export class WasmExporter implements Exporter {
  public static readonly id = '@revideo/core/wasm';
  public static readonly displayName = 'Video (Wasm)';

  public static async create(project: Project, settings: RendererSettings) {
    return new WasmExporter(project, settings);
  }

  public constructor(
    private readonly project: Project,
    private readonly settings: RendererSettings,
  ) {}

  public static meta(): MetaField<any> {
    return new ObjectMetaField(this.displayName, {});
  }

  public async start(): Promise<void> {
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

  private encoder: any;

  public async handleFrame(canvas: HTMLCanvasElement): Promise<void> {
    const frame = new VideoFrame(canvas, {timestamp: 0});
    await this.encoder.addFrame(frame);
    frame.close();
  }

  public async stop(): Promise<void> {
    // TODO: use rendering result

    const buf = await this.encoder.end();

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

    await fetch('/audio-processing/merge-media', {
      method: 'POST',
      body: JSON.stringify({
        outputFilename,
        tempDir,
      }),
    });
  }
}