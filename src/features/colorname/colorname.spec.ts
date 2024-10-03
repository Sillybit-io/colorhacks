import { describe, expect, it } from 'vitest';
import { getColorNameFromHex } from './colorname';
import { getColorDistance } from './colorname.utils';

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
        'Unable to find closest color match',
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
});
