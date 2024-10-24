import type {ColorSpace, InterpolationMode} from 'chroma-js';
import {Color as ChromaColor, mix} from 'chroma-js';
import type {Signal, SignalValue} from '../signals';
import {SignalContext} from '../signals';
import type {InterpolationFunction} from '../tweening';
import type {Type, WebGLConvertible} from './Type';

export type SerializedColor = string;

export type PossibleColor =
  | SerializedColor
  | number
  | ChromaColor
  | {r: number; g: number; b: number; a: number};

export type ColorSignal<T> = Signal<PossibleColor, ChromaColor, T>;

declare module 'chroma-js' {
  interface Color extends Type, WebGLConvertible {
    serialize(): string;
    lerp(
      to: ColorInterface | string,
      value: number,
      colorSpace?: ColorSpace,
    ): ColorInterface;
  }
  type ColorInterface = ChromaColor;
  type ColorSpace =
    | 'rgb'
    | 'hsl'
    | 'hsv'
    | 'lab'
    | 'lch'
    | 'lrgb'
    | 'hcl'
    | 'hsi'
    | 'oklab'
    | 'oklch';
  interface ColorStatic {
    symbol: symbol;
    lerp(
      from: ColorInterface | string | null,
      to: ColorInterface | string | null,
      value: number,
      colorSpace?: ColorSpace,
    ): ColorInterface;
    createLerp(colorSpace: ColorSpace): InterpolationFunction<ColorInterface>;
    createSignal(
      initial?: SignalValue<PossibleColor>,
      interpolation?: InterpolationFunction<ColorInterface>,
    ): ColorSignal<void>;
  }
  interface ChromaStatic {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Color: ColorStatic & (new (color: PossibleColor) => ColorInterface);
  }
}

/**
 * Represents a color.
 *
 * @remarks
 * This is the same class as the one created by
 * {@link https://gka.github.io/chroma.js/ | chroma.js}. Check out their
 * documentation for more information on how to use it.
 */
type ExtendedColor = ChromaColor;
// iife prevents tree shaking from stripping our methods.
const ExtendedColor: typeof ChromaColor = (() => {
  ChromaColor.symbol = ChromaColor.prototype.symbol = Symbol.for(
    '@revideo/core/types/Color',
  );

  ChromaColor.lerp = ChromaColor.prototype.lerp = (
    from: ChromaColor | string | null,
    to: ChromaColor | string | null,
    value: number,
    colorSpace: InterpolationMode = 'lch',
  ) => {
    if (typeof from === 'string') {
      from = new ChromaColor(from);
    }
    if (typeof to === 'string') {
      to = new ChromaColor(to);
    }

    const fromIsColor = from instanceof ChromaColor;
    const toIsColor = to instanceof ChromaColor;

    if (!fromIsColor) {
      from = toIsColor
        ? (to as ChromaColor).alpha(0)
        : new ChromaColor('rgba(0, 0, 0, 0)');
    }
    if (!toIsColor) {
      to = fromIsColor
        ? (from as ChromaColor).alpha(0)
        : new ChromaColor('rgba(0, 0, 0, 0)');
    }

    return mix(from as ChromaColor, to as ChromaColor, value, colorSpace);
  };

  ChromaColor.createLerp = ChromaColor.prototype.createLerp =
    (colorSpace: InterpolationMode) =>
    (
      from: ChromaColor | string | null,
      to: ChromaColor | string | null,
      value: number,
    ) =>
      ChromaColor.lerp(from, to, value, colorSpace);

  ChromaColor.createSignal = (
    initial?: SignalValue<PossibleColor>,
    interpolation: InterpolationFunction<ChromaColor> = ChromaColor.lerp,
  ): ColorSignal<void> => {
    return new SignalContext(
      initial,
      interpolation,
      undefined,
      value => new ChromaColor(value),
    ).toSignal();
  };

  ChromaColor.prototype.toSymbol = () => {
    return ChromaColor.symbol;
  };

  ChromaColor.prototype.toUniform = function (
    this: ChromaColor,
    gl: WebGL2RenderingContext,
    location: WebGLUniformLocation,
  ): void {
    gl.uniform4fv(location, this.gl());
  };

  ChromaColor.prototype.serialize = function (
    this: ChromaColor,
  ): SerializedColor {
    return this.css();
  };

  ChromaColor.prototype.lerp = function (
    this: ChromaColor,
    to: ChromaColor,
    value: number,
    colorSpace?: ColorSpace,
  ) {
    return ChromaColor.lerp(this, to, value, colorSpace);
  };

  return ChromaColor;
})();

export {ExtendedColor as Color};
