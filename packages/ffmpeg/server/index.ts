import {
  Plugin,
  PLUGIN_OPTIONS,
  PluginConfig,
} from '@revideo/vite-plugin/lib/plugins';
import {FFmpegBridge} from './FFmpegBridge';

export default (): Plugin => {
  let config: PluginConfig;
  return {
    name: 'revideo/ffmpeg',
    [PLUGIN_OPTIONS]: {
      entryPoint: '@revideo/ffmpeg/lib/client',
      async config(value) {
        config = value;
      },
    },
    configureServer(server) {
      new FFmpegBridge(server.ws, config);
    },
  };
};
