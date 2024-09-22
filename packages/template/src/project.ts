import {makeProject} from '@revideo/core';

import example from './example';

import './global.css';

export const project = makeProject({
  name: 'project',
  scenes: [example],
  variables: {
    fill: 'green',
  },
  settings: {
    shared: {
      background: '#FFFFFF',
      range: [0, Infinity],
      size: {x: 540, y: 1080},
    },
    preview: {
      fps: 30,
      resolutionScale: 1,
    },
    rendering: {
      exporter: {
        name: '@revideo/core/ffmpeg',
        options: {
          format: 'proRes',
        },
      },
      fps: 30,
      resolutionScale: 1,
      colorSpace: 'srgb',
    },
  },
});

export default project;
