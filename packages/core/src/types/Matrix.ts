import {Vector2} from './Vector';
import {transformVector} from './vector-transformations';

export function transformAngle(angle: number, matrix: DOMMatrix) {
  const degreeVector = Vector2.fromDegrees(angle);
  return transformVector(degreeVector, matrix).degrees;
}

export function transformScalar(scalar: number, matrix: DOMMatrix) {
  return Vector2.magnitude(matrix.m11, matrix.m12) * scalar;
}
