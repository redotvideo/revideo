import {makeProject} from '@revideo/core';

import circle from './scenes/circle';
import rect from './scenes/rect';

export default makeProject({
  scenes: [circle, rect],
});
