import { InvalidColorMessage } from '@utilities/utilities';
import { describe, expect, it } from 'vitest';
import {
  getContrastRatio,
  getContrastRatioWCAG20,
  getOppositeColor,
} from './hacks';
import {
  calculateRelativeLuminance,
  getLuminance,
  normalizeColor,
} from './hacks.utils';

describe('color hacks utilities', () => {
  describe('getOppositeColor', () => {
    it('should return white for dark colors', () => {
      expect(getOppositeColor('#000000')).toBe('#FFFFFF');
      expect(getOppositeColor('#123456')).toBe('#FFFFFF');
    });

    it('should return black for light colors', () => {
      expect(getOppositeColor('#FFFFFF')).toBe('#000000');
      expect(getOppositeColor('#EEEEEE')).toBe('#000000');
    });

    it('should use custom dark and light colors when provided', () => {
      expect(getOppositeColor('#000000', '#333333', '#CCCCCC')).toBe('#CCCCCC');
      expect(getOppositeColor('#FFFFFF', '#333333', '#CCCCCC')).toBe('#333333');
    });

    it('should handle invalid hex codes', () => {
      expect(() => getOppositeColor('invalid')).toThrow(InvalidColorMessage);
    });
  });

  describe('getContrastRatio', () => {
    it('should return the correct contrast ratio for high contrast colors', () => {
      const ratio = getContrastRatio('#000000', '#FFFFFF');
      expect(ratio).toBeCloseTo(21, 2);
    });

    it('should return the correct contrast ratio for low contrast colors', () => {
      const ratio = getContrastRatio('#777777', '#888888');
      expect(ratio).toBeCloseTo(1.26, 2);
    });

    it('should return 1 for identical colors', () => {
      const ratio = getContrastRatio('#FF5733', '#FF5733');
      expect(ratio).toBeCloseTo(1, 5);
    });

    it('should handle invalid hex codes', () => {
      expect(() => getContrastRatio('invalid', '#FFFFFF')).toThrow(
        InvalidColorMessage,
      );
    });
  });

  describe('getContrastRatioWCAG20', () => {
    it('should return the same ratio as getContrastRatio for high contrast', () => {
      const ratio = getContrastRatioWCAG20('#000000', '#FFFFFF');
      expect(ratio).toBeCloseTo(21, 2);
    });

    it('should always return a ratio >= 1, even for low contrast colors', () => {
      const directRatio = getContrastRatio('#777777', '#888888');
      const wcagRatio = getContrastRatioWCAG20('#777777', '#888888');

      expect(wcagRatio).toBeCloseTo(directRatio, 5);
      expect(wcagRatio).toBeGreaterThanOrEqual(1);
      expect(wcagRatio).toBe(Math.max(directRatio, 1 / directRatio));
    });

    it('should always return a value >= 1', () => {
      const ratio1 = getContrastRatioWCAG20('#FF5733', '#FF8C00');
      const ratio2 = getContrastRatioWCAG20('#000000', '#FFFFFF');
      const ratio3 = getContrastRatioWCAG20('#777777', '#888888');

      expect(ratio1).toBeGreaterThanOrEqual(1);
      expect(ratio2).toBeGreaterThanOrEqual(1);
      expect(ratio3).toBeGreaterThanOrEqual(1);
    });

    it('should handle invalid hex codes', () => {
      expect(() => getContrastRatioWCAG20('invalid', '#FFFFFF')).toThrow(
        InvalidColorMessage,
      );
    });
  });

  it('should normalize color values correctly', () => {
    expect(normalizeColor(0)).toBe(0);
    expect(normalizeColor(255)).toBe(1);
    expect(normalizeColor(128)).toBeCloseTo(0.21586, 5);
  });

  it('should calculate luminance correctly', () => {
    expect(getLuminance(255, 255, 255)).toBeCloseTo(1, 5);
    expect(getLuminance(0, 0, 0)).toBe(0);
    expect(getLuminance(255, 0, 0)).toBeCloseTo(0.2126, 5);
  });

  it('should handle undefined values', () => {
    // @ts-ignore - Intentionally passing undefined for testing
    expect(getLuminance(undefined, 0, 0)).toBe(0);
    // @ts-ignore - Intentionally passing undefined for testing
    expect(getLuminance(0, undefined, 0)).toBe(0);
    // @ts-ignore - Intentionally passing undefined for testing
    expect(getLuminance(0, 0, undefined)).toBe(0);
    // @ts-ignore - Intentionally passing undefined for testing
    expect(getLuminance(undefined, undefined, undefined)).toBe(0);
  });

  it('should calculate relative luminance correctly', () => {
    expect(calculateRelativeLuminance({ r: 255, g: 255, b: 255 })).toBeCloseTo(
      1,
      4,
    );
    expect(calculateRelativeLuminance({ r: 0, g: 0, b: 0 })).toBe(0);
    expect(calculateRelativeLuminance({ r: 255, g: 0, b: 0 })).toBeCloseTo(
      0.2126,
      4,
    );
  });

  it('should handle edge cases correctly', () => {
    expect(calculateRelativeLuminance({ r: 10, g: 10, b: 10 })).toBeCloseTo(
      0.003035,
      5,
    );
    expect(calculateRelativeLuminance({ r: 100, g: 100, b: 100 })).toBeCloseTo(
      0.12744,
      5,
    );
  });
});
