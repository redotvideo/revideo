import * as ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import * as ffprobeInstaller from '@ffprobe-installer/ffprobe';

const ffmpegLogLevels = [
  'quiet',
  'panic',
  'fatal',
  'error',
  'warning',
  'info',
  'verbose',
  'debug',
  'trace',
] as const;

export type LogLevel = (typeof ffmpegLogLevels)[number];

export type FfmpegSettings = {
  ffmpegPath?: string;
  ffprobePath?: string;
  ffmpegLogLevel?: LogLevel;
};

class FfmpegSettingState {
  private ffmpegPath: string;
  private ffprobePath: string;
  private logLevel: LogLevel;

  public constructor() {
    this.ffmpegPath = ffmpegInstaller.path as unknown as string;
    this.ffprobePath = ffprobeInstaller.path as unknown as string;

    // Use the FFMPEG_PATH environment variable if it is set
    if (process.env.FFMPEG_PATH) {
      this.ffmpegPath = process.env.FFMPEG_PATH;
    }

    // Use the FFPROBE_PATH environment variable if it is set
    if (process.env.FFPROBE_PATH) {
      this.ffprobePath = process.env.FFPROBE_PATH;
    }

    this.logLevel = 'error';

    // Use the FFMPEG_LOG_LEVEL environment variable if it is set
    if (
      process.env.FFMPEG_LOG_LEVEL &&
      ffmpegLogLevels.includes(process.env.FFMPEG_LOG_LEVEL as LogLevel)
    ) {
      this.logLevel = process.env.FFMPEG_LOG_LEVEL as LogLevel;
    }
  }

  public getFfmpegPath() {
    return this.ffmpegPath;
  }

  public setFfmpegPath(ffmpegPath: string) {
    this.ffmpegPath = ffmpegPath;
  }

  public getFfprobePath() {
    return this.ffprobePath;
  }

  public setFfprobePath(ffprobePath: string) {
    this.ffprobePath = ffprobePath;
  }

  public getLogLevel() {
    return this.logLevel;
  }

  public setLogLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }
}

export const ffmpegSettings = new FfmpegSettingState();
