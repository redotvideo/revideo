import {path as ffmpegPath} from '@ffmpeg-installer/ffmpeg';
import {path as ffprobePath} from '@ffprobe-installer/ffprobe';
import type {
  AssetInfo,
  RendererResult,
  RendererSettings,
} from '@revideo/core/lib/app';
import type {PluginConfig} from '@revideo/vite-plugin/lib/plugins';

import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {v4 as uuidv4} from 'uuid';
import {ImageStream} from './ImageStream';

const SAMPLE_RATE = 48000;

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

export interface FFmpegExporterSettings extends RendererSettings {
  audio?: string;
  audioOffset?: number;
  fastStart: boolean;
  includeAudio: boolean;
}

interface MediaAsset {
  key: string;
  src: string;
  type: 'video' | 'audio';
  startInVideo: number;
  endInVideo: number;
  duration: number;
  playbackRate: number;
  trimLeftInSeconds: number;
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

  public constructor(
    settings: FFmpegExporterSettings,
    private readonly config: PluginConfig,
  ) {
    this.settings = settings;
    this.jobFolder = path.join(os.tmpdir(), `revideo-${uuidv4()}`);
    this.stream = new ImageStream();
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
    if (!fs.existsSync(this.config.output)) {
      await fs.promises.mkdir(this.config.output, {recursive: true});
    }
    if (!fs.existsSync(this.jobFolder)) {
      await fs.promises.mkdir(this.jobFolder, {recursive: true});
    }
    this.command.run();
  }

  public async handleFrame({data}: {data: string}) {
    const base64Data = data.slice(data.indexOf(',') + 1);
    this.stream.pushImage(Buffer.from(base64Data, 'base64'));
  }

  public async generateAudio({
    assets,
    endFrame,
  }: {
    assets: AssetInfo[][];
    endFrame: number;
  }) {
    const assetPositions = getAssetPlacement(assets);

    const audioFilenames: string[] = [];
    for (const asset of assetPositions) {
      if (asset.type === 'video') {
        const filename = await this.prepareAudio(asset, endFrame);
        audioFilenames.push(filename);
      } else if (asset.type === 'audio') {
        const filename = await this.prepareAudio(asset, endFrame);
        audioFilenames.push(filename);
      }
    }

    if (audioFilenames.length > 0) {
      await this.mergeAudioTracks(audioFilenames);
      await this.mergeAudioWithVideo(
        path.join(this.jobFolder, `audio.wav`),
        path.join(this.jobFolder, `visuals.mp4`),
      );
    } else {
      const destination = path.join(
        this.config.output,
        `${this.settings.name}.mp4`,
      );
      await fs.promises.copyFile(
        path.join(this.jobFolder, `visuals.mp4`),
        destination,
      );
      console.log(`Rendered successfully! Video saved to: ${destination}`);
    }
  }

  public async end(result: RendererResult) {
    this.stream.pushImage(null);
    if (result === 1) {
      try {
        this.command.kill('SIGKILL');
        await this.promise;
      } catch (_) {
        // do nothing
      }
    } else {
      await this.promise;
    }
  }

  public async kill() {
    try {
      await fs.promises.rm(this.jobFolder, {recursive: true, force: true}); // cleanup
      this.command.kill('SIGKILL');
      await this.promise;
    } catch (_) {
      return;
    }
  }

  private async prepareAudio(
    asset: MediaAsset,
    endFrame: number,
  ): Promise<string> {
    // Construct the output path
    const sanitizedKey = asset.key.replace(/[/[\]]/g, '-');
    const outputPath = path.join(this.jobFolder, `${sanitizedKey}.wav`);

    const trimRight = Math.min(
      asset.trimLeftInSeconds + asset.duration / this.settings.fps,
      asset.trimLeftInSeconds + endFrame / this.settings.fps,
    );
    const padStart = (asset.startInVideo / this.settings.fps) * 1000;
    const padEnd = Math.max(
      0,
      (SAMPLE_RATE * endFrame) / this.settings.fps -
        (SAMPLE_RATE * asset.duration) / this.settings.fps -
        (SAMPLE_RATE * padStart) / 1000,
    );

    let resolvedPath: string;
    if (asset.src.startsWith('/@fs')) {
      resolvedPath = asset.src.replace('/@fs', '');
    } else if (asset.src.startsWith('http')) {
      resolvedPath = asset.src;
    } else if (asset.src.startsWith('/')) {
      resolvedPath = path.join(this.config.output, '../public', asset.src);
    } else {
      resolvedPath = path.join(this.config.output, '..', asset.src);
    }

    await new Promise<void>((resolve, reject) => {
      ffmpeg(resolvedPath)
        .audioChannels(2)
        .audioCodec('pcm_s16le')
        .audioFrequency(SAMPLE_RATE)
        .outputOptions([
          `-af`,
          `atrim=start=${asset.trimLeftInSeconds}:end=${trimRight},apad=pad_len=${padEnd},adelay=${padStart}|${padStart}|${padStart}`,
        ])
        .on('end', () => {
          resolve();
        })
        .on('error', err => {
          console.error(
            `Error processing audio for asset key: ${asset.key}`,
            err,
          );
          reject(err);
        })
        .save(outputPath);
    });

    return outputPath;
  }

  private async mergeAudioTracks(audioFilenames: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const command = ffmpeg();

      audioFilenames.forEach(filename => {
        command.input(filename);
      });

      command
        .complexFilter([
          `amix=inputs=${audioFilenames.length}:duration=longest`,
        ])
        .outputOptions(['-c:a', 'pcm_s16le'])
        .on('end', () => {
          resolve();
        })
        .on('error', err => {
          console.error(`Error merging audio tracks: ${err.message}`);
          reject(err);
        })
        .save(path.join(this.jobFolder, `audio.wav`));
    });
  }

  private async mergeAudioWithVideo(
    audioPath: string,
    videoPath: string,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      ffmpeg()
        .input(videoPath)
        .input(audioPath)
        .outputOptions([
          '-c:v',
          'copy',
          '-c:a',
          'aac',
          '-strict',
          'experimental',
        ])
        .on('end', () => {
          resolve();
          console.log(
            `Rendered successfully! Video saved to: ${path.join(
              this.config.output,
              `${this.settings.name}.mp4`,
            )}`,
          );
        })
        .on('error', err => {
          console.error(`Error merging video and audio: ${err.message}`);
          reject(err);
        })
        .save(path.join(this.config.output, `${this.settings.name}.mp4`));
    });
  }
}

function getAssetPlacement(frames: AssetInfo[][]): MediaAsset[] {
  const assets: MediaAsset[] = [];

  // A map to keep track of when each asset starts.
  const assetStartMap = new Map<string, number>();

  for (let frame = 0; frame < frames.length; frame++) {
    for (const asset of frames[frame]) {
      if (!assetStartMap.has(asset.key)) {
        assetStartMap.set(asset.key, frame);
        assets.push({
          key: asset.key,
          src: asset.src,
          type: asset.type,
          startInVideo: frame,
          endInVideo: frame,
          duration: asset.duration,
          playbackRate: asset.playbackRate,
          trimLeftInSeconds: asset.currentTime,
        });
      } else {
        const existingAsset = assets.find(a => a.key === asset.key);
        if (existingAsset) {
          existingAsset.endInVideo = frame;
        }
      }
    }
  }

  assets.forEach(asset => {
    asset.duration = asset.endInVideo - asset.startInVideo + 1;
  });

  return assets;
}
