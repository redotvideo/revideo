import {makeProject} from '@motion-canvas/core';
import {scene} from './scene';

export default makeProject({
  experimentalFeatures: true,
  scenes: [scene],
});
