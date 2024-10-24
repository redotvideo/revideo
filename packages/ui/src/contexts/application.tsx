import type {Signal} from '@preact/signals';
import {useSignal} from '@preact/signals';
import type {Player, Project, Renderer} from '@revideo/core';
import type {ComponentChildren} from 'preact';
import {createContext} from 'preact';
import {useContext, useRef} from 'preact/hooks';
import {useSubscribable} from '../hooks';
import type {EditorPlugin} from '../plugin';
import {LoggerManager} from '../utils';

export interface Inspection {
  key: string;
  payload: unknown;
}

interface Application {
  project: Project;
  player: Player;
  renderer: Renderer;
  plugins: EditorPlugin[];
  logger: LoggerManager;
  inspection: Signal<Inspection>;
}

const ApplicationContext = createContext<Application | null>(null);

export function useApplication(): Application {
  return useContext(ApplicationContext);
}

export function ApplicationProvider({
  application,
  children,
}: {
  application: Omit<Application, 'logger' | 'inspection'>;
  children: ComponentChildren;
}) {
  const inspection = useSignal<Inspection>({key: '', payload: null});
  const manager = useRef<LoggerManager | null>(null);
  manager.current ??= new LoggerManager(application.project.logger);
  useSubscribable(
    application.player.onRecalculated,
    () => manager.current.clear(),
    [],
  );

  return (
    <ApplicationContext.Provider
      value={{
        ...application,
        logger: manager.current,
        inspection,
      }}
    >
      {application.plugins.reduce((children, plugin) => {
        const Component = plugin.provider;
        return Component ? <Component>{children}</Component> : children;
      }, children)}
    </ApplicationContext.Provider>
  );
}
