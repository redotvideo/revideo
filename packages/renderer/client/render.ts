import {Project, Renderer, RendererResult, Vector2} from '@revideo/core';

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
  startInSeconds: number,
  endInSeconds: number,
  hiddenFolderId: string,
  videoWidth: number,
  videoHeight: number,
) => {
  try {
    const renderer = new Renderer(project);

    const {firstGlobalFrame, lastGlobalFrame} =
      await getGlobalFirstAndLastFrame(
        project,
        renderer,
        startInSeconds,
        endInSeconds,
      );
    const {firstWorkerFrame, lastWorkerFrame} =
      await getWorkerFirstAndLastFrame(
        firstGlobalFrame,
        lastGlobalFrame,
        workerId,
        totalNumOfWorkers,
      );

    const renderSettings = {
      ...project.meta.getFullRenderingSettings(),
      name: project.name,
      hiddenFolderId: hiddenFolderId,
      range: [
        renderer.frameToTime(firstWorkerFrame),
        renderer.frameToTime(lastWorkerFrame),
      ] as [number, number],
    };

    if (videoWidth && videoHeight) {
      renderSettings.size = new Vector2({x: videoWidth, y: videoHeight});
    }

    const result = await renderer.render(renderSettings);
    if (result === RendererResult.Success) {
      window.onRenderComplete();
    } else {
      await new Promise(resolve => setTimeout(resolve, 3000)); // wait for two seconds for error to be handled
      window.onRenderFailed('Render process failed');
    }
  } catch (e: any) {
    window.onRenderFailed(e.message ?? e);
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
      ...project.meta.getFullRenderingSettings(),
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
