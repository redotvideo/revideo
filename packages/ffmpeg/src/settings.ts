import * as pathToFfmpeg from 'ffmpeg-static';

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
  ffmpegLogLevel?: LogLevel;
};

class FfmpegSettingState {
  private ffmpegPath: string;
  private logLevel: LogLevel;

  public constructor() {
    this.ffmpegPath = pathToFfmpeg as unknown as string;

    // Use the FFMPEG_PATH environment variable if it is set
    if (process.env.FFMPEG_PATH) {
      this.ffmpegPath = process.env.FFMPEG_PATH;
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

  public getLogLevel() {
    return this.logLevel;
  }

  public setLogLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }
}

export const ffmpegSettings = new FfmpegSettingState();
