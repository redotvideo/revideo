import {CanvasColorSpace, Color, Vector2} from '../types';
import type {Project} from './Project';

export function getFullPreviewSettings(project: Project): {
  fps: number;
  resolutionScale: number;
  background: Color | null;
  range: [number, number];
  size: Vector2;
  audioOffset: number; // TODO
} {
  return {
    ...project.settingsNew.shared,
    ...project.settingsNew.preview,
  };
}

export function getFullRenderingSettings(project: Project): {
  fps: number;
  resolutionScale: number;
  colorSpace: CanvasColorSpace;
  background: Color | null;
  range: [number, number];
  size: Vector2;
  // audioOffset: number; // TODO
  exporter: {
    name: string;
    options: unknown;
  };
} {
  return {
    ...project.settingsNew.shared,
    ...project.settingsNew.rendering,
  };
}
