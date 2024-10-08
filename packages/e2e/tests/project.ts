import {Color, makeProject, Vector2} from '@revideo/core';

import circle from './scenes/circle';
import rect from './scenes/rect';

export default makeProject({
  name: 'project',
  scenes: [circle, rect],
  settings: {
    shared: {
      background: new Color('#FFFFFF'),
      range: [0, Infinity],
      size: new Vector2(320, 320),
    },
    preview: {
      fps: 30,
      resolutionScale: 1,
    },
    rendering: {
      fps: 30,
      resolutionScale: 1,
      colorSpace: 'srgb',
      exporter: {
        name: '@revideo/core/image-sequence',
        options: {
          fileType: 'image/png',
          quality: 100,
          groupByScene: true,
        },
      },
    },
  },
});
