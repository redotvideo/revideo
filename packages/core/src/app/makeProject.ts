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
    plugins: [],
    logger: new Logger(),
    versions: createVersionObject('0.5.9'),
  };
}

export async function addEditorToProject(project: FullProject) {
  const url = '/@id/@revideo/2d/editor';
  const imported = await import(
    /* webpackIgnore: true */ /* @vite-ignore */ url
  );
  const plugin = imported.default();

  return {
    ...project,
    plugins: [...project.plugins, plugin],
  };
}
