import {Plugin} from '../plugin';
import DefaultPlugin from '../plugin/DefaultPlugin';
import {setAssetBase} from '../utils';
import {Logger} from './Logger';
import {Project, ProjectDescription, UserSettings, Versions} from './Project';

/**
 * Bootstrap a project.
 *
 * @param name - The name of the project.
 * @param versions - Package versions.
 * @param plugins - Loaded plugins.
 * @param config - Project settings.
 * @param metaFile - The project meta file.
 * @param settingsFile - The settings meta file.
 * @param logger - An optional logger instance.
 *
 * @internal
 */
export function bootstrap(
  name: string,
  versions: Versions,
  plugins: Plugin[],
  config: ProjectDescription,
  settings: UserSettings,

  logger = config.logger ?? new Logger(),
): Project {
  // Don't delete, has side effects
  // TODO(konsti): Figure out how to get rid of this
  void DefaultPlugin;

  const project = {
    name,
    ...config,
    plugins,
    versions,
    logger,
    settings,
    setAssetBase: setAssetBase,
  } as Project;

  return project;
}
