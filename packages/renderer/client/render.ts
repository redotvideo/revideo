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
) => {
  try {
    const renderer = new Renderer(project);

    const settings = {
      ...project.meta.getFullRenderingSettings(),
      name: project.name,
    };

    const frames = await renderer.getNumberOfFrames(settings);

    // Get the range of frames to render (there can't be any overlap between workers)
    const framesPerWorker = Math.ceil(frames / totalNumOfWorkers);
    const startFrame = framesPerWorker * workerId;
    const endFrame = Math.min(startFrame + framesPerWorker, frames);

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
