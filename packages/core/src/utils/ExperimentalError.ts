import type {LogPayload} from '../app';
import {DetailedError} from './DetailedError';

export const experimentalFeatures = `
This feature requires enabling the \`experimentalFeatures\` flag in your project
configuration:

\`\`\`ts
export default makeProject({
  experimentalFeatures: true,
  // ...
});
\`\`\`

[Learn more](https://motioncanvas.io/docs/experimental) about experimental
features.
`;

type ExperimentalErrorProps = Pick<
  LogPayload,
  'message' | 'remarks' | 'object' | 'durationMs' | 'inspect'
>;

export class ExperimentalError extends DetailedError {
  public constructor(message: string, remarks?: string);
  public constructor(props: ExperimentalErrorProps);
  public constructor(props: string | ExperimentalErrorProps, remarks?: string) {
    if (typeof props === 'string') {
      super({
        message: props,
        remarks: (remarks ?? '') + experimentalFeatures,
      });
    } else {
      super({
        ...props,
        remarks: (props.remarks ?? '') + experimentalFeatures,
      });
    }
  }
}
