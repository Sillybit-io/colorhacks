import { InvalidColorMessage } from '@utilities/utilities';
import { describe, expect, it, vi } from 'vitest';
import {
  getColorNameFromHex,
  getColorNameFromHsl,
  getColorNameFromRgb,
} from './colorname';
import {
  formatColorName,
  getClosestMatch,
  getColorDistance,
} from './colorname.utils';

describe('colorname utilities', () => {
  describe('getColorNameFromHex', () => {
    it('should return the correct color name for an exact match', () => {
      const result = getColorNameFromHex({ hexCode: '#FF0000' });
      expect(result).toEqual({
        hexcode: '#ff0000',
        colorName: 'Red',
        isExactMatch: true,
        shadeHex: '#ff0000',
        shadeName: 'Red',
        distance: 0,
      });
    });

    it('should return the closest color name for a non-exact match', () => {
      const result = getColorNameFromHex({ hexCode: '#FF0001' });
      expect(result).toEqual({
        hexcode: '#ff0001',
        colorName: 'Red',
        isExactMatch: false,
        shadeHex: '#ff0000',
        shadeName: 'Red',
        distance: expect.any(Number),
      });
      expect(result.distance).toBeGreaterThan(0);
      expect(result.distance).toBe(1);
    });

    it('should handle lowercase hex codes', () => {
      const result = getColorNameFromHex({ hexCode: '#FF8000' });
      expect(result.hexcode).toBe('#ff8000');
      expect(result.isExactMatch).toBe(false);
    });

    it('should handle hex codes without #', () => {
      const result = getColorNameFromHex({ hexCode: '00FF00' });
      expect(result.hexcode).toBe('#00ff00');
      expect(result.colorName).toBe('Lime');
      expect(result.isExactMatch).toBe(true);
    });

    it('should handle invalid hex codes', () => {
      expect(() => getColorNameFromHex({ hexCode: 'invalid' })).toThrow(
        InvalidColorMessage,
      );
    });
  });

  describe('getColorDistance', () => {
    it('should return 0 for identical colors', () => {
      const distance = getColorDistance(
        { r: 255, g: 0, b: 0 },
        { r: 255, g: 0, b: 0 },
      );
      expect(distance).toBe(0);
    });

    it('should calculate the correct distance between two colors', () => {
      const distance = getColorDistance(
        { r: 255, g: 0, b: 0 },
        { r: 0, g: 255, b: 0 },
      );
      expect(distance).toBeCloseTo(360.62445840513925);
    });
  });

  it('should return the correct color name for an exact match', () => {
    const result = getColorNameFromRgb({ r: 255, g: 0, b: 0 });
    expect(result).toEqual({
      hexcode: '#ff0000',
      colorName: 'Red',
      isExactMatch: true,
      shadeHex: '#ff0000',
      shadeName: 'Red',
      distance: 0,
    });
  });

  it('should return the closest color name for a non-exact match', () => {
    const result = getColorNameFromRgb({ r: 255, g: 0, b: 1 });
    expect(result).toEqual({
      hexcode: '#ff0001',
      colorName: 'Red',
      isExactMatch: false,
      shadeHex: '#ff0000',
      shadeName: 'Red',
      distance: expect.any(Number),
    });
    expect(result.distance).toBeGreaterThan(0);
    expect(result.distance).toBe(1);
  });

  it('should handle edge cases', () => {
    const result = getColorNameFromRgb({ r: 0, g: 0, b: 0 });
    expect(result.colorName).toBe('Black');
    expect(result.isExactMatch).toBe(true);

    const whiteResult = getColorNameFromRgb({ r: 255, g: 255, b: 255 });
    expect(whiteResult.colorName).toBe('White');
    expect(whiteResult.isExactMatch).toBe(true);
  });

  it('should throw an error for invalid RGB values', () => {
    expect(() => getColorNameFromRgb({ r: 256, g: 0, b: 0 })).toThrow(
      InvalidColorMessage,
    );
    expect(() => getColorNameFromRgb({ r: -1, g: 0, b: 0 })).toThrow(
      InvalidColorMessage,
    );
    expect(() => getColorNameFromRgb({ r: 0, g: 300, b: 0 })).toThrow(
      InvalidColorMessage,
    );
  });

  it('should return the closest color match', () => {
    const result = getClosestMatch('#FF0001');
    expect(result).toEqual({
      hexcode: '#ff0001',
      colorName: 'Red',
      isExactMatch: false,
      shadeHex: '#ff0000',
      shadeName: 'Red',
      distance: expect.any(Number),
    });
  });

  it('should throw an error if no closest match is found', () => {
    const originalEntries = Object.entries;
    Object.entries = vi.fn().mockReturnValue([]);

    expect(() => getClosestMatch('#FF0000')).toThrow(
      'Unable to find closest color match',
    );

    Object.entries = originalEntries;
  });

  it('should format color names correctly', () => {
    expect(formatColorName('darkGoldenRod')).toBe('Dark Golden Rod');
    expect(formatColorName('lightBlue')).toBe('Light Blue');
    expect(formatColorName('red')).toBe('Red');
  });

  describe('getColorNameFromHsl', () => {
    it('should return the correct color name for an exact match', () => {
      const result = getColorNameFromHsl({ h: 0, s: 100, l: 50 });
      expect(result).toEqual({
        hexcode: '#ff0000',
        colorName: 'Red',
        isExactMatch: true,
        shadeHex: '#ff0000',
        shadeName: 'Red',
        distance: 0,
      });
    });

    it('should return the closest color name for a non-exact match', () => {
      const result = getColorNameFromHsl({ h: 1, s: 100, l: 50 });
      expect(result).toEqual({
        hexcode: '#ff0400',
        colorName: 'Red',
        isExactMatch: false,
        shadeHex: '#ff0000',
        shadeName: 'Red',
        distance: expect.any(Number),
      });
      expect(result.distance).toBeGreaterThan(0);
    });

    it('should handle edge cases', () => {
      const blackResult = getColorNameFromHsl({ h: 0, s: 0, l: 0 });
      expect(blackResult.colorName).toBe('Black');
      expect(blackResult.isExactMatch).toBe(true);

      const whiteResult = getColorNameFromHsl({ h: 0, s: 0, l: 100 });
      expect(whiteResult.colorName).toBe('White');
      expect(whiteResult.isExactMatch).toBe(true);
    });

    it('should throw an error for invalid HSL values', () => {
      expect(() => getColorNameFromHsl({ h: 361, s: 100, l: 50 })).toThrow(
        InvalidColorMessage,
      );
      expect(() => getColorNameFromHsl({ h: 0, s: 101, l: 50 })).toThrow(
        InvalidColorMessage,
      );
      expect(() => getColorNameFromHsl({ h: 0, s: 100, l: 101 })).toThrow(
        InvalidColorMessage,
      );
    });
  });
});
