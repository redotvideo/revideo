import {
  createSceneMetadata,
  FullSceneDescription,
  ThreadGeneratorFactory,
} from '@revideo/core';
import type {View2D} from '../components';
import {Scene2D} from './Scene2D';

export function makeScene2D(runner: ThreadGeneratorFactory<View2D>) {
  return {
    klass: Scene2D,
    config: runner,
    stack: new Error().stack,
    meta: createSceneMetadata(),
    plugins: ['@revideo/2d/editor'],

    /**
     * We need to cast this to `FullSceneDescription` because all makeScene2D calls
     * are transformed into `FullSceneDescription` by one of the vite plugins.
     *
     * This transformation happens inside of `/packages/vite-plugin/src/partials/scenes.ts`.
     */
  } as unknown as FullSceneDescription;
}
