import {FFmpegExporterClient, ImageExporter} from '../exporter';
import {WasmExporter} from '../exporter/WasmExporter';
import {makePlugin} from './makePlugin';

/**
 * The default plugin included in every Motion Canvas project.
 *
 * TODO(refactor): I don't think these are plugins anymore.
 *
 * @internal
 */
export default makePlugin({
  name: '@revideo/core/default',
  exporters() {
    return [WasmExporter, FFmpegExporterClient, ImageExporter];
  },
});
