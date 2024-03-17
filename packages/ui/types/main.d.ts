import type {Project} from '@revideo/core';

export function editor(project: Project): void;

export function index(
  projects: {
    name: string;
    url: string;
  }[],
): void;
