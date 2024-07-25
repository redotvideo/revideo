import {parser as javascript} from '@lezer/javascript';
import type {View2D} from '@revideo/2d';
import type {
  FullSceneDescription,
  Player as PlayerType,
  Project,
  Stage as StageType,
  ThreadGeneratorFactory,
} from '@revideo/core';

let ProjectInstance: Project = null;
let Description: FullSceneDescription<ThreadGeneratorFactory<View2D>> = null;
let PlayerInstance: PlayerType = null;
let StageInstance: StageType = null;
let CurrentSetter: (value: PlayerType) => void = null;
let CurrentParent: HTMLElement = null;
let CurrentRatio = 1;

export function disposePlayer(setter: (value: PlayerType) => void) {
  if (CurrentSetter !== setter || !ProjectInstance) return;
  PlayerInstance.deactivate();
  CurrentSetter = null;
  CurrentParent = null;
  StageInstance.finalBuffer.remove();
}

export function updatePlayer(description: typeof Description) {
  if (Description) {
    Description.onReplaced.current = description;
  }
}

export async function borrowPlayer(
  setter: (value: PlayerType) => void,
  parent: HTMLDivElement,
  ratio: number,
): Promise<PlayerType> {
  if (setter === CurrentSetter) return;
  if (
    StageInstance &&
    CurrentParent &&
    StageInstance.finalBuffer.parentElement === CurrentParent
  ) {
    CurrentParent?.removeChild(StageInstance.finalBuffer);
  }
  CurrentSetter?.(null);
  CurrentSetter = setter;
  CurrentParent = parent;

  if (!ProjectInstance) {
    const {
      Logger,
      Player,
      ProjectMetadata,
      Stage,
      ValueDispatcher,
      DefaultPlugin,
    } = await import(/* webpackIgnore: true */ '@revideo/core');
    const {makeScene2D, Code, LezerHighlighter} = await import(
      /* webpackIgnore: true */ '@revideo/2d'
    );

    Code.defaultHighlighter = new LezerHighlighter(
      javascript.configure({
        dialect: 'jsx ts',
      }),
    );

    Description = makeScene2D(function* () {
      yield;
    }) as FullSceneDescription<ThreadGeneratorFactory<View2D>>;
    Description.onReplaced = new ValueDispatcher(Description);

    ProjectInstance = {
      name: 'fiddle',
      logger: new Logger(),
      plugins: [DefaultPlugin()],
      scenes: [Description],
      experimentalFeatures: true,
    } as Project;
    ProjectInstance.meta = new ProjectMetadata(ProjectInstance);
    ProjectInstance.meta.shared.size.set(960);

    PlayerInstance = new Player(ProjectInstance, {
      size: ProjectInstance.meta.shared.size.get(),
    });
    StageInstance = new Stage();
    StageInstance.configure({
      size: ProjectInstance.meta.shared.size.get(),
    });
    PlayerInstance.onRender.subscribe(async () => {
      await StageInstance.render(
        PlayerInstance.playback.currentScene,
        PlayerInstance.playback.previousScene,
      );
    });
    PlayerInstance.onRecalculated.subscribe(() => {
      if (StageInstance.finalBuffer.parentElement !== CurrentParent) {
        CurrentParent?.append(StageInstance.finalBuffer);
        CurrentSetter(PlayerInstance);
      }
    });

    ProjectInstance.logger.onLogged.subscribe(payload => {
      if (payload.level === 'error') {
        return;
      }
    });
  }

  if (CurrentRatio !== ratio) {
    ProjectInstance.meta.shared.size.set([960, Math.floor(960 / ratio)]);
    Description.onReplaced.current = {
      ...Description.onReplaced.current,
      size: ProjectInstance.meta.shared.size.get(),
    };
    StageInstance.configure({
      size: ProjectInstance.meta.shared.size.get(),
    });
    CurrentRatio = ratio;
  }

  PlayerInstance.activate();
  PlayerInstance.requestReset();
  return PlayerInstance;
}

export async function tryBorrowPlayer(
  setter: (value: PlayerType) => void,
  parent: HTMLDivElement,
  ratio: number,
): Promise<PlayerType | null> {
  if (!CurrentSetter) {
    return borrowPlayer(setter, parent, ratio);
  }

  return null;
}
