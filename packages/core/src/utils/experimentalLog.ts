import type {LogPayload} from '../app/Logger';
import {LogLevel} from '../app/Logger';
import {experimentalFeatures} from './ExperimentalError';

export function experimentalLog(message: string, remarks?: string): LogPayload {
  return {
    level: LogLevel.Error,
    message,
    remarks: (remarks ?? '') + experimentalFeatures,
  };
}
