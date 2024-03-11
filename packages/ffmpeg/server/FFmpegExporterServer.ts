import {path as ffmpegPath} from '@ffmpeg-installer/ffmpeg';
import {path as ffprobePath} from '@ffprobe-installer/ffprobe';
import type {
  RendererResult,
  RendererSettings,
  AssetInfo,
} from '@motion-canvas/core/lib/app';
import type {PluginConfig} from '@motion-canvas/vite-plugin/lib/plugins';

import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import * as path from 'path';
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
  key: string,
  src: string;
  type: "video" | "audio";
  startInVideo: number;
  endInVideo: number;
  duration: number;
  playbackRate: number;
  trimLeftInSeconds: number
}

/**
 * The server-side implementation of the FFmpeg video exporter.
 */
export class FFmpegExporterServer {
  private readonly stream: ImageStream;
  private readonly command: ffmpeg.FfmpegCommand;
  private readonly promise: Promise<void>;
  private readonly settings: FFmpegExporterSettings;

  public constructor(
    settings: FFmpegExporterSettings,
    private readonly config: PluginConfig,
  ) {
    console.log("renderersettings", settings);
    this.settings = settings
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
      .output(path.join(this.config.output, `${settings.name}.mp4`))
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
    this.command.run();
  }

  public async handleFrame({data}: {data: string}) {
    const base64Data = data.slice(data.indexOf(',') + 1);
    this.stream.pushImage(Buffer.from(base64Data, 'base64'));
  }

