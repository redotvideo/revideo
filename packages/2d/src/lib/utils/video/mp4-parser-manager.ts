import {FrameExtractor} from './mp4-parser';

// List of VideoFrameExtractors
const videoFrameExtractors = new Map<string, FrameExtractor>();

export async function getFrame(
  id: string,
  filePath: string,
  time: number,
  fps: number,
) {
  console.log('calling getframe', id, filePath, time, fps);

  // Check if we already have a VideoFrameExtractor for this video
  const extractorId = filePath + '-' + id;
  let extractor = videoFrameExtractors.get(extractorId);

  const frameDuration = 1 / fps;

  const isOldFrame =
    extractor && Math.abs(time - extractor.getLastTime()) < frameDuration / 2;

  // If time has not changed, return the last frame
  if (isOldFrame) {
    const lastFrame = extractor!.getLastFrame();
    if (!lastFrame) {
      throw new Error('No last frame');
    }

    return lastFrame;
  }

  // If the video has skipped back we need to create a new extractor
  if (extractor && time + frameDuration < extractor.getTime()) {
    extractor.close();
    videoFrameExtractors.delete(extractorId);
    extractor = undefined;
  }

  // If the video has skipped forward we need to create a new extractor
  if (extractor && time > extractor.getTime() + frameDuration) {
    extractor.close();
    videoFrameExtractors.delete(extractorId);
    extractor = undefined;
  }

  if (!extractor) {
    extractor = new FrameExtractor(filePath, fps, time);
    await extractor.start();
    videoFrameExtractors.set(extractorId, extractor);
  }

  // Go to the frame that is closest to the requested time
  return extractor.getNextFrame();
}
