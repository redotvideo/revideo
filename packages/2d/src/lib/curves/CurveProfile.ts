import type {Segment} from './Segment';

export interface CurveProfile {
  arcLength: number;
  segments: Segment[];
  minSin: number;
}
