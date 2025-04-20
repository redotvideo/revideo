import {converter, formatHex8, interpolate, parse} from 'culori';
import type {Signal, SignalValue} from '../signals';
import {SignalContext} from '../signals';
import type {InterpolationFunction} from '../tweening';
import {clamp} from '../tweening';
import type {Type, WebGLConvertible} from './Type';

export type SerializedColor = string;

function parseNumber(num: number): [number, number, number, number] {
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return [r / 255, g / 255, b / 255, 1];
}

export interface ColorObject {
  r: number;
  g: number;
  b: number;
  a: number;
}

export type PossibleColor = SerializedColor | number | Color | ColorObject;

type CuloriInterpolatorMode =
  | 'a98'
  | 'cubehelix'
  | 'dlab'
  | 'dlch'
  | 'hsi'
  | 'hsl'
  | 'hsv'
  | 'hwb'
  | 'jab'
  | 'jch'
  | 'lab'
  | 'lab65'
  | 'lch'
  | 'lch65'
  | 'lchuv'
  | 'lrgb'
  | 'luv'
  | 'okhsl'
  | 'okhsv'
  | 'oklab'
  | 'oklch'
  | 'p3'
  | 'prophoto'
  | 'rec2020'
  | 'rgb'
  | 'xyz'
  | 'xyz50'
  | 'xyz65'
  | 'yiq';

export type ColorSignal<T> = Signal<PossibleColor, Color, T>;

/**
 * Represents a color using RGBA values (0-1 range).
 */
export class Color implements Type, WebGLConvertible {
  public static symbol = Symbol.for('@revideo/core/types/Color');
  public readonly symbol = Color.symbol;

  public readonly r: number;
  public readonly g: number;
  public readonly b: number;
  public readonly a: number;

  public constructor(value?: PossibleColor) {
    // Handle undefined/null case
    if (value === undefined || value === null) {
      this.r = 0;
      this.g = 0;
      this.b = 0;
      this.a = 1; // Default alpha for undefined is 1 (fully opaque black)
      return;
    }

    // Handle Color instance
    if (value instanceof Color) {
      this.r = value.r;
      this.g = value.g;
      this.b = value.b;
      this.a = value.a;
      return;
    }

    // Handle string parsing using culori
    if (typeof value === 'string') {
      const parsedColor = parse(value);
      if (!parsedColor) {
        throw new Error(`Invalid color string value provided: ${value}`);
      }

      // Convert parsed color to RGB if it's not already
      const rgbColor =
        parsedColor.mode === 'rgb'
          ? parsedColor
          : converter('rgb')(parsedColor);

      if (rgbColor) {
        this.r = clamp(0, 1, rgbColor.r);
        this.g = clamp(0, 1, rgbColor.g);
        this.b = clamp(0, 1, rgbColor.b);
        this.a = clamp(0, 1, rgbColor.alpha ?? 1);
        return;
      }
    }

    // Handle number parsing
    if (typeof value === 'number') {
      const [r, g, b, a] = parseNumber(value);
      this.r = clamp(0, 1, r);
      this.g = clamp(0, 1, g);
      this.b = clamp(0, 1, b);
      this.a = clamp(0, 1, a);
      return;
    }

    // Handle object parsing
    if (typeof value === 'object') {
      // Check for r, g, b properties to be reasonably sure it's a ColorObject
      if ('r' in value && 'g' in value && 'b' in value) {
        const obj = value as ColorObject; // Assume it matches the interface
        this.r = clamp(0, 1, obj.r / 255);
        this.g = clamp(0, 1, obj.g / 255);
        this.b = clamp(0, 1, obj.b / 255);
        this.a = clamp(0, 1, obj.a ?? 1);
        return;
      }
    }

    throw new Error(`Invalid color value provided: ${value}`);
  }

