import {
  FfmpegExporterOptions,
  ImageExporterOptions,
  WasmExporterOptions,
} from '../exporter';
import type {Plugin} from '../plugin';
import {SceneDescription} from '../scenes';
import {CanvasColorSpace, Color, Vector2} from '../types';
import {Logger} from './Logger';

export interface Versions {
  core: string;
  two: string | null;
  ui: string | null;
  vitePlugin: string | null;
}

// TODO(refactor): check if we can get rid of this
export function createVersionObject(version: string) {
  return {
    core: version,
    two: version,
    ui: version,
    vitePlugin: version,
  };
}

export type ExporterSettings =
  | {
      name: '@revideo/core/image-sequence';
      options: ImageExporterOptions;
    }
  | {
      name: '@revideo/core/ffmpeg';
      options: FfmpegExporterOptions;
    }
  | {
      name: '@revideo/core/wasm';
      options: WasmExporterOptions;
    };

export interface ProjectSettings {
  shared: {
    background: Color;
    range: [number, number];
    size: Vector2;
  };
  rendering: {
    exporter: ExporterSettings;
    fps: number;
    resolutionScale: number;
    colorSpace: CanvasColorSpace;
  };
  preview: {
    fps: number;
    resolutionScale: number;
  };
}

export interface UserProjectSettings {
  shared: {
    range: [number, number];
    background: string | null;
    size: {x: number; y: number};
  };
  rendering: {
    exporter: ExporterSettings;
    fps: number;
    resolutionScale: number;
    colorSpace: CanvasColorSpace;
  };
  preview: {
    fps: number;
    resolutionScale: number;
  };
}
export type PartialUserProjectSettings = {
  shared?: Partial<UserProjectSettings['shared']>;
  rendering?: Partial<UserProjectSettings['rendering']>;
  preview?: Partial<UserProjectSettings['preview']>;
};

export interface UserProject {
  /**
   * The name of the project.
   */
  name?: string;

  /**
   * A list of scene descriptions that make up the project.
   */
  scenes: SceneDescription<any>[];

  /**
   * Default values for project variables.
   *
   * @see https://motioncanvas.io/docs/project-variables
   */
  variables?: Record<string, unknown>;

  /**
   * Enable experimental features.
   *
   * @see https://motioncanvas.io/docs/experimental
   *
   * @experimental
   */
  experimentalFeatures?: boolean;

  /**
   * Settings for the project. This includes shared settings, rendering settings
   * and preview settings.
   *
   * Includes things like the background color, the resolution, the frame rate,
   * and the exporter to use.
   */
  settings?: PartialUserProjectSettings;
}

export interface Project extends Omit<UserProject, 'settings'> {
  name: string;
  settings: ProjectSettings;

  /**
   * @deprecated Not exposed in the public API. We set the exporters as plugins
   * which is why we can't delete this yet.
   *
   * // TODO(konsti): get rid of plugins
   *
   * A list of plugins to include in the project.
   */
  plugins: Plugin[];

  /**
   * Not exposed in the public API.
   */
  logger: Logger;

  /**
   * Manually set via a constant. This should be automated by reading the
   * package.json files of the packages.
   */
  versions: Versions;
}
