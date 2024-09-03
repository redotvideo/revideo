import path from 'path';
import {Plugin} from 'vite';

const SCENE_QUERY_REGEX = /[?&]scene\b/;

export function scenesPlugin(): Plugin {
  return {
    name: 'revideo:scene',

    async load(id) {
      if (!SCENE_QUERY_REGEX.test(id)) {
        return;
      }

      const [base] = id.split('?');
      const {name} = path.posix.parse(base);
      const sceneFile = `${name}`;

      /* language=typescript */
      return `\
import description from './${sceneFile}';
export default description;
`;
    },
  };
}
