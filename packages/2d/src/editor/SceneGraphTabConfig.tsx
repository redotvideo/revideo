import type {PluginTabConfig, PluginTabProps} from '@revideo/ui';
import {
  AccountTree,
  emphasize,
  Pane,
  Tab,
  useApplication,
  usePanels,
  useReducedMotion,
} from '@revideo/ui';

import {useSignalEffect} from '@preact/signals';
import {useEffect, useRef} from 'preact/hooks';
import {usePluginState} from './Provider';
import {DetachedRoot, ViewRoot} from './tree';

function TabComponent({tab}: PluginTabProps) {
  const {sidebar} = usePanels();
  const inspectorTab = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const {selectedKey} = usePluginState();
  const {logger} = useApplication();

  useEffect(
    () =>
      logger.onInspected.subscribe(key => {
        sidebar.set(tab);
        selectedKey.value = key;
      }),
    [tab],
  );

  useSignalEffect(() => {
    if (
      selectedKey.value &&
      sidebar.current.peek() !== tab &&
      !reducedMotion &&
      inspectorTab.current &&
      inspectorTab.current.getAnimations().length < 2
    ) {
      inspectorTab.current.animate(emphasize(), {duration: 400});
      inspectorTab.current.animate([{color: 'white'}, {color: ''}], {
        duration: 800,
      });
    }
  });

  return (
    <Tab
      forwardRef={inspectorTab}
      title="Scene Graph"
      id="scene-graph-tab"
      tab={tab}
    >
      <AccountTree />
    </Tab>
  );
}

function PaneComponent() {
  const {selectedKey} = usePluginState();

  return (
    <Pane
      title="Scene Graph"
      id="scene-graph-pane"
      onClick={() => {
        selectedKey.value = null;
      }}
    >
      <ViewRoot />
      <DetachedRoot />
    </Pane>
  );
}

export const SceneGraphTabConfig: PluginTabConfig = {
  name: 'scene-graph',
  tabComponent: TabComponent,
  paneComponent: PaneComponent,
};
