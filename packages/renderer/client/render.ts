import {
  Color,
  Project,
  Renderer,
  UserProjectSettings,
  Vector2,
  getFullRenderingSettings,
} from '@revideo/core';

declare global {
  interface Window {
    onRenderComplete: () => void;
    onRenderFailed: (msg: string) => void;
  }
}

/**
 * Render the project.
 * @param project - The project to render.
 * @param range - The range of frames to render.
 */
export const render = async (
  project: Project,
  workerId: number,
  totalNumOfWorkers: number,
  hiddenFolderId: string,
  projectRenderSettings: Partial<
    UserProjectSettings['shared'] & UserProjectSettings['rendering']
  >,
) => {
  try {
    const renderer = new Renderer(project);

    const {firstGlobalFrame, lastGlobalFrame} =
      await getGlobalFirstAndLastFrame(
        project,
        renderer,
        projectRenderSettings.range?.[0] ?? 0,
        projectRenderSettings.range?.[1] ?? Infinity,
      );

    const {firstWorkerFrame, lastWorkerFrame} =
      await getWorkerFirstAndLastFrame(
        firstGlobalFrame,
        lastGlobalFrame,
        workerId,
        totalNumOfWorkers,
      );

    const fullRenderingSettings = getFullRenderingSettings(project);

    const renderSettings = {
      ...fullRenderingSettings,
      name: project.name,
      hiddenFolderId: hiddenFolderId,
      ...projectRenderSettings,
      range: [
        renderer.frameToTime(firstWorkerFrame),
        renderer.frameToTime(lastWorkerFrame),
      ] as [number, number],
      size: projectRenderSettings.size
        ? new Vector2(
            projectRenderSettings.size.x,
            projectRenderSettings.size.y,
          )
        : fullRenderingSettings.size,
      background: projectRenderSettings.background
        ? new Color(projectRenderSettings.background)
        : fullRenderingSettings.background,
    };

    await renderer.render(renderSettings);
    window.onRenderComplete();
  } catch (e: any) {
    window.onRenderFailed(e.message);
  }
};

/**
 * Calculate the first and last "global" frame, i.e. frame independent of worker
 */
async function getGlobalFirstAndLastFrame(
  project: Project,
  renderer: Renderer,
  startSecondFromUser: number,
  endSecondFromUser: number,
) {
  const firstGlobalFrame = renderer.timeToFrame(startSecondFromUser);
  let lastGlobalFrame: number;

  // If end value is provided by user, lastFrame can be obtained.
  if (isFinite(endSecondFromUser)) {
    lastGlobalFrame = renderer.timeToFrame(endSecondFromUser);
  } else {
    // Otherwise, endSecondFromUser is infinity, so lastGlobalFrame is the duration of the video.
    const settings = {
      ...getFullRenderingSettings(project),
      name: project.name,
    };
    lastGlobalFrame = await renderer.getNumberOfFrames(settings);
  }

  return {firstGlobalFrame, lastGlobalFrame};
}

async function getWorkerFirstAndLastFrame(
  firstGlobalFrame: number,
  lastGlobalFrame: number,
  workerId: number,
  totalNumOfWorkers: number,
) {
  const videoDurationInFrames = lastGlobalFrame - firstGlobalFrame;
  const framesPerWorker = Math.ceil(videoDurationInFrames / totalNumOfWorkers);

  const offset = workerId === 0 ? 0 : 1;
  const firstWorkerFrame =
    firstGlobalFrame + framesPerWorker * workerId + offset;
  const lastWorkerFrame = Math.min(
    firstWorkerFrame + framesPerWorker - offset,
    lastGlobalFrame,
  );

  return {firstWorkerFrame, lastWorkerFrame};
}
