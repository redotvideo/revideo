import {makeProject} from '@revideo/core';
import {scene, scene2} from './scene';

export default makeProject({
  experimentalFeatures: true,
  scenes: [scene, scene2],
});
