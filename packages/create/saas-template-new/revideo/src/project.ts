import {makeProject} from '@revideo/core';
import './global.css';
import metadata from './metadata.json';
import example from './scenes/example?scene';

export default makeProject({
  scenes: [example],
  variables: metadata,
});
