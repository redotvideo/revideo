import type {Computed, PromiseHandle} from '../signals';
import {ComputedContext} from './ComputedContext';
import {createComputed} from './createComputed';
import {createSignal} from './createSignal';

export function createComputedAsync<T>(
  factory: () => Promise<T>,
): Computed<T | null>;
export function createComputedAsync<T>(
  factory: () => Promise<T>,
  initial: T,
): Computed<T>;
export function createComputedAsync<T>(
  factory: () => Promise<T>,
  initial: T | null = null,
): Computed<T | null> {
  let handle: PromiseHandle<T | null>;
  const signal = createSignal(factory);
  return createComputed(() => {
    const promise = signal();
    if (!handle || handle.promise !== promise) {
      handle = ComputedContext.collectPromise(
        promise,
        handle?.value ?? initial,
      );
    }

    return handle.value;
  });
}
