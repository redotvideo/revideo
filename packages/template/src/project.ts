import {makeProject} from '@revideo/core';

import example from './scenes/example?scene';

export default makeProject({
  experimentalFeatures: true,
  scenes: [example],
  variables: {
    fill: 'green',
  },
});
