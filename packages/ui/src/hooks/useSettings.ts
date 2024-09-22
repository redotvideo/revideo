import {getFullPreviewSettings, getFullRenderingSettings} from '@revideo/core';
import {useApplication} from '../contexts';

export function useSharedSettings() {
  const {project} = useApplication();
  return project.settings.shared;
}

export function usePreviewSettings() {
  const {project} = useApplication();
  return getFullPreviewSettings(project);
}

export function useRenderingSettings() {
  const {project} = useApplication();
  return getFullRenderingSettings(project);
}
