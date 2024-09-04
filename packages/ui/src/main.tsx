import './index.scss';

import {
  Player,
  Presenter,
  Renderer,
  experimentalLog,
  getFullPreviewSettings,
  type Project,
} from '@revideo/core';
import {ComponentChild, render} from 'preact';
import {Editor} from './Editor';
import {ProjectData, ProjectSelection} from './ProjectSelection';
import {ApplicationProvider, PanelsProvider} from './contexts';
import {ShortcutsProvider} from './contexts/shortcuts';
import GridPlugin from './plugin/GridPlugin';
import {projectNameSignal} from './signals';
import {getItem, setItem} from './utils';

const ExperimentalHooks = [
  'tabs',
  'provider',
  'previewOverlay',
  'presenterOverlay',
] as const;

function renderRoot(vnode: ComponentChild) {
  const root = document.createElement('main');
  document.body.appendChild(root);
  render(vnode, root);
}

export function editor(project: Project) {
  Error.stackTraceLimit = Infinity;
  projectNameSignal.value = project.name;

  project.logger.onLogged.subscribe(log => {
    const {level, message, stack, object, durationMs, ...rest} = log;
    const fn = console[level as 'error'] ?? console.log;
    fn(message, ...[object, durationMs, rest].filter(part => !!part));
    if (stack) {
      fn(stack);
    }
  });

  if (!project.experimentalFeatures) {
    for (const plugin of project.plugins) {
      if (plugin.name.startsWith('@revideo')) {
        continue;
      }

      const experimental = ExperimentalHooks.filter(key => key in plugin);
      if (experimental.length > 0) {
        project.logger.log(
          experimentalLog(
            `Plugin "${
              plugin.name
            }" uses experimental editor hooks: ${experimental.join(', ')}.`,
          ),
        );
      }
    }
  }

  const renderer = new Renderer(project);
  project.plugins.forEach(plugin => plugin.renderer?.(renderer));

  const presenter = new Presenter(project);
  project.plugins.forEach(plugin => plugin.presenter?.(presenter));

  // TODO(refactor)
  // const settings = project.settingsNew;
  /*settings.appearance.color.onChanged.subscribe(() => {
    const color = settings.appearance.color.get();
    if (color) {
      document.body.style.setProperty('--theme', color.css());
      document.body.style.setProperty(
        '--theme-light',
        color.brighten(0.54).css(),
      );
      document.body.style.setProperty(
        '--theme-overlay',
        color.alpha(0.16).css(),
      );
    } else {
      document.body.style.removeProperty('--theme');
      document.body.style.removeProperty('--theme-light');
      document.body.style.removeProperty('--theme-overlay');
    }
  });
  settings.appearance.font.onChanged.subscribe(() => {
    if (settings.appearance.font.get()) {
      document.body.style.setProperty('--font-family', 'JetBrains Mono');
    } else {
      document.body.style.removeProperty('--font-family');
    }
  });*/

  // const meta = project.meta;
  const playerKey = `${project.name}/player`;
  const frameKey = `${project.name}/frame`;
  const player = new Player(
    project,
    getFullPreviewSettings(project),
    getItem(playerKey, {}),
    getItem(frameKey, -1),
  );
  project.plugins.forEach(plugin => plugin.player?.(player));

  player.onStateChanged.subscribe(state => {
    setItem(playerKey, state);
  });
  player.onFrameChanged.subscribe(frame => {
    setItem(frameKey, frame);
  });

  document.title = `${project.name} | Motion Canvas`;

  const plugins = [GridPlugin(), ...project.plugins];

  renderRoot(
    <ApplicationProvider
      application={{
        player,
        renderer,
        presenter,
        project,
        plugins,
      }}
    >
      <PanelsProvider>
        <ShortcutsProvider>
          <Editor />
        </ShortcutsProvider>
      </PanelsProvider>
    </ApplicationProvider>,
  );
}

export function index(projects: ProjectData[]) {
  renderRoot(<ProjectSelection projects={projects} />);
}

export * from './components/animations';
export * from './components/controls';
export * from './components/fields';
export * from './components/icons';
export * from './components/layout';
export * from './components/meta';
export * from './components/tabs';
export * from './contexts';
export * from './hooks';
export * from './plugin';
export * from './signals';
export * from './utils';
