import {LogLevel, LogPayload} from '../app';
import {experimentalFeatures} from './ExperimentalError';

export function experimentalLog(message: string, remarks?: string): LogPayload {
  return {
    level: LogLevel.Error,
    message,
    remarks: (remarks ?? '') + experimentalFeatures,
  };
}
