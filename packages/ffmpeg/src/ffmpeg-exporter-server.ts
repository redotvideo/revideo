import type {RendererResult, RendererSettings} from '@revideo/core';
import {EventName, sendEvent} from '@revideo/telemetry';
import * as ffmpeg from 'fluent-ffmpeg';
import * as os from 'os';
import * as path from 'path';
import {ImageStream} from './image-stream';
import {ffmpegSettings} from './settings';

export interface FFmpegExporterSettings extends RendererSettings {
  audio?: string;
  audioOffset?: number;
  fastStart: boolean;
  includeAudio: boolean;
  output: string;
}

/**
 * The server-side implementation of the FFmpeg video exporter.
 */
export class FFmpegExporterServer {
  private readonly stream: ImageStream;
  private readonly command: ffmpeg.FfmpegCommand;
  private readonly promise: Promise<void>;
  private readonly settings: FFmpegExporterSettings;
  private readonly jobFolder: string;

  public constructor(settings: FFmpegExporterSettings) {
    this.settings = settings;
    this.jobFolder = path.join(
      os.tmpdir(),
      `revideo-${this.settings.name}-${settings.hiddenFolderId}`,
    );
    this.stream = new ImageStream();

    ffmpeg.setFfmpegPath(ffmpegSettings.getFfmpegPath());
    this.command = ffmpeg();

    // Input image sequence
    this.command
      .input(this.stream)
      .inputFormat('image2pipe')
      .inputFps(settings.fps);

    // Input audio file
    if (settings.includeAudio && settings.audio) {
      this.command
        .input((settings.audio as string).slice(1))
        // FIXME Offset only works for negative values.
        .inputOptions([`-itsoffset ${settings.audioOffset ?? 0}`]);
    }

    // Output settings
    const size = {
      x: Math.round(settings.size.x * settings.resolutionScale),
      y: Math.round(settings.size.y * settings.resolutionScale),
    };
    this.command
      .output(path.join(this.jobFolder, `visuals.mp4`))
      .outputOptions(['-pix_fmt yuv420p', '-shortest'])
      .outputFps(settings.fps)
      .size(`${size.x}x${size.y}`);
    if (settings.fastStart) {
      this.command.outputOptions(['-movflags +faststart']);
    }

    this.promise = new Promise<void>((resolve, reject) => {
      this.command.on('end', resolve).on('error', reject);
    });
  }

  public async start() {
    this.command.run();
  }

  public async handleFrame({data}: {data: string}) {
    const base64Data = data.slice(data.indexOf(',') + 1);
    this.stream.pushImage(Buffer.from(base64Data, 'base64'));
  }

  public async end(result: RendererResult) {
    this.stream.pushImage(null);
    if (result === 1) {
      try {
        this.command.kill('SIGKILL');
        await this.promise;
      } catch (err) {
        sendEvent(EventName.Error, {message: (err as Error).message});
      }
    } else {
      await this.promise;
    }
  }

  public async kill() {
    try {
      this.command.kill('SIGKILL');
      await this.promise;
    } catch (_) {
      return;
    }
  }
}
