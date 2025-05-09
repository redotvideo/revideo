import {describe, expect, test} from 'vitest';
import {Color} from './Color';

describe('Color.lerp', () => {
  test('interpolates between colors', () => {
    expect(
      Color.lerp('rgb(0, 0, 0)', 'rgb(255, 255, 255)', 1 / 2).css(),
    ).toMatchInlineSnapshot(`"rgb(119,119,119)"`);
    expect(
      Color.lerp('hsl(0, 0%, 0%)', 'hsl(0, 0%, 100%)', 1 / 2).css(),
    ).toMatchInlineSnapshot(`"rgb(119,119,119)"`);
  });
  test('returns starting value at 0', () => {
    expect(Color.lerp('rgb(0, 0, 0)', 'rgb(255, 255, 255)', 0).css()).toEqual(
      'rgb(0,0,0)',
    );
  });
  test('returns final value at 1', () => {
    expect(Color.lerp('rgb(0, 0, 0)', 'rgb(255, 255, 255)', 1).css()).toEqual(
      'rgb(255,255,255)',
    );
  });
});

describe('Color.createLerp', () => {
  test('creates an interpolation function with default LCH mode', () => {
    const lerpFn = Color.createLerp();
    expect(
      lerpFn(
        new Color('rgb(0, 0, 0)'),
        new Color('rgb(255, 255, 255)'),
        0.5,
      ).css(),
    ).toEqual('rgb(119,119,119)');
  });

  test('creates an interpolation function with a specified mode (e.g., lab)', () => {
    const lerpFn = Color.createLerp('lab');
    const expected = Color.lerp(
      'rgb(0, 0, 0)',
      'rgb(255, 255, 255)',
      0.5,
      'lab',
    );

    expect(
      lerpFn(
        new Color('rgb(0, 0, 0)'),
        new Color('rgb(255, 255, 255)'),
        0.5,
      ).css(),
    ).toEqual(expected.css());

    // Example with a different color pair to ensure mode is used
    const blueToYellowLerp = Color.createLerp('lab');
    expect(
      blueToYellowLerp(new Color('blue'), new Color('yellow'), 0.5).css(),
    ).toMatchInlineSnapshot(`"rgb(193,137,172)"`);
  });
});

describe('Color Constructor', () => {
  test('parses 4-digit hex codes correctly', () => {
    // Opaque (#rgb -> #rrggbb)
    expect(new Color('#f00').serialize()).toBe('rgba(255, 0, 0, 1.000)');
    expect(new Color('#0f0').serialize()).toBe('rgba(0, 255, 0, 1.000)');
    // Transparent (#rgba -> #rrggbbaa)
    expect(new Color('#00f8').serialize()).toBe('rgba(0, 0, 255, 0.533)'); // 88/255 = 0.5333...
    expect(new Color('#fff0').serialize()).toBe('rgba(255, 255, 255, 0.000)'); // 00/255 = 0
  });

  test('parses 8-digit hex codes correctly', () => {
    // Opaque
    expect(new Color('#ff0000ff').serialize()).toBe('rgba(255, 0, 0, 1.000)');
    // Transparent
    expect(new Color('#00ff0080').serialize()).toBe('rgba(0, 255, 0, 0.502)'); // 128/255 = 0.5019...
    expect(new Color('#0000ff00').serialize()).toBe('rgba(0, 0, 255, 0.000)');
  });

  test('parses CSS color names correctly', () => {
    expect(new Color('red').serialize()).toBe('rgba(255, 0, 0, 1.000)');
    expect(new Color('lime').serialize()).toBe('rgba(0, 255, 0, 1.000)'); // CSS 'green' is #008000
    expect(new Color('blue').serialize()).toBe('rgba(0, 0, 255, 1.000)');
    expect(new Color('lightgray').serialize()).toBe(
      'rgba(211, 211, 211, 1.000)',
    );
    expect(new Color('lightgrey').serialize()).toBe(
      'rgba(211, 211, 211, 1.000)',
    ); // Alias
    expect(new Color('transparent').serialize()).toBe('rgba(0, 0, 0, 0.000)');
  });

  test('handles invalid string input', () => {
    expect(() => new Color('invalid-color-string')).toThrow(
      'Invalid color string value provided: invalid-color-string',
    );
    expect(() => new Color('#gggggg')).toThrow(
      'Invalid color string value provided: #gggggg',
    );
  });
});
