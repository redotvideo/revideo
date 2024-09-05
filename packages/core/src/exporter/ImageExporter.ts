import type {Logger} from '../app/Logger';
import type {Project} from '../app/Project';
import type {RendererSettings} from '../app/Renderer';
import {EventDispatcher} from '../events';
import {clamp} from '../tweening';
import {CanvasOutputMimeType} from '../types';
import type {Exporter} from './Exporter';

const EXPORT_FRAME_LIMIT = 256;
const EXPORT_RETRY_DELAY = 1000;

export interface ImageExporterOptions {
  name: string;
  quality: number;
  fileType: CanvasOutputMimeType;
  groupByScene: boolean;
}

interface ServerResponse {
  frame: number;
}

/**
 * Image sequence exporter.
 *
 * @internal
 */
export class ImageExporter implements Exporter {
  public static readonly id = '@revideo/core/image-sequence';
  public static readonly displayName = 'Image sequence';

  public static async create(
    project: Project,
    settings: RendererSettings,
  ): Promise<ImageExporter> {
    return new ImageExporter(project.logger, settings);
  }

  private static readonly response = new EventDispatcher<ServerResponse>();

  static {
    if (import.meta.hot) {
      import.meta.hot.on('revideo:export-ack', response => {
        this.response.dispatch(response);
      });
    }
  }

  private readonly frameLookup = new Set<number>();
  private readonly projectName: string;
  private readonly quality: number;
  private readonly fileType: CanvasOutputMimeType;
  private readonly groupByScene: boolean;

  public constructor(
    private readonly logger: Logger,
    settings: RendererSettings,
  ) {
    const options = settings.exporter.options as ImageExporterOptions;
    this.projectName = settings.name;
    this.quality = clamp(0, 1, options.quality / 100);
    this.fileType = options.fileType;
    this.groupByScene = options.groupByScene;
  }

  public async start() {
    ImageExporter.response.subscribe(this.handleResponse);
  }

  public async handleFrame(
    canvas: HTMLCanvasElement,
    frame: number,
    sceneFrame: number,
    sceneName: string,
    signal: AbortSignal,
  ) {
    if (this.frameLookup.has(frame)) {
      this.logger.warn(`Frame no. ${frame} is already being exported.`);
      return;
    }
    if (import.meta.hot) {
      while (this.frameLookup.size > EXPORT_FRAME_LIMIT) {
        await new Promise(resolve => setTimeout(resolve, EXPORT_RETRY_DELAY));
        if (signal.aborted) {
          return;
        }
      }

      this.frameLookup.add(frame);
      import.meta.hot!.send('revideo:export', {
        frame,
        sceneFrame,
        data: canvas.toDataURL(this.fileType, this.quality),
        mimeType: this.fileType,
        subDirectories: this.groupByScene
          ? [this.projectName, sceneName]
          : [this.projectName],
        groupByScene: this.groupByScene,
      });
    }
  }

  public async stop() {
    while (this.frameLookup.size > 0) {
      await new Promise(resolve => setTimeout(resolve, EXPORT_RETRY_DELAY));
    }
    ImageExporter.response.unsubscribe(this.handleResponse);
  }

  private handleResponse = ({frame}: ServerResponse) => {
    this.frameLookup.delete(frame);
  };
}
