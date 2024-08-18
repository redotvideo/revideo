import {SimpleSignal, useAssetBase} from '@revideo/core';
import {nodeName, signal} from '../decorators';
import {Rect} from './Rect';

/**
 * A component that has a source. Used as a base class for `Media` and `Img` components.
 */
@nodeName('Asset')
export abstract class Asset extends Rect {
  /**
   * The source of this asset.
   *
   * @example
   * Using a local path, with the resource inside the /public folder:
   * ```tsx
   * view.add(<Img src={'/image.png} />)
   * ```
   * Loading a resource from the internet:
   * ```tsx
   * view.add(<Img src="https://example.com/image.png" />)
   * ```
   */
  @signal()
  public declare readonly src: SimpleSignal<string, this>;

  public assetRoot?: `${string}/`;

  public fullSource(): string {
    if (!this.assetRoot) {
      this.assetRoot = useAssetBase();
    }

    let src = this.src();
    const isUrl =
      src.startsWith('http://') ||
      src.startsWith('https://') ||
      src.startsWith('data:');

    if (isUrl) {
      return src;
    }

    // We remove the trailing slash from the assetRoot
    // and make sure there is a leading slash in the src
    if (src[0] !== '/') {
      src = '/' + src;
    }

    return this.assetRoot.slice(0, -1) + src;
  }
}
