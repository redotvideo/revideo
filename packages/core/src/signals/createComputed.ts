import type {Computed} from './ComputedContext';
import {ComputedContext} from './ComputedContext';

export function createComputed<TValue>(
  factory: (...args: any[]) => TValue,
  owner?: any,
): Computed<TValue> {
  return new ComputedContext<TValue>(factory, owner).toSignal();
}
