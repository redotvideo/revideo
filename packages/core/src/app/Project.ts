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
    background: Color | null;
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

export interface UserProject {
  /**
   * The name of the project.
   */
  name?: string;

  /**
   * a list of scene descriptions that make up the project.
   *
   * @remarks
   * a full scene description can be obtained by loading a scene module with a
   * `?scene` query parameter.
   *
   * @example
   * ```ts
   * import examplescene from './example?scene';
   *
   * export default makeproject({
   *   scenes: [examplescene],
   * });
   * ```
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
  settings: UserProjectSettings;
}

export interface Project extends Omit<UserProject, 'settings'> {
  name: string;
  settings: ProjectSettings;

  /**
   * @deprecated Not exposed in the public API. We set the exporters as plugins
   * which is why we can't delete this yet.
   *
   * // TODO(refactor): get rid of this
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
