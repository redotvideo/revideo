import type {SignalValue, SimpleSignal} from '../signals';
import {SignalContext} from '../signals';
import type {InterpolationFunction} from '../tweening';
import {deepLerp} from '../tweening';

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
