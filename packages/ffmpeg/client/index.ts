import type {ExporterClass} from '@revideo/core';
import {makePlugin} from '@revideo/core';
import {FFmpegExporterClient} from './FFmpegExporterClient';

export default makePlugin({
  name: 'ffmpeg-plugin',
  exporters(): ExporterClass[] {
    return [FFmpegExporterClient];
  },
});
