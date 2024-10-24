import type {Signal} from '@revideo/core';
import {Color} from '@revideo/core';
import type {CanvasStyle, PossibleCanvasStyle} from '../partials';
import {canvasStyleParser} from '../utils';
import {initial, interpolation, parser, signal} from './signal';

export type CanvasStyleSignal<T> = Signal<PossibleCanvasStyle, CanvasStyle, T>;

export function canvasStyleSignal(): PropertyDecorator {
  return (target, key) => {
    signal()(target, key);
    parser(canvasStyleParser)(target, key);
    interpolation(Color.lerp)(target, key);
    initial(null)(target, key);
  };
}
