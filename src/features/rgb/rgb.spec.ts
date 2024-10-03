import { describe, expect, it } from 'vitest';
import { getRgbaFromHex } from './rgb';

describe('RGB utilities', () => {
  it('should convert a hex code to RGBA format', () => {
    const result = getRgbaFromHex({ hexCode: '#FF0000' });
    expect(result).toEqual({
      rgba: 'rgba(255, 0, 0, 1)',
      r: 255,
      g: 0,
      b: 0,
      a: 1,
    });
  });

  it('should handle hex codes without the # prefix', () => {
    const result = getRgbaFromHex({ hexCode: '00FF00' });
    expect(result).toEqual({
      rgba: 'rgba(0, 255, 0, 1)',
      r: 0,
      g: 255,
      b: 0,
      a: 1,
    });
  });

  it('should apply the provided alpha value', () => {
    const result = getRgbaFromHex({ hexCode: '#0000FF', alpha: 0.5 });
    expect(result).toEqual({
      rgba: 'rgba(0, 0, 255, 0.5)',
      r: 0,
      g: 0,
      b: 255,
      a: 0.5,
    });
  });

  it('should clamp alpha values to be between 0 and 1', () => {
    const resultHigh = getRgbaFromHex({ hexCode: '#FFFFFF', alpha: 1.5 });
    expect(resultHigh.a).toBe(1);

    const resultLow = getRgbaFromHex({ hexCode: '#000000', alpha: -0.5 });
    expect(resultLow.a).toBe(0);
  });

  it('should handle lowercase hex codes', () => {
    const result = getRgbaFromHex({ hexCode: '#ff8000' });
    expect(result).toEqual({
      rgba: 'rgba(255, 128, 0, 1)',
      r: 255,
      g: 128,
      b: 0,
      a: 1,
    });
  });
});
