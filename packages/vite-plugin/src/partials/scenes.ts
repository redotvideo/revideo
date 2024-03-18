import * as fs from 'fs/promises';
import {Plugin} from 'vite';

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

function extractCommentBeforeIndex(
  content: string,
  ind: number,
): string | null {
  const regex = /\/\/(.*?)\n|\/\*(.|\n)*?\*\//gm;
  let match: RegExpExecArray | null;
  let lastComment: string | null = null;

  while ((match = regex.exec(content)) !== null) {
    const start = match.index;
    const end = start + match[0].length;

    if (end <= ind) {
      lastComment = match[0];
    } else {
      break;
    }
  }

  return lastComment;
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

async function getMetaFileNamePath(
  filePath: string,
  indexOfMakeScene: number,
  fileContent: string,
) {
  // Extract the comment before the index
  const comment = extractCommentBeforeIndex(fileContent, indexOfMakeScene);

  /**
   * If there is no comment, or no file is specified, we check if
   * there is a meta file with the same name as the typescript file.
   */
  if (comment) {
    const file = comment.split('meta=')[1].replace(/\s/g, '').slice(0, -2);
    if (file) {
      return file.trim();
    }
  }

  // If no file is specified, we try the typescript file name
  const path = filePath.split('.');
  path.pop();
  const guessedPath = path.join('.') + '.meta';

  // Check if the file exists
  try {
    await fs.access(guessedPath);
    return guessedPath;
  } catch (e) {
    throw new Error(`No meta file found for ${filePath}.`);
  }
}

export function scenesPlugin(): Plugin {
  return {
    name: 'revideo:scene',

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
      let content = await fs.readFile(id, 'utf-8');

      // Replace all mentions of "makeScene2D" that are inside of comments
      content = content.replace(/(\/\/.*?)makeScene2D(.*?$)/gm, match =>
        match.replace(/makeScene2D/g, ''),
      );
      content = content.replace(/(\/\*[\s\S]*?\*\/)/gm, commentBlock => {
        return commentBlock.replace(/makeScene2D/gi, '');
      });

      if (!content.includes('makeScene2D')) {
        return;
      }

      // Get all calls and their indexes
      const indexes = [];
      let index = content.indexOf('makeScene2D(');
      while (index !== -1) {
        indexes.push(index);
        index = content.indexOf('makeScene2D(', index + 1);
      }

      const makeScene2D = 'makeScene2D(';
      const calls: {startIndex: number; endIndex: number; metaFile: string}[] =
        [];

      for (const index of indexes) {
        const end = findMatchingParenthesis(
          content,
          index + makeScene2D.length,
        );

        // Check if the next character is an opening parenthesis or a colorn (indicating a function call)
        const nextNonWhiteSpaceChar =
          content
            .slice(end + 1)
            .split('')
            .findIndex(char => char !== ' ' && char !== '\n') +
          end +
          1;

        if ([':', '{'].includes(content[nextNonWhiteSpaceChar])) {
          continue;
        }

        const path = await getMetaFileNamePath(id, index, content);

        calls.push({
          startIndex: index,
          endIndex: end,
          metaFile: path,
        });
      }

      // Get the hot module replacement code
      const hotModuleReplacementCode = getHotModuleReplacementCode(
        calls.map(call => call.metaFile),
      );

      if (calls.length === 0) {
        return;
      }

      // Construct the new content
      let newContent =
        hotModuleReplacementCode + content.slice(0, calls[0].startIndex);

      console.log('here');
      for (let i = 0; i < calls.length; i++) {
        newContent += `assignInfo(`;
        newContent += content.slice(calls[i].startIndex, calls[i].endIndex + 1);
        newContent += `, '${i}')`;

        if (i < calls.length - 1) {
          newContent += content.slice(
            calls[i].endIndex + 1,
            calls[i + 1].startIndex,
          );
        } else {
          newContent += content.slice(calls[i].endIndex + 1);
        }
      }

      /* language=typescript */
      return newContent;
    },
  };
}
