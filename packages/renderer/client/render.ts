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
) => {
  try {
    const renderer = new Renderer(project);

    const settings = {
      ...project.meta.getFullRenderingSettings(),
      name: project.name,
    };

    const firstFrame = renderer.timeToFrame(startInSeconds);

    let frames: number;
    console.log('startInSeconds', startInSeconds);
    console.log('endInSeconds', endInSeconds);
    console.log('!isFinite', !isFinite(endInSeconds));
    console.log('startInSeconds === 0', startInSeconds === 0);
    if (startInSeconds === 0 && !isFinite(endInSeconds)) {
      console.log('option 1');
      frames = await renderer.getNumberOfFrames(settings);
    } else {
      console.log('option 2');
      frames = renderer.timeToFrame(endInSeconds) - firstFrame + 1;
    }

    // Get the range of frames to render (there can't be any overlap between workers)
    const framesPerWorker = Math.ceil(frames / totalNumOfWorkers);
    const startFrame = firstFrame + framesPerWorker * workerId;
    const endFrame = Math.min(
      startFrame + framesPerWorker,
      startFrame + frames,
    );

    await renderer.render({
      ...project.meta.getFullRenderingSettings(),
      name: project.name,
      range: [renderer.frameToTime(startFrame), renderer.frameToTime(endFrame)],
    });
    window.onRenderComplete();
  } catch (e: any) {
    window.onRenderFailed(e.message);
  }
};
