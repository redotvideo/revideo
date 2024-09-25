import DefaultPlugin from '../plugin/DefaultPlugin';
import {Color, Vector2} from '../types';
import {Logger} from './Logger';
import {
  Project,
  UserProject,
  UserProjectSettings,
  createVersionObject,
} from './Project';

export function makeProject(project: UserProject): Project {
  // Don't delete, has side effects
  // TODO(konsti): Figure out how to get rid of this
  void DefaultPlugin;

  const defaultSettings: UserProjectSettings = {
    shared: {
      background: 'FFFFFF00',
      range: [0, Infinity],
      size: {x: 1920, y: 1080},
    },
    rendering: {
      exporter: {
        name: '@revideo/core/wasm',
        options: {
          format: 'mp4',
        },
      },
      fps: 30,
      resolutionScale: 1,
      colorSpace: 'srgb',
    },
    preview: {
      fps: 30,
      resolutionScale: 1,
    },
  };

  const settings: UserProjectSettings = {
    ...defaultSettings,
    ...project.settings,
    shared: {
      ...defaultSettings.shared,
      ...project.settings?.shared,
    },
    rendering: {
      ...defaultSettings.rendering,
      ...project.settings?.rendering,
    },
    preview: {
      ...defaultSettings.preview,
      ...project.settings?.preview,
    },
  };

  const modifiedSettings = {
    ...settings,
    shared: {
      ...settings.shared,
      background: new Color(settings.shared.background ?? 'FFFFFF00'),
      size: new Vector2(settings.shared.size),
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
