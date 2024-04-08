import type {Project} from '@revideo/core';
import {Renderer} from '@revideo/core';

declare global {
  interface Window {
    onRenderComplete: () => void;
    onRenderFailed: (msg: string) => void;
  }
}

export const render = async (project: Project) => {
  try {
    const renderer = new Renderer(project);
    await renderer.render({
      ...project.meta.getFullRenderingSettings(),
      name: project.name,
    });
    window.onRenderComplete();
  } catch (e: any) {
    window.onRenderFailed(e.message);
  }
};
