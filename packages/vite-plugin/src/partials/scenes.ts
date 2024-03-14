import * as fs from 'fs/promises';
import {Plugin} from 'vite';

const COMMENT_REGEX = /\/\*[\s\S]*?\*\/|\/\/.*$/gm;

// TODO: test
const MAKESCENE_META_REGEX = /makeScene2D\(.*?,\s*['"](.*?)['"]\);/;

function findMatchingParenthesis(content: string, start: number) {
  let count = 1;
  let index = start;

  while (count > 0 && index < content.length) {
    index++;
    if (content[index] === '(') {
      count++;
    } else if (content[index] === ')') {
      count--;
    }
  }

  return index;
}

export function scenesPlugin(): Plugin {
  return {
    name: 'motion-canvas:scene',

    async load(id) {
      if (
        !(id.endsWith('ts') || id.endsWith('tsx')) ||
        id.includes('virtual:editor') ||
        id.includes('node_modules')
      ) {
        return;
      }

      // Make sure the project root is included
      if (!id.endsWith('?project')) {
        id = id.replace('?project', '');
      }

      // Check if the file contains a call to makeScene2D
      const content = await fs.readFile(id, 'utf-8');
      const contentWithoutComments = content.replace(COMMENT_REGEX, '');
      if (!contentWithoutComments.includes('makeScene2D')) {
        return;
      }

      // Get the second parameter of makeScene2D which is the meta file path
      const contentWithoutNewlines = contentWithoutComments.replace(/\n/g, '');
      const match = contentWithoutNewlines.match(MAKESCENE_META_REGEX);

      if (!match) {
        return;
      }

      const metaFileRelativePath = match[1]!;

      // Prepare onReplaced for hot module replacement
      const hotModuleReplacementCode = `\
      import {ValueDispatcher} from '@motion-canvas/core';
      import metaFile from '${metaFileRelativePath}';

      function assignInfo(description: any) {
        metaFile.attach(description.meta);

        if (import.meta.hot) {
          description.onReplaced = import.meta.hot.data.onReplaced;
        }
        description.onReplaced ??= new ValueDispatcher(description.config);
        if (import.meta.hot) {
          import.meta.hot.accept();
          if (import.meta.hot.data.onReplaced) {
            description.onReplaced.current = description;
          } else {
            import.meta.hot.data.onReplaced = description.onReplaced;
          }
        }

        return description;
      }
      `;

      // Get the indexes of the start and end of the makeScene2D call
      const makeScene2D = 'makeScene2D(';
      const start = contentWithoutComments.indexOf(makeScene2D);
      const end = findMatchingParenthesis(
        contentWithoutComments,
        start + makeScene2D.length,
      );

      const newContent =
        hotModuleReplacementCode +
        contentWithoutComments.slice(0, start) +
        `assignInfo(${contentWithoutComments.slice(start, end + 1)})` +
        contentWithoutComments.slice(end + 1);

      /* language=typescript */
      return newContent;
    },
  };
}
