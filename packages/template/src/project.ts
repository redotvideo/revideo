import {Color, makeProject, Vector2} from '@revideo/core';

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
      background: new Color('#FFFFFF'),
      range: [0, Infinity],
      size: new Vector2(1920, 1080),
    },
    preview: {
      fps: 60,
      resolutionScale: 1,
    },
    rendering: {
      exporter: {
        name: '@revideo/core/wasm',
      },
      fps: 60,
      resolutionScale: 1,
      colorSpace: 'srgb',
    },
  },
});

export default project;
