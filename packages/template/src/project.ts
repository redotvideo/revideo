import {makeProject} from '@motion-canvas/core';
import {scene, scene2} from './scene';

export default makeProject({
  experimentalFeatures: true,
  scenes: [scene, scene2],
});
