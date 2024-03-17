import * as fs from 'fs/promises';
import {Plugin} from 'vite';

const COMMENT_REGEX = /\/\*[\s\S]*?\*\/|\/\/.*$/gm;

// TODO: test
const MAKESCENE_META_REGEX = /makeScene2D\(.*?,\s*['"](.*?)['"]\)/;

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

function getHotModuleReplacementCode(metaFilePaths: string[]) {
  let code = "import {ValueDispatcher} from '@motion-canvas/core';";
  code += '\n';

  // Import all meta files
  code += metaFilePaths
    .map((path, i) => `import metaFile${i} from '${path}';`)
    .join('\n');
  code += '\n';

  // Put all meta files into a map
  code += 'const metaFiles = {';
  code += metaFilePaths
    .map((_, i) => `metaFile${i}`)
    .map((name, i) => `'${i}': ${name}`)
    .join(', ');
  code += '};';
  code += '\n';

  // Create a function that assigns the meta file to the description
  code += `\
  function assignInfo(description: any, metaFilePath: string) {
    metaFiles[metaFilePath].attach(description.meta);
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

  return code;
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
      const contentWithoutNewlines = contentWithoutComments.replace(/\n/g, '');
      if (!contentWithoutNewlines.includes('makeScene2D')) {
        return;
      }

      // Get all calls and their indexes
      const indexes = [];
      let index = contentWithoutNewlines.indexOf('makeScene2D(');
      while (index !== -1) {
        indexes.push(index);
        index = contentWithoutNewlines.indexOf('makeScene2D(', index + 1);
      }

      const makeScene2D = 'makeScene2D(';

      const calls: {startIndex: number; endIndex: number; metaFile: string}[] =
        [];

      console.log('indexes');
      console.log(id, indexes);

      for (const index of indexes) {
        const end = findMatchingParenthesis(
          contentWithoutNewlines,
          index + makeScene2D.length,
        );

        const match = contentWithoutNewlines
          .slice(index, end + 1)
          .match(MAKESCENE_META_REGEX);

        console.log(contentWithoutNewlines.slice(index, end + 1));

        console.log(match);

        if (!match) {
          continue;
        }

        const metaFileRelativePath = match[1]!;
        calls.push({
          startIndex: index,
          endIndex: end,
          metaFile: metaFileRelativePath,
        });
      }

      // Get the hot module replacement code
      const hotModuleReplacementCode = getHotModuleReplacementCode(
        calls.map(call => call.metaFile),
      );

      console.log('calls');
      console.log(id, calls);

      if (calls.length === 0) {
        return;
      }

      // Construct the new content
      let newContent =
        hotModuleReplacementCode +
        contentWithoutNewlines.slice(0, calls[0].startIndex);

      console.log('here');
      for (let i = 0; i < calls.length; i++) {
        newContent += `assignInfo(`;
        newContent += contentWithoutNewlines.slice(
          calls[i].startIndex,
          calls[i].endIndex + 1,
        );
        newContent += `, '${i}')`;

        if (i < calls.length - 1) {
          newContent += contentWithoutNewlines.slice(
            calls[i].endIndex + 1,
            calls[i + 1].startIndex,
          );
        } else {
          newContent += contentWithoutNewlines.slice(calls[i].endIndex + 1);
        }
      }

      console.log(newContent);

      /* language=typescript */
      return newContent;
    },
  };
}
