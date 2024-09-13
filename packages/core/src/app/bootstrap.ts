import {Plugin} from '../plugin';
import DefaultPlugin from '../plugin/DefaultPlugin';
import {Logger} from './Logger';
import {
  BaseProject,
  createVersionObject,
  FullProject,
  UserSettings,
} from './Project';

/**
 * // TODO(refactor): delete
 * Bootstrap a project.
 *
 * @param name - The name of the project.
 * @param versions - Package versions.
 * @param config - Project settings.
 * @param settingsFile - The settings meta file.
 * @param logger - An optional logger instance.
 *
 * @internal
 */
export function bootstrap(
  name: string,
  config: BaseProject,
  settings: UserSettings,
): FullProject {
  // Don't delete, has side effects
  // TODO(konsti): Figure out how to get rid of this
  void DefaultPlugin;

  const version = '0.5.9';

  const project = {
    name,
    ...config,
    plugins: [] as Plugin[], // TODO(refactor): get rid of this
    versions: createVersionObject(version),
    logger: new Logger(),
    settings,
  } as FullProject;

  return project;
}

// TODO(refactor): naming
export function bootstrapNew(project: BaseProject): FullProject {
  return {
    ...project,
    name: project.name ?? 'project',
    plugins: [] as Plugin[], // TODO: get rid of this
    logger: new Logger(),
    versions: createVersionObject('0.5.9'),
  };
}
