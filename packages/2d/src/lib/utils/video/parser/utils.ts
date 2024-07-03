import {DataStream} from 'mp4box';

export function description(file: any, track: any) {
  const trak = file.getTrackById(track.id);
  for (const entry of trak.mdia.minf.stbl.stsd.entries) {
    const box = entry.avcC || entry.hvcC || entry.vpcC || entry.av1C;
    if (box) {
      const stream = new DataStream(undefined, 0, DataStream.BIG_ENDIAN);
      box.write(stream);
      return new Uint8Array(stream.buffer, 8); // Remove the box header.
    }
  }
  throw new Error('avcC, hvcC, vpcC, or av1C box not found');
}

export interface Edit {
  mediaTime: number;
  segmentDuration: number;
  mediaRateInteger: number;
  mediaRateFraction: number;
  fps: number;
}

export function mp4BoxEditToEdit(edit: any): Omit<Edit, 'fps'> {
  return {
    mediaTime: edit.media_time,
    segmentDuration: edit.segment_duration,
    mediaRateInteger: edit.media_rate_integer,
    mediaRateFraction: edit.media_rate_fraction,
  };
}
