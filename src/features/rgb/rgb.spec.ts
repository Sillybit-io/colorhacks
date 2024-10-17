import type { HEX } from '@features/hex/hex.type';
import { describe, expect, it } from 'vitest';
import { getHexFromRgb, getRgbaFromHex, isRgbColor, isRgbaColor } from './rgb';

describe('RGB utilities', () => {
  describe('getRgbaFromHex', () => {
    it('should convert a hex code to RGBA format', () => {
      const result = getRgbaFromHex({ hexCode: '#FF0000' as HEX });
      expect(result).toEqual({
        rgba: 'rgba(255, 0, 0, 1)',
        r: 255,
        g: 0,
        b: 0,
        a: 1,
      });
    });

    it('should handle hex codes without the # prefix', () => {
      const result = getRgbaFromHex({ hexCode: '00FF00' as HEX });
      expect(result).toEqual({
        rgba: 'rgba(0, 255, 0, 1)',
        r: 0,
        g: 255,
        b: 0,
        a: 1,
      });
    });

    it('should apply the provided alpha value', () => {
      const result = getRgbaFromHex({ hexCode: '#0000FF' as HEX, alpha: 0.5 });
      expect(result).toEqual({
        rgba: 'rgba(0, 0, 255, 0.5)',
        r: 0,
        g: 0,
        b: 255,
        a: 0.5,
      });
    });

    it('should clamp alpha values to be between 0 and 1', () => {
      const resultHigh = getRgbaFromHex({
        hexCode: '#FFFFFF' as HEX,
        alpha: 1.5,
      });
      expect(resultHigh.a).toBe(1);

      const resultLow = getRgbaFromHex({
        hexCode: '#000000' as HEX,
        alpha: -0.5,
      });
      expect(resultLow.a).toBe(0);
    });

    it('should handle lowercase hex codes', () => {
      const result = getRgbaFromHex({ hexCode: '#ff8000' as HEX });
      expect(result).toEqual({
        rgba: 'rgba(255, 128, 0, 1)',
        r: 255,
        g: 128,
        b: 0,
        a: 1,
      });
    });

    it('should handle 3-digit hex codes', () => {
      const result = getRgbaFromHex({ hexCode: '#F00' as HEX });
      expect(result).toEqual({
        rgba: 'rgba(255, 0, 0, 1)',
        r: 255,
        g: 0,
        b: 0,
        a: 1,
      });
    });

    it('should throw an error for invalid hex codes', () => {
      expect(() => getRgbaFromHex({ hexCode: '#GGG' as HEX })).toThrow(
        'Invalid color',
      );
    });
  });

  describe('isRgbColor', () => {
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
  });

  describe('isRgbaColor', () => {
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

  describe('getHexFromRgb', () => {
    it('should convert RGB to hex', () => {
      expect(getHexFromRgb({ r: 255, g: 0, b: 0 })).toBe('#ff0000');
      expect(getHexFromRgb({ r: 0, g: 255, b: 0 })).toBe('#00ff00');
      expect(getHexFromRgb({ r: 0, g: 0, b: 255 })).toBe('#0000ff');
    });

    it('should handle edge cases', () => {
      expect(getHexFromRgb({ r: 0, g: 0, b: 0 })).toBe('#000000');
      expect(getHexFromRgb({ r: 255, g: 255, b: 255 })).toBe('#ffffff');
    });

    it('should pad single-digit hex values with zeros', () => {
      expect(getHexFromRgb({ r: 0, g: 10, b: 15 })).toBe('#000a0f');
    });

    it('should throw an error for invalid RGB values', () => {
      expect(() => getHexFromRgb({ r: 256, g: 0, b: 0 })).toThrow(
        'Invalid color',
      );
      expect(() => getHexFromRgb({ r: 0, g: 300, b: 0 })).toThrow(
        'Invalid color',
      );
      expect(() => getHexFromRgb({ r: 0, g: 0, b: 1000 })).toThrow(
        'Invalid color',
      );
      expect(() => getHexFromRgb({ r: -10, g: 0, b: 0 })).toThrow(
        'Invalid color',
      );
      expect(() => getHexFromRgb({ r: 0, g: -255, b: 100 })).toThrow(
        'Invalid color',
      );
    });
  });
});
