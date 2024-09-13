import type {FullProject} from '../app/Project';
import type {
  AssetInfo,
  RendererResult,
  RendererSettings,
} from '../app/Renderer';

/**
 * The static interface for exporters.
 */
export interface ExporterClass {
  /**
   * The unique identifier of this exporter.
   *
   * @remarks
   * This identifier will be used to store the settings of this exporter.
   * It's recommended to prepend it with the name of the package to avoid
   * collisions.
   */
  readonly id: string;

  /**
   * The name of this exporter.
   *
   * @remarks
   * This name will be displayed in the editor.
   */
  readonly displayName: string;

  /**
   * Create an instance of this exporter.
   *
   * @remarks
   * A new exporter is created whenever the user starts a new rendering process.
   *
   * @param project - The current project.
   * @param settings - The rendering settings.
   */
  create(project: FullProject, settings: RendererSettings): Promise<Exporter>;
}

/**
 * The main interface for implementing custom exporters.
 */
export interface Exporter {
  /**
   * Prepare the rendering configuration.
   *
   * @remarks
   * Called at the beginning of the rendering process, before anything else has
   * been set up. The returned value can be used to override the rendering
   * settings provided by the user.
   */
  configuration?(): Promise<RendererSettings | void>;

  /**
   * Begin the rendering process.
   *
   * @remarks
   * Called after the rendering has been set up, right before the first frame
   * is rendered. Once `start()` is called, it is guaranteed that the `stop()`
   * method will be called as well. Can be used to initialize any resources that
   * require a clean-up.
   */
  start?(): Promise<void>;

  /**
   * Export a frame.
   *
   * @remarks
   * Called each time after a frame is rendered.
   *
   * @param canvas - A canvas containing the rendered frame.
   * @param frame - The frame number.
   * @param sceneFrame - The frame number within the scene.
   * @param sceneName - The name of the scene with which the frame is associated.
   * @param signal - An abort signal triggered if the user aborts the rendering.
   */
  handleFrame(
    canvas: HTMLCanvasElement,
    frame: number,
    sceneFrame: number,
    sceneName: string,
    signal: AbortSignal,
  ): Promise<void>;

  /**
   * after processing the image stream and generating an audio file, merge the video and audio stream as the final video
   */
  mergeMedia?(): Promise<void>;

  /**
   * Take in media assets per frame and generate audio track for the video.
   */
  generateAudio?(
    assetsInfo: AssetInfo[][],
    startFrame: number,
    endFrame: number,
  ): Promise<void>;

  /**
   * Download all assets necessary for the export process
   */
  downloadVideos?(assetsInfo: AssetInfo[][]): Promise<void>;

  /**
   * Finish the rendering process.
   *
   * @remarks
   * Called after rendering the visual elements has finished and audio so that audio track can be merged.
   *
   * @param result - The result of the rendering.
   */
  stop?(result: RendererResult): Promise<void>;

  /**
   * Finish the rendering process.
   *
   * @remarks
   * Guaranteed to be called after the rendering has finished - no matter the
   * result. Performs clean-up.
   *
   */
  kill?(): Promise<void>;
}
