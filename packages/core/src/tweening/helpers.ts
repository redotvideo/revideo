export function map(from: number, to: number, value: number) {
  return from + (to - from) * value;
}

export function remap(
  fromIn: number,
  toIn: number,
  fromOut: number,
  toOut: number,
  value: number,
) {
  return fromOut + ((value - fromIn) * (toOut - fromOut)) / (toIn - fromIn);
}

export function clamp(min: number, max: number, value: number) {
  return value < min ? min : value > max ? max : value;
}

export function clampRemap(
  fromIn: number,
  toIn: number,
  fromOut: number,
  toOut: number,
  value: number,
) {
  const remappedValue = remap(fromIn, toIn, fromOut, toOut, value);
  if (fromOut > toOut) [fromOut, toOut] = [toOut, fromOut];

  return clamp(fromOut, toOut, remappedValue);
}
