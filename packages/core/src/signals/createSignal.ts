import type {InterpolationFunction} from '../tweening';
import {deepLerp} from '../tweening';
import type {SimpleSignal} from './SignalContext';
import {SignalContext} from './SignalContext';
import type {SignalValue} from './types';

export function createSignal<TValue, TOwner = void>(
  initial?: SignalValue<TValue>,
  interpolation: InterpolationFunction<TValue> = deepLerp,
  owner?: TOwner,
): SimpleSignal<TValue, TOwner> {
  return new SignalContext<TValue, TValue, TOwner>(
    initial,
    interpolation,
    owner,
  ).toSignal();
}
