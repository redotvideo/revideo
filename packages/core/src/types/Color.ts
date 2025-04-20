import type {Signal, SignalValue} from '../signals';
import {SignalContext} from '../signals';
import type {InterpolationFunction} from '../tweening';
import {clamp} from '../tweening';
import type {Type, WebGLConvertible} from './Type';

export type SerializedColor = string;

// Basic color parsing regex
const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
const RGB_REGEX =
  /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i;
const HSL_REGEX =
  /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+%?)\s*,\s*([\d.]+%?)\s*(?:,\s*([\d.]+)\s*)?\)$/i;

function parseHex(hex: string): [number, number, number, number] | null {
  const result = HEX_REGEX.exec(hex);
  if (!result) return null;
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  const a = result[4] ? parseInt(result[4], 16) / 255 : 1;
  return [r / 255, g / 255, b / 255, a];
}

function parseRgb(rgb: string): [number, number, number, number] | null {
  const result = RGB_REGEX.exec(rgb);
  if (!result) return null;
  const r = parseInt(result[1], 10);
  const g = parseInt(result[2], 10);
  const b = parseInt(result[3], 10);
  const a = result[4] ? parseFloat(result[4]) : 1;
  return [r / 255, g / 255, b / 255, a];
}

function parseNumber(num: number): [number, number, number, number] {
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return [r / 255, g / 255, b / 255, 1];
}

// Simple HSL to RGB conversion (doesn't handle all edge cases perfectly)
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r, g, b];
}

function parseHsl(hsl: string): [number, number, number, number] | null {
  const result = HSL_REGEX.exec(hsl);
  if (!result) return null;

  const h = parseFloat(result[1]);
  const s = parseFloat(result[2].replace('%', ''));
  const l = parseFloat(result[3].replace('%', ''));
  const a = result[4] ? parseFloat(result[4]) : 1;

  const [r, g, b] = hslToRgb(h, s, l);
  return [r, g, b, a];
}

export interface ColorObject {
  r: number;
  g: number;
  b: number;
  a: number;
}

export type PossibleColor = SerializedColor | number | Color | ColorObject;

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

  constructor(value?: PossibleColor) {
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

    // Handle string parsing
    if (typeof value === 'string') {
      let parsed: [number, number, number, number] | null = null;
      parsed = parseHex(value);
      if (!parsed) {
        parsed = parseRgb(value);
      }
      if (!parsed) {
        parsed = parseHsl(value);
      }

      if (parsed) {
        const [r, g, b, a] = parsed;
        this.r = clamp(0, 1, r);
        this.g = clamp(0, 1, g);
        this.b = clamp(0, 1, b);
        this.a = clamp(0, 1, a);
        return;
      }

      throw new Error(`Invalid color string value provided: ${value}`);
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
   * Linearly interpolates between two colors in RGB space.
   */
  static lerp(
    from: PossibleColor | null,
    to: PossibleColor | null,
    value: number,
  ): Color {
    const fromColor =
      from instanceof Color ? from : new Color(from ?? undefined);
    const toColor = to instanceof Color ? to : new Color(to ?? undefined);

    const r = fromColor.r + (toColor.r - fromColor.r) * value;
    const g = fromColor.g + (toColor.g - fromColor.g) * value;
    const b = fromColor.b + (toColor.b - fromColor.b) * value;
    const a = fromColor.a + (toColor.a - fromColor.a) * value;

    return new Color({r: r * 255, g: g * 255, b: b * 255, a});
  }

  /**
   * Creates an interpolation function for colors (always uses linear RGB).
   */
  static createLerp(): InterpolationFunction<Color> {
    return Color.lerp;
  }

  /**
   * Creates a signal for the Color type.
   */
  static createSignal(
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

  toSymbol(): symbol {
    return this.symbol;
  }

  /**
   * Returns the color components as a [r, g, b, a] array (0-1 range).
   */
  gl(): [number, number, number, number] {
    return [this.r, this.g, this.b, this.a];
  }

  toUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation): void {
    gl.uniform4fv(location, this.gl());
  }

  /**
   * Serializes the color to an `rgba()` CSS string.
   */
  serialize(): SerializedColor {
    const r = Math.round(this.r * 255);
    const g = Math.round(this.g * 255);
    const b = Math.round(this.b * 255);
    return `rgba(${r}, ${g}, ${b}, ${this.a.toFixed(3)})`;
  }

  /**
   * Serializes the color to an `rgb()` CSS string (omitting alpha).
   */
  css(): SerializedColor {
    const r = Math.round(this.r * 255);
    const g = Math.round(this.g * 255);
    const b = Math.round(this.b * 255);
    return `rgb(${r},${g},${b})`;
  }

  /**
   * Returns the alpha value of the color (0-1 range).
   */
  alpha(): number {
    return this.a;
  }

  /**
   * Serializes the color to an RRGGBBAA hex string.
   */
  hex(): string {
    const r = Math.round(this.r * 255)
      .toString(16)
      .padStart(2, '0');
    const g = Math.round(this.g * 255)
      .toString(16)
      .padStart(2, '0');
    const b = Math.round(this.b * 255)
      .toString(16)
      .padStart(2, '0');
    const a = Math.round(this.a * 255)
      .toString(16)
      .padStart(2, '0');
    return `#${r}${g}${b}${a}`;
  }

  /**
   * Linearly interpolates from this color to another in RGB space.
   */
  lerp(to: PossibleColor, value: number): Color {
    return Color.lerp(this, to, value);
  }
}
