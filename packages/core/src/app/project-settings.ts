import type {Project} from './Project';

type SharedSettings = Project['settings']['shared'];
type PreviewSettings = Project['settings']['preview'];
type RenderingSettings = Project['settings']['rendering'];

export function getFullPreviewSettings(
  project: Project,
): SharedSettings & PreviewSettings {
  return {
    ...project.settings.shared,
    ...project.settings.preview,
  };
}

export function getFullRenderingSettings(
  project: Project,
): SharedSettings & RenderingSettings {
  return {
    ...project.settings.shared,
    ...project.settings.rendering,
  };
}
