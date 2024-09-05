import type {Project} from './Project';

type SharedSettings = Project['settingsNew']['shared'];
type PreviewSettings = Project['settingsNew']['preview'];
type RenderingSettings = Project['settingsNew']['rendering'];

export function getFullPreviewSettings(
  project: Project,
): SharedSettings & PreviewSettings {
  return {
    ...project.settingsNew.shared,
    ...project.settingsNew.preview,
  };
}

export function getFullRenderingSettings(
  project: Project,
): SharedSettings & RenderingSettings {
  return {
    ...project.settingsNew.shared,
    ...project.settingsNew.rendering,
  };
}
