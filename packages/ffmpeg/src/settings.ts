import * as pathToFfmpeg from 'ffmpeg-static';

type LogLevel =
  | 'quiet'
  | 'panic'
  | 'fatal'
  | 'error'
  | 'warning'
  | 'info'
  | 'verbose'
  | 'debug'
  | 'trace';

export type FfmpegSettings = {
  ffmpegPath?: string;
  ffmpegLogLevel?: LogLevel;
};

class FfmpegSettingState {
  private ffmpegPath: string;
  private logLevel: LogLevel;

  public constructor() {
    this.ffmpegPath = pathToFfmpeg as unknown as string;
    this.logLevel = 'error';
  }

  public getFfmpegPath() {
    return this.ffmpegPath;
  }

  public setFfmpegPath(ffmpegPath: string) {
    console.log('setting path', ffmpegPath);
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
