import {FFmpegExporterClient, ImageExporter} from '../exporter';
import {WasmExporter} from '../exporter/WasmExporter';
import {makePlugin} from './makePlugin';

/**
 * The default plugin included in every Motion Canvas project.
 *
 * @internal
 */
export default makePlugin({
  name: '@revideo/core/default',
  exporters() {
    return [WasmExporter, FFmpegExporterClient, ImageExporter];
  },
});
