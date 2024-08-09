import {AssetInfo} from '@revideo/core';
import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {ffmpegSettings} from './settings';
import {
  checkForAudioStream,
  makeSureFolderExists,
  mergeAudioWithVideo,
  resolvePath,
} from './utils';

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
  durationInSeconds: number;
}

const SAMPLE_RATE = 48000;

function getAssetPlacement(frames: AssetInfo[][]): MediaAsset[] {
  const assets: MediaAsset[] = [];

  // A map to keep track of the first and last currentTime for each asset.
  const assetTimeMap = new Map<string, {start: number; end: number}>();

  for (let frame = 0; frame < frames.length; frame++) {
    for (const asset of frames[frame]) {
      if (!assetTimeMap.has(asset.key)) {
        // If the asset is not in the map, add it with its current time as both start and end.
        assetTimeMap.set(asset.key, {
          start: asset.currentTime,
          end: asset.currentTime,
        });
        assets.push({
          key: asset.key,
          src: asset.src,
          type: asset.type,
          startInVideo: frame,
          endInVideo: frame,
          duration: 0, // Placeholder, will be recalculated later based on frames
          durationInSeconds: 0, // Placeholder, will be calculated based on currentTime
          playbackRate: asset.playbackRate,
          volume: asset.volume,
          trimLeftInSeconds: asset.currentTime,
        });
      } else {
        // If the asset is already in the map, update the end time.
        const timeInfo = assetTimeMap.get(asset.key);
        if (timeInfo) {
          timeInfo.end = asset.currentTime;
          assetTimeMap.set(asset.key, timeInfo);
        }

        const existingAsset = assets.find(a => a.key === asset.key);
        if (existingAsset) {
          existingAsset.endInVideo = frame;
        }
      }
    }
  }

  // Calculate the duration based on frame count and durationInSeconds based on currentTime.
  assets.forEach(asset => {
    const timeInfo = assetTimeMap.get(asset.key);
    if (timeInfo) {
      // Calculate durationInSeconds based on the start and end currentTime values.
      asset.durationInSeconds =
        (timeInfo.end - timeInfo.start) / asset.playbackRate;
    }
    // Recalculate the original duration based on frame count.
    asset.duration = asset.endInVideo - asset.startInVideo + 1;
  });

  return assets;
}

function calculateAtempoFilters(playbackRate: number) {
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
async function prepareAudio(
  outputDir: string,
  tempDir: string,
  asset: MediaAsset,
  startFrame: number,
  endFrame: number,
  fps: number,
): Promise<string> {
  // Construct the output path
  const sanitizedKey = asset.key.replace(/[/[\]]/g, '-');
  const outputPath = path.join(tempDir, `${sanitizedKey}.wav`);

  const trimLeft = asset.trimLeftInSeconds / asset.playbackRate;
  const trimRight =
    1 / fps +
    Math.min(
      trimLeft + asset.durationInSeconds,
      trimLeft + (endFrame - startFrame) / fps,
    );

  const atempoFilters = calculateAtempoFilters(asset.playbackRate); // atempo filter value must be >=0.5 and <=100. If the value is higher or lower, this function sets multiple atempo filters
  const resolvedPath = resolvePath(outputDir, asset.src);

  await new Promise<void>((resolve, reject) => {
    const audioFilters = [
      ...atempoFilters,
      `atrim=start=${trimLeft}:end=${trimRight}`,
      `volume=${asset.volume}`,
    ].join(',');

    ffmpeg.setFfmpegPath(ffmpegSettings.getFfmpegPath());
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

async function mergeAudioTracks(
  tempDir: string,
  audioAssets: [MediaAsset, string][],
  fps: number,
): Promise<void> {
  return new Promise((resolve, reject) => {
    ffmpeg.setFfmpegPath(ffmpegSettings.getFfmpegPath());
    const command = ffmpeg();

    audioAssets.forEach(([, filename]) => {
      command.input(filename);
    });

    const delayFilters = audioAssets.map(([asset], i) => {
      const padStart = (asset.startInVideo / fps) * 1000;

      return `[${i}]adelay=${padStart}|${padStart}|${padStart}[a${i}]`;
    });

    const audioInputs = audioAssets
      .map((_, i) => {
        return `[a${i}]`;
      })
      .join('');

    const mixFilter = `${audioInputs}amix=inputs=${audioAssets.length}:duration=longest:normalize=0`;

    command
      .complexFilter([...delayFilters, mixFilter])
      .outputOptions(['-c:a', 'pcm_s16le'])
      .on('end', () => {
        resolve();
      })
      .on('error', err => {
        console.error(`Error merging audio tracks: ${err.message}`);
        reject(err);
      })
      .save(path.join(tempDir, `audio.wav`));
  });
}

export async function generateAudio({
  outputDir,
  tempDir,
  assets,
  startFrame,
  endFrame,
  fps,
}: {
  outputDir: string;
  tempDir: string;
  assets: AssetInfo[][];
  startFrame: number;
  endFrame: number;
  fps: number;
}) {
  const fullTempDir = path.join(os.tmpdir(), tempDir);
  await makeSureFolderExists(outputDir);
  await makeSureFolderExists(fullTempDir);

  const assetPositions = getAssetPlacement(assets);
  const audioAssets: [MediaAsset, string][] = [];

  for (const asset of assetPositions) {
    let hasAudioStream = true;
    if (asset.type !== 'audio') {
      hasAudioStream = await checkForAudioStream(
        resolvePath(outputDir, asset.src),
      );
    }

    if (asset.playbackRate !== 0 && asset.volume !== 0 && hasAudioStream) {
      const filename = await prepareAudio(
        outputDir,
        fullTempDir,
        asset,
        startFrame,
        endFrame,
        fps,
      );
      audioAssets.push([asset, filename]);
    }
  }

  if (audioAssets.length > 0) {
    await mergeAudioTracks(fullTempDir, audioAssets, fps);
  }
}

export async function mergeMedia(
  outputFilename: string,
  outputDir: string,
  tempDir: string,
) {
  const fullTempDir = path.join(os.tmpdir(), tempDir);
  await makeSureFolderExists(outputDir);
  await makeSureFolderExists(fullTempDir);

  const audioWavExists = fs.existsSync(path.join(fullTempDir, `audio.wav`));
  if (audioWavExists) {
    await mergeAudioWithVideo(
      path.join(fullTempDir, `audio.wav`),
      path.join(fullTempDir, `visuals.mp4`),
      path.join(outputDir, `${outputFilename}.mp4`),
    );
  } else {
    const destination = path.join(outputDir, `${outputFilename}.mp4`);
    await fs.promises.copyFile(
      path.join(fullTempDir, `visuals.mp4`),
      destination,
    );
  }
  if (fullTempDir.endsWith('-undefined')) {
    await fs.promises
      .rm(fullTempDir, {recursive: true, force: true})
      .catch(() => {});
  }
}
