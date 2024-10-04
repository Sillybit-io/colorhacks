import { describe, expect, it } from 'vitest';
import { getRgbaFromHex, isRgbColor, isRgbaColor } from './rgb';

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

  it('should return true for valid RGB colors', () => {
    expect(isRgbColor('rgb(255, 0, 0)')).toBe(true);
    expect(isRgbColor('rgb(0, 255, 0)')).toBe(true);
    expect(isRgbColor('rgb(0, 0, 255)')).toBe(true);
    expect(isRgbColor('rgb(123, 45, 67)')).toBe(true);
  });

  it('should return false for invalid RGB colors', () => {
    expect(isRgbColor('rgb(256, 0, 0)')).toBe(false);
    expect(isRgbColor('rgb(0, 0, 0, 1)')).toBe(false);
    expect(isRgbColor('rgba(0, 0, 255, 0.5)')).toBe(false);
    expect(isRgbColor('rgb(0, 0, 0')).toBe(false);
    expect(isRgbColor('rgb(0 0 0)')).toBe(false);
    expect(isRgbColor('rgb()')).toBe(false);
    expect(isRgbColor('rgb(255)')).toBe(false);
    expect(isRgbColor('rgb(a, b, c)')).toBe(false);
  });

  it('should return true for valid RGBA colors', () => {
    expect(isRgbaColor('rgba(255, 0, 0, 1)')).toBe(true);
    expect(isRgbaColor('rgba(0, 255, 0, 0.5)')).toBe(true);
    expect(isRgbaColor('rgba(0, 0, 255, 0)')).toBe(true);
    expect(isRgbaColor('rgba(123, 45, 67, 0.8)')).toBe(true);
  });

  it('should return false for invalid RGBA colors', () => {
    expect(isRgbaColor('rgba(0, 0, 0)')).toBe(false);
    expect(isRgbaColor('rgb(0, 0, 255)')).toBe(false);
    expect(isRgbaColor('rgba(0, 0, 0, 1')).toBe(false);
    expect(isRgbaColor('rgba(256, 0, 0, 1')).toBe(false);
    expect(isRgbaColor('rgba(0 0 0 1)')).toBe(false);
    expect(isRgbaColor('rgba()')).toBe(false);
    expect(isRgbaColor('rgba(255, 0, 0, 1.1)')).toBe(false);
    expect(isRgbaColor('rgba(a, b, c, d)')).toBe(false);
  });
});
