import styles from './Editor.module.scss';
import {Console} from './components/console';
import {Footer} from './components/footer';
import {ElementSwitch, Navigation, ResizeableLayout} from './components/layout';
import {Threads} from './components/sidebar';
import {Timeline} from './components/timeline';
import {Viewport} from './components/viewport';
import {usePanels} from './contexts';
import {EditorPanel} from './signals';

export function Editor() {
  const {sidebar, bottom} = usePanels();

  return (
    <div className={styles.root}>
      <Navigation />
      <ResizeableLayout
        id={`main-timeline`}
        hidden={bottom.isHidden}
        offset={-160}
        vertical
      >
        <ResizeableLayout
          id={`sidebar-viewport`}
          hidden={sidebar.isHidden}
          offset={400}
        >
          <ElementSwitch
            value={sidebar.current.value}
            cases={{
              [EditorPanel.Threads]: Threads,
              [EditorPanel.Console]: Console,
            }}
          />
          <Viewport />
        </ResizeableLayout>
        <ElementSwitch
          value={bottom.current.value}
          cases={{
            [EditorPanel.Timeline]: Timeline,
          }}
        />
      </ResizeableLayout>
      <Footer />
    </div>
  );
}
