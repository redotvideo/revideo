import type {Computed} from '../signals';
import {ComputedContext} from '../signals';

export function createComputed<TValue>(
  factory: (...args: any[]) => TValue,
  owner?: any,
): Computed<TValue> {
  return new ComputedContext<TValue>(factory, owner).toSignal();
}
