import {Plugin} from '../plugin';
import DefaultPlugin from '../plugin/DefaultPlugin';
import {Logger} from './Logger';
import {BaseProject, createVersionObject, FullProject} from './Project';

export function makeProject(project: BaseProject): FullProject {
  // Don't delete, has side effects
  // TODO(konsti): Figure out how to get rid of this
  void DefaultPlugin;

  return {
    ...project,
    name: project.name ?? 'project',
    plugins: [] as Plugin[], // TODO: get rid of this
    logger: new Logger(),
    versions: createVersionObject('0.5.9'),
  };
}
