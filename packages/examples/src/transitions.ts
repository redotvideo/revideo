import {makeProject} from '@revideo/core';

import first from './scenes/transitions-first?scene';
import second from './scenes/transitions-second?scene';

export default makeProject({
  scenes: [first, second],
});
