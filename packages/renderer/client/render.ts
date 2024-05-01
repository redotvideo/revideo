import type {Project} from '@revideo/core';
import {Renderer} from '@revideo/core';

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

    await renderer.render({
      ...project.meta.getFullRenderingSettings(),
      name: project.name,
      hiddenFolderId: hiddenFolderId,
      range: [
        renderer.frameToTime(firstWorkerFrame),
        renderer.frameToTime(lastWorkerFrame),
      ],
    });
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
  const videoDurationInFrames = lastGlobalFrame - firstGlobalFrame + 1;
  const framesPerWorker = Math.ceil(videoDurationInFrames / totalNumOfWorkers);

  const firstWorkerFrame = firstGlobalFrame + framesPerWorker * workerId;
  const lastWorkerFrame = Math.min(
    firstWorkerFrame + framesPerWorker,
    lastGlobalFrame,
  );

  return {firstWorkerFrame, lastWorkerFrame};
}
