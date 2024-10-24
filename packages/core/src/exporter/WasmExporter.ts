import loadMp4Module from 'mp4-wasm';
import type {Project} from '../app/Project';
import type {AssetInfo, RendererSettings} from '../app/Renderer';
import type {Exporter} from './Exporter';
import {download} from './download-videos';

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

  public async start(): Promise<void> {
    const resp = await fetch('/@mp4-wasm');
    const buffer = await resp.arrayBuffer();

    const mp4 = await loadMp4Module({
      wasmBinary: buffer,
    });

    this.encoder = mp4.createWebCodecsEncoder({
      width: this.settings.size.x,
      height: this.settings.size.y,
      fps: this.project.settings.rendering.fps,
    });
  }

  private encoder: any;

  public async handleFrame(canvas: HTMLCanvasElement): Promise<void> {
    const frame = new VideoFrame(canvas, {timestamp: 0});
    await this.encoder.addFrame(frame);
    frame.close();
  }

  public async stop(): Promise<void> {
    const buf = await this.encoder.end();

    const formData = new FormData();
    formData.append('file', new Blob([buf], {type: 'video/mp4'}), 'video.mp4');
    formData.append(
      'tempDir',
      `revideo-${this.settings.name}-${this.settings.hiddenFolderId}`,
    );

    await fetch('/revideo-ffmpeg-decoder/finished', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    await fetch('/uploadVideoFile', {
      method: 'POST',
      body: formData,
    });
  }

  public async generateAudio(
    assets: AssetInfo[][],
    startFrame: number,
    endFrame: number,
  ): Promise<void> {
    await fetch('/audio-processing/generate-audio', {
      method: 'POST',
      // TODO: add type and validate on the other side
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
      // TODO: add type and validate on the other side
      body: JSON.stringify({
        outputFilename,
        tempDir,
        format: 'mp4',
      }),
    });
  }

  public async downloadVideos(assets: AssetInfo[][]): Promise<void> {
    await download(assets);
  }
}
