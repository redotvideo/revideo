import type {BaseProject, FullProject, Player, Renderer} from '../app';
import type {ExporterClass} from '../exporter';

/**
 * Represents a runtime Motion Canvas plugin.
 */
export interface Plugin {
  /**
   * A unique name of the plugin.
   *
   * @remarks
   * The name should be unique across the entire ecosystem of Motion Canvas.
   * If a plugin with the same name has already been registered, this plugin
   * will be ignored.
   *
   * If you intend to publish your plugin to npm, it is recommended to prefix
   * this name with the name of your npm package.
   *
   * Other identifiers defined by the plugin, such as a tab id, will be
   * automatically prefixed with this name and as such don't have to be unique.
   */
  name: string;

  /**
   * Modify the project settings before the project is initialized.
   *
   * @param settings - The project settings.
   */
  settings?(settings: BaseProject): BaseProject | void;

  /**
   * Receive the project instance right after it is initialized.
   *
   * @param project - The project instance.
   */
  project?(project: FullProject): void;

  /**
   * Receive the player instance right after it is initialized.
   *
   * @param player - The player instance.
   */
  player?(player: Player): void;

  /**
   * Receive the renderer instance right after it is initialized.
   *
   * @param renderer - The renderer instance.
   */
  renderer?(renderer: Renderer): void;

  /**
   * Provide custom exporters for the project.
   *
   * @param project - The project instance.
   */
  exporters?(project: FullProject): ExporterClass[];
}
