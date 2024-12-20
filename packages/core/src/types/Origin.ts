import {Center, Direction, Origin} from './alignment-enums';
import {Vector2} from './Vector';

export function flipOrigin(origin: Direction, axis?: Center): Direction;
export function flipOrigin(origin: Origin, axis?: Center): Origin;
export function flipOrigin(
  origin: Origin | Direction,
  axis: Center = Center.Horizontal | Center.Vertical,
): Origin | Direction {
  if (axis & Center.Vertical) {
    if (origin & Direction.Top) {
      origin = (origin & ~Direction.Top) | Direction.Bottom;
    } else if (origin & Direction.Bottom) {
      origin = (origin & ~Direction.Bottom) | Direction.Top;
    }
  }

  if (axis & Center.Horizontal) {
    if (origin & Direction.Left) {
      origin = (origin & ~Direction.Left) | Direction.Right;
    } else if (origin & Direction.Right) {
      origin = (origin & ~Direction.Right) | Direction.Left;
    }
  }

  return origin;
}

/**
 * Convert the given origin to a vector representing its offset.
 *
 * @example
 * ```ts
 * const bottomRight = originToOffset(Origin.TopRight);
 * // bottomRight = {x: 1, y: -1}
 * ```
 *
 * @param origin - The origin to convert.
 */
export function originToOffset(origin: Origin | Direction): Vector2 {
  if (origin === Origin.Middle) {
    return Vector2.zero;
  }

  let x = 0;
  if (origin & Direction.Left) {
    x = -1;
  } else if (origin & Direction.Right) {
    x = 1;
  }

  let y = 0;
  if (origin & Direction.Top) {
    y = -1;
  } else if (origin & Direction.Bottom) {
    y = 1;
  }

  return new Vector2(x, y);
}
