/**
 * These are the functions that can be used to apply transformations to a vector.
 *
 * These can't be methods of the vector class because they depend on Matrix2D which
 * would create a circular dependency.
 */

import type {PossibleMatrix2D} from './Matrix2D';
import {Matrix2D} from './Matrix2D';
import type {PossibleVector2} from './Vector';
import {Vector2} from './Vector';

export function transformVectorAsPoint(
  vector: Vector2,
  matrix: PossibleMatrix2D,
) {
  const m = new Matrix2D(matrix);

  return new Vector2(
    vector.x * m.scaleX + vector.y * m.skewY + m.translateX,
    vector.x * m.skewX + vector.y * m.scaleY + m.translateY,
  );
}

export function transformVector(vector: Vector2, matrix: PossibleMatrix2D) {
  const m = new Matrix2D(matrix);

  return new Vector2(
    vector.x * m.scaleX + vector.y * m.skewY,
    vector.x * m.skewX + vector.y * m.scaleY,
  );
}

/**
 * Rotates the vector around a point by the provided angle.
 *
 * @param vector - The vector to rotate.
 * @param angle - The angle by which to rotate in degrees.
 * @param center - The center of rotation. Defaults to the origin.
 */
export function rotateVector(
  vector: Vector2,
  angle: number,
  center: PossibleVector2 = Vector2.zero,
): Vector2 {
  const originVector = new Vector2(center);

  const matrix = Matrix2D.fromTranslation(originVector)
    .rotate(angle)
    .translate(originVector.flipped);

  return transformVectorAsPoint(vector, matrix);
}
