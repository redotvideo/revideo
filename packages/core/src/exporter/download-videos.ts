import {AssetInfo} from '../app';
import {verifyFetchResponse} from './utils';

export async function download(assets: AssetInfo[][]): Promise<void> {
  const videoRanges: Map<string, {start: number; end: number}> = new Map();

  assets.forEach(frameAssets => {
    frameAssets.forEach(asset => {
      if (asset.type !== 'video' || asset.decoder !== 'ffmpeg') {
        return;
      }

      if (videoRanges.has(asset.src)) {
        const range = videoRanges.get(asset.src)!;
        range.start = Math.min(range.start, asset.currentTime);
        range.end = Math.max(range.end, asset.currentTime);
        return;
      }

      videoRanges.set(asset.src, {
        start: asset.currentTime,
        end: asset.currentTime,
      });
    });
  });

  const videoDurations = Array.from(videoRanges.entries()).map(
    ([src, {start, end}]) => ({
      src,
      startTime: start,
      endTime: end,
    }),
  );

  videoDurations.forEach(({src, startTime, endTime}) => {
    console.log(`downloading ${src} from ${startTime}s to ${endTime}s`);
  });

  const response = await fetch(
    '/revideo-ffmpeg-decoder/download-video-chunks',
    {
      method: 'POST',
      headers: {
        // eslint-disable-next-line
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(videoDurations),
    },
  );

  await verifyFetchResponse(
    response,
    '/revideo-ffmpeg-decoder/download-video-chunks',
  );

  const result = await response.json();

  if (!result.success) {
    throw new Error(`Error downloading video chunks: ${result.error}`);
  }

  console.log('finished downloading');
}
