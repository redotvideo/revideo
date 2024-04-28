import type {
  AssetInfo,
  RendererResult,
  RendererSettings,
} from '@revideo/core/lib/app';
import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {ImageStream} from './ImageStream';
import {checkForAudioStream, getSampleRate, mergeAudioWithVideo} from './utils';

import {EventName, sendEvent} from '@revideo/telemetry';
import * as fsPromises from 'fs/promises';
const SAMPLE_RATE = 48000;

export async function getCurrentVersion() {
  try {
    const packageData = JSON.parse(
      await fsPromises.readFile(
        path.join(__dirname, '..', '..', 'package.json'),
        'utf-8',
      ),
    );

    return packageData.version;
  } catch (e) {
    return 'ERROR';
  }
}

export interface FFmpegExporterSettings extends RendererSettings {
  audio?: string;
  audioOffset?: number;
  fastStart: boolean;
  includeAudio: boolean;
  output: string;
}

interface MediaAsset {
  key: string;
  src: string;
  type: 'video' | 'audio';
  startInVideo: number;
  endInVideo: number;
  duration: number;
  playbackRate: number;
  volume: number;
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
  private readonly audioFilenames: string[];

  public constructor(settings: FFmpegExporterSettings) {
    this.settings = settings;
    this.jobFolder = path.join(os.tmpdir(), `revideo-${this.settings.name}`);
    this.audioFilenames = [];
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
    const version = await getCurrentVersion();
    sendEvent(EventName.RenderStarted, {version});
    if (!fs.existsSync(this.settings.output)) {
      await fs.promises.mkdir(this.settings.output, {recursive: true});
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
    startFrame,
    endFrame,
  }: {
    assets: AssetInfo[][];
    startFrame: number;
    endFrame: number;
  }) {
    const assetPositions = getAssetPlacement(assets);

    for (const asset of assetPositions) {
      let hasAudioStream = true;
      if (asset.type !== 'audio') {
        hasAudioStream = await checkForAudioStream(this.resolvePath(asset.src));
      }

      if (asset.playbackRate !== 0 && asset.volume !== 0 && hasAudioStream) {
        const filename = await this.prepareAudio(asset, startFrame, endFrame);
        this.audioFilenames.push(filename);
      }
    }

    if (this.audioFilenames.length > 0) {
      await this.mergeAudioTracks();
    }
  }

  public async mergeMedia() {
    if (this.audioFilenames.length > 0) {
      await mergeAudioWithVideo(
        path.join(this.jobFolder, `audio.wav`),
        path.join(this.jobFolder, `visuals.mp4`),
        path.join(this.settings.output, `${this.settings.name}.mp4`),
      );
    } else {
      const destination = path.join(
        this.settings.output,
        `${this.settings.name}.mp4`,
      );
      await fs.promises.copyFile(
        path.join(this.jobFolder, `visuals.mp4`),
        destination,
      );
    }
  }

  private resolvePath(assetPath: string) {
    let resolvedPath: string;
    if (assetPath.startsWith('/@fs')) {
      resolvedPath = assetPath.replace('/@fs', '');
    } else if (assetPath.startsWith('http')) {
      resolvedPath = assetPath;
    } else if (assetPath.startsWith('/')) {
      resolvedPath = path.join(this.settings.output, '../public', assetPath);
    } else {
      resolvedPath = path.join(this.settings.output, '..', assetPath);
    }
    return resolvedPath;
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
      this.command.kill('SIGKILL');
      await this.promise;
    } catch (_) {
      return;
    }
  }

  private async prepareAudio(
    asset: MediaAsset,
    startFrame: number,
    endFrame: number,
  ): Promise<string> {
    // Construct the output path
    const sanitizedKey = asset.key.replace(/[/[\]]/g, '-');
    const outputPath = path.join(this.jobFolder, `${sanitizedKey}.wav`);

    const trimLeft = asset.trimLeftInSeconds / asset.playbackRate;
    const trimRight = Math.min(
      trimLeft + asset.duration / this.settings.fps,
      trimLeft + (endFrame - startFrame) / this.settings.fps,
    );
    const padStart = (asset.startInVideo / this.settings.fps) * 1000;
    const assetSampleRate = await getSampleRate(this.resolvePath(asset.src));

    const padEnd = Math.max(
      0,
      (assetSampleRate * (endFrame - startFrame + 1)) / this.settings.fps -
        (assetSampleRate * asset.duration) / this.settings.fps -
        (assetSampleRate * padStart) / 1000,
    );

    const atempoFilters = await this.calculateAtempoFilters(asset.playbackRate); // atempo filter value must be >=0.5 and <=100. If the value is higher or lower, this function sets multiple atempo filters
    const resolvedPath = this.resolvePath(asset.src);

    await new Promise<void>((resolve, reject) => {
      const audioFilters = [
        ...atempoFilters,
        `atrim=start=${trimLeft}:end=${trimRight}`,
        `apad=pad_len=${padEnd}`,
        `adelay=${padStart}|${padStart}|${padStart}`,
        `volume=${asset.volume}`,
      ].join(',');

      ffmpeg(resolvedPath)
        .audioChannels(2)
        .audioCodec('pcm_s16le')
        .audioFrequency(SAMPLE_RATE)
        .outputOptions([`-af`, audioFilters])
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

  private async mergeAudioTracks(): Promise<void> {
    return new Promise((resolve, reject) => {
      const command = ffmpeg();

      this.audioFilenames.forEach(filename => {
        command.input(filename);
      });

      command
        .complexFilter([
          `amix=inputs=${this.audioFilenames.length}:duration=longest`,
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

  private async calculateAtempoFilters(playbackRate: number) {
    const atempoFilters = [];

    // Calculate how many times we need to 100x the speed
    let rate = playbackRate;
    while (rate > 100.0) {
      atempoFilters.push('atempo=100.0');
      rate /= 100.0;
    }
    // Add the last atempo filter with the remaining rate
    if (rate > 1.0) {
      atempoFilters.push(`atempo=${rate}`);
    }

    // Calculate how many times we need to halve the speed
    rate = playbackRate;
    while (rate < 0.5) {
      atempoFilters.push('atempo=0.5');
      rate *= 2.0;
    }
    // Add the last atempo filter with the remaining rate
    if (rate < 1.0) {
      atempoFilters.push(`atempo=${rate}`);
    }

    return atempoFilters;
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
          volume: asset.volume,
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
