import DefaultPlugin from '../plugin/DefaultPlugin';
import {Color, Vector2} from '../types';
import {Logger} from './Logger';
import {Project, UserProject, createVersionObject} from './Project';

export function makeProject(project: UserProject): Project {
  // Don't delete, has side effects
  // TODO(konsti): Figure out how to get rid of this
  void DefaultPlugin;

  const modifiedSettings = {
    ...project.settings,
    shared: {
      ...project.settings.shared,
      background: new Color(project.settings.shared.background ?? 'FFFFFF00'),
      size: new Vector2(project.settings.shared.size),
    },
  };

  return {
    ...project,
    name: project.name ?? 'project',
    settings: modifiedSettings,
    plugins: [],
    logger: new Logger(),
    versions: createVersionObject('0.5.9'),
  };
}

export async function addEditorToProject(project: Project) {
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