  public async generateAudio({assets, endFrame}: {assets: AssetInfo[][], endFrame: number}){
    const assetPositions = getAssetPlacement(assets);

    const audioFilenames: string[] = [];
    for (const asset of assetPositions) {
      if (asset.type === 'video') {
        const filename = await this.prepareAudio(asset, endFrame);
        audioFilenames.push(filename);
      }
      else if(asset.type === 'audio') {
        const filename = await this.prepareAudio(asset, endFrame);
        audioFilenames.push(filename);
      }
    }

    if (audioFilenames.length > 0) {
      await this.mergeAudioTracks(audioFilenames);
    }

    await this.mergeAudioWithVideo('audio.wav', path.join(this.config.output, `${this.settings.name}.mp4`));

    const getFileDuration = (filePath: string): Promise<number> => {
      return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(filePath, (err, metadata) => {
          if (err) {
            reject(err);
          } else {
            const duration = metadata.format.duration;
            if (typeof duration === 'number') {
              resolve(duration);
            } else {
              reject(new Error('Duration is undefined'));
            }
          }
        });
      });
    };
    
    // Measure and print the length of 'audio.wav'
    const audioDuration = await getFileDuration('audio.wav');
    console.log(`Duration of 'audio.wav': ${audioDuration} seconds`);
    
    // Measure and print the length of all files in audioFilenames
    for (const filename of audioFilenames) {
      const fileDuration = await getFileDuration(filename);
      console.log(`Duration of '${filename}': ${fileDuration} seconds`);
    }
    
    // Measure and print the length of the final video file
    const projectVideoPath = path.join(this.config.output, `${this.settings.name}.mp4`);
    const projectVideoDuration = await getFileDuration(projectVideoPath);
    console.log(`Duration of '${projectVideoPath}': ${projectVideoDuration} seconds`);   
    
    const finalVideoDuration = await getFileDuration("finalVideo.mp4");
    console.log("duration of finalvideo.mp4", finalVideoDuration);
    
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

  private async prepareAudio(asset: MediaAsset, endFrame: number): Promise<string> {
    // Construct the output path
    const sanitizedKey = asset.key.replace(/[\/\[\]]/g, '-');
    const outputPath = `${sanitizedKey}.wav`;

    const trimRight = Math.min(asset.trimLeftInSeconds + asset.duration / this.settings.fps, asset.trimLeftInSeconds + endFrame / this.settings.fps);
    const padStart = asset.startInVideo/this.settings.fps * 1000;
    const padEnd = Math.max(0, SAMPLE_RATE*endFrame/this.settings.fps - SAMPLE_RATE*asset.duration/this.settings.fps - SAMPLE_RATE*padStart/1000);

    console.log("padStart", padStart);
    console.log("padEnd", SAMPLE_RATE*endFrame/this.settings.fps - SAMPLE_RATE*asset.duration/this.settings.fps - SAMPLE_RATE*padStart/1000);

    console.log("trimRight", trimRight);
    // Return a promise that resolves when the FFmpeg command has finished
    await new Promise<void>((resolve, reject) => {
      ffmpeg(asset.src.replace("/@fs", ""))
        .audioChannels(2)
        .audioCodec('pcm_s16le')
        .audioFrequency(SAMPLE_RATE)
        .outputOptions([
          // Apply the atrim filter with the calculated trimLeft and trimRight
          `-af`, `atrim=start=${asset.trimLeftInSeconds}:end=${trimRight},apad=pad_len=${padEnd},adelay=${padStart}|${padStart}|${padStart}`,
          // Additional options can be added here if needed
        ])
        .on('end', () => {
          console.log(`Audio processed for asset key: ${asset.key}`);
          resolve();
        })
        .on('error', (err) => {
          console.error(`Error processing audio for asset key: ${asset.key}`, err);
          reject(err);
        })
        .save(outputPath);
    });

    return outputPath;
  }

  private async mergeAudioTracks(audioFilenames: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const command = ffmpeg();

      console.log("audio filenames", audioFilenames);

      // Add all audio files as input
      audioFilenames.forEach((filename) => {
        command.input(filename);
      });

      command
        .complexFilter([
          `amix=inputs=${audioFilenames.length}:duration=longest`
        ])
        .outputOptions([
          '-c:a', 'pcm_s16le'
        ])
        .on('end', () => {
          console.log(`Audio tracks merged into: audio.wav`);
          resolve();
        })
        .on('error', (err) => {
          console.error(`Error merging audio tracks: ${err.message}`);
          reject(err);
        })
        .save("audio.wav");
    });
  }

  private async mergeAudioWithVideo(audioPath: string, videoPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      ffmpeg()
        .input(videoPath)
        .input(audioPath)
        .outputOptions([
          '-c:v', 'copy', // Copy the video stream as is
          '-c:a', 'aac',  // Re-encode the audio to AAC
          '-strict', 'experimental' // Use experimental AAC encoder if necessary
        ])
        .on('end', () => {
          console.log(`Video and audio merged into: ${videoPath}`);
          resolve();
        })
        .on('error', (err) => {
          console.error(`Error merging video and audio: ${err.message}`);
          reject(err);
        })
        .save("finalVideo.mp4"); // Overwrite the existing video file with the merged output
    });
  }
}


const getAssetPlacement = (frames: AssetInfo[][]): MediaAsset[] => {
  const assets: MediaAsset[] = [];

  // A map to keep track of when each asset starts.
  const assetStartMap = new Map<string, number>();

  for (let frame = 0; frame < frames.length; frame++) {
    for (const asset of frames[frame]) {
      if (!assetStartMap.has(asset.key)) {
        // If we haven't seen this asset, record its start frame.
        assetStartMap.set(asset.key, frame);
        assets.push({
          key: asset.key,
          src: asset.src,
          type: asset.type,
          startInVideo: frame,
          endInVideo: frame, // Temporary value, will be updated.
          duration: asset.duration,
          playbackRate: asset.playbackRate,
          trimLeftInSeconds: asset.currentTime
        });
      } else {
        // If we have seen this asset, update its end frame.
        const existingAsset = assets.find(a => a.key === asset.key);
        if (existingAsset) {
          existingAsset.endInVideo = frame;
        }
      }
    }
  }

  // Calculate the duration in frames for each asset.
  assets.forEach(asset => {
    asset.duration = asset.endInVideo - asset.startInVideo + 1;
  });

  return assets;
};




