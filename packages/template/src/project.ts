import {bootstrap, Color, Vector2} from '@revideo/core';

import example from './scenes/example';

const project = {
  experimentalFeatures: true,
  scenes: [example],
  variables: {
    fill: 'green',
  },
};

const final = bootstrap(
  'project',
  {core: '0.1.0', two: null, ui: null, vitePlugin: null},
  [],
  project,
  {
    shared: {
      background: new Color('#FFFFFF'),
      range: [0, Infinity],
      size: new Vector2(1920, 1080),
      audioOffset: 0,
    },
    preview: {
      fps: 60,
      resolutionScale: 1,
    },
    rendering: {
      exporter: {
        name: '@revideo/core/wasm',
        options: {},
      },
      fps: 60,
      resolutionScale: 1,
      colorSpace: 'srgb',
    },
  },
);

console.log(final);

export default final;
