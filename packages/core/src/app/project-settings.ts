import type {FullProject} from './Project';

type SharedSettings = FullProject['settings']['shared'];
type PreviewSettings = FullProject['settings']['preview'];
type RenderingSettings = FullProject['settings']['rendering'];

export function getFullPreviewSettings(
  project: FullProject,
): SharedSettings & PreviewSettings {
  return {
    ...project.settings.shared,
    ...project.settings.preview,
  };
}

export function getFullRenderingSettings(
  project: FullProject,
): SharedSettings & RenderingSettings {
  return {
    ...project.settings.shared,
    ...project.settings.rendering,
  };
}