  /**
   * Interpolates between two colors using LCH color space.
   */
  public static lerp(
    from: PossibleColor | null,
    to: PossibleColor | null,
    value: number,
    mode: CuloriInterpolatorMode = 'lch', // Default to LCH
  ): Color {
    const fromColor =
      from instanceof Color ? from : new Color(from ?? undefined);
    const toColor = to instanceof Color ? to : new Color(to ?? undefined);

    // Define culori colors in {r, g, b} format (0-1 range)
    const startColorCulori = {
      mode: 'rgb',
      r: fromColor.r,
      g: fromColor.g,
      b: fromColor.b,
    } as const;
    const endColorCulori = {
      mode: 'rgb',
      r: toColor.r,
      g: toColor.g,
      b: toColor.b,
    } as const;

    // Create LCH interpolator using culori
    const interpolationMode = mode ?? 'lch'; // Ensure mode is not undefined
    const interpolator = interpolate(
      [startColorCulori, endColorCulori],
      interpolationMode as any, // Use specified interpolation space (casting to bypass TS error)
    );

    // Get the interpolated color in LCH mode from culori
    const interpolatedLch = interpolator(value);

    // Convert the interpolated LCH color back to RGB
    const rgbConverter = converter('rgb');
    const interpolatedRgb = rgbConverter(interpolatedLch);

    // Interpolate alpha linearly
    const a = fromColor.a + (toColor.a - fromColor.a) * value;

    // Create a new Color instance, clamping RGB values from culori
    // Check if interpolatedRgb is valid before accessing properties
    const finalR = interpolatedRgb ? clamp(0, 1, interpolatedRgb.r) : 0;
    const finalG = interpolatedRgb ? clamp(0, 1, interpolatedRgb.g) : 0;
    const finalB = interpolatedRgb ? clamp(0, 1, interpolatedRgb.b) : 0;

    return new Color({
      r: finalR * 255,
      g: finalG * 255,
      b: finalB * 255,
      a: clamp(0, 1, a), // Also clamp alpha just in case
    });
  }

  /**
   * Creates an interpolation function for colors (uses LCH space via culori).
   */
  public static createLerp(mode: CuloriInterpolatorMode = 'lch') {
    return (from: PossibleColor, to: PossibleColor, value: number) =>
      Color.lerp(from, to, value, mode);
  }

  /**
   * Creates a signal for the Color type.
   */
  public static createSignal(
    initial?: SignalValue<PossibleColor>,
    interpolation: InterpolationFunction<Color> = Color.lerp,
  ): ColorSignal<void> {
    return new SignalContext<PossibleColor, Color, void>(
      initial,
      interpolation,
      undefined,
      value => (value instanceof Color ? value : new Color(value)),
    ).toSignal();
  }

  public toSymbol(): symbol {
    return this.symbol;
  }

  /**
   * Returns the color components as a [r, g, b, a] array (0-1 range).
   */
  private gl(): [number, number, number, number] {
    return [this.r, this.g, this.b, this.a];
  }

  public toUniform(
    gl: WebGL2RenderingContext,
    location: WebGLUniformLocation,
  ): void {
    gl.uniform4fv(location, this.gl());
  }

  /**
   * Serializes the color to an `rgba()` CSS string.
   */
  public serialize(): SerializedColor {
    const r = Math.round(this.r * 255);
    const g = Math.round(this.g * 255);
    const b = Math.round(this.b * 255);
    // Use toFixed(3) for alpha like before, clamp to avoid -0
    const alphaStr = clamp(0, 1, this.a).toFixed(3);
    return `rgba(${r}, ${g}, ${b}, ${alphaStr})`;
  }

  /**
   * Serializes the color to an `rgb()` CSS string (omitting alpha).
   */
  public css(): SerializedColor {
    const r = Math.round(this.r * 255);
    const g = Math.round(this.g * 255);
    const b = Math.round(this.b * 255);
    return `rgb(${r},${g},${b})`;
  }

  /**
   * Returns the alpha value of the color (0-1 range).
   */
  public alpha(): number {
    return this.a;
  }

  /**
   * Serializes the color to an RRGGBBAA hex string using culori.
   */
  public hex(): string {
    // Use culori's formatter for consistency
    return formatHex8({
      mode: 'rgb',
      r: this.r,
      g: this.g,
      b: this.b,
      alpha: this.a,
    });
  }

  /**
   * Linearly interpolates from this color to another using LCH space.
   */
  public lerp(
    to: PossibleColor,
    value: number,
    mode: CuloriInterpolatorMode = 'lch',
  ): Color {
    return Color.lerp(this, to, value, mode);
  }
}
