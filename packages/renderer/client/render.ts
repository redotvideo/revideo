import type {Project} from '@revideo/core';
import {Renderer} from '@revideo/core';

declare global {
  interface Window {
    onRenderComplete: () => void;
  }
}

export const render = async (project: Project) => {
  try {
    const renderer = new Renderer(project);
    await renderer.render({
      ...project.meta.getFullRenderingSettings(),
      name: project.name,
    });
  } finally {
    window.onRenderComplete();
  }
};
