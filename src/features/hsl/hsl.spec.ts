import type { HEX } from '@features/hex/hex.type';
import { describe, expect, it } from 'vitest';
import {
  compareHEXColorsViaHSL,
  getHEXfromHSL,
  getHSLfromHEX,
  isHSLColor,
} from './hsl';

describe('HSL utilities', () => {
  describe('getHSLfromHEX', () => {
    it('should convert red hex to HSL', () => {
      const result = getHSLfromHEX('#FF0000' as HEX);
      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(100);
      expect(result[2]).toBeCloseTo(50);
    });

    it('should convert green hex to HSL', () => {
      const result = getHSLfromHEX('#00FF00' as HEX);
      expect(result[0]).toBeCloseTo(120);
      expect(result[1]).toBeCloseTo(100);
      expect(result[2]).toBeCloseTo(50);
    });

    it('should convert blue hex to HSL', () => {
      const result = getHSLfromHEX('#0000FF' as HEX);
      expect(result[0]).toBeCloseTo(240);
      expect(result[1]).toBeCloseTo(100);
      expect(result[2]).toBeCloseTo(50);
    });

    it('should convert white hex to HSL', () => {
      const result = getHSLfromHEX('#FFFFFF' as HEX);
      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(0);
      expect(result[2]).toBeCloseTo(100);
    });

    it('should convert black hex to HSL', () => {
      const result = getHSLfromHEX('#000000' as HEX);
      expect(result[0]).toBeCloseTo(0);
      expect(result[1]).toBeCloseTo(0);
      expect(result[2]).toBeCloseTo(0);
    });

    it('should handle yellow hex to HSL', () => {
      const result = getHSLfromHEX('#FFFF00' as HEX);
      expect(result[0]).toBeCloseTo(60);
      expect(result[1]).toBeCloseTo(100);
      expect(result[2]).toBeCloseTo(50);
    });

    it('should handle cyan hex to HSL', () => {
      const result = getHSLfromHEX('#00FFFF' as HEX);
      expect(result[0]).toBeCloseTo(180);
      expect(result[1]).toBeCloseTo(100);
      expect(result[2]).toBeCloseTo(50);
    });

    it('should handle magenta hex to HSL', () => {
      const result = getHSLfromHEX('#FF00FF' as HEX);
      expect(result[0]).toBeCloseTo(300);
      expect(result[1]).toBeCloseTo(100);
      expect(result[2]).toBeCloseTo(50);
    });
  });

  describe('getHEXfromHSL', () => {
    it('should convert red HSL to hex', () => {
      const result = getHEXfromHSL(0, 100, 50);
      expect(result).toBe('#ff0000');
    });

    it('should convert green HSL to hex', () => {
      const result = getHEXfromHSL(120, 100, 50);
      expect(result).toBe('#00ff00');
    });

    it('should convert blue HSL to hex', () => {
      const result = getHEXfromHSL(240, 100, 50);
      expect(result).toBe('#0000ff');
    });

    it('should convert white HSL to hex', () => {
      const result = getHEXfromHSL(0, 0, 100);
      expect(result).toBe('#ffffff');
    });

    it('should convert black HSL to hex', () => {
      const result = getHEXfromHSL(0, 0, 0);
      expect(result).toBe('#000000');
    });

    it('should handle edge cases in getHSLfromHEX', () => {
      expect(getHSLfromHEX('#808080' as HEX)).toEqual([
        0, 0, 50.19607843137255,
      ]);
      expect(getHSLfromHEX('#FFFFFF' as HEX)).toEqual([0, 0, 100]);
    });

    it('should convert yellow HSL to hex', () => {
      const result = getHEXfromHSL(60, 100, 50);
      expect(result).toBe('#ffff00');
    });

    it('should convert cyan HSL to hex', () => {
      const result = getHEXfromHSL(180, 100, 50);
      expect(result).toBe('#00ffff');
    });

    it('should convert magenta HSL to hex', () => {
      const result = getHEXfromHSL(300, 100, 50);
      expect(result).toBe('#ff00ff');
    });

    it('should handle edge cases in getHEXfromHSL', () => {
      expect(getHEXfromHSL(360, 100, 50)).toBe('#ff0000');
      expect(getHEXfromHSL(0, 0, 50)).toBe('#808080');
    });
  });

  describe('isHSLColor', () => {
    it('should return true for valid HSL colors', () => {
      expect(isHSLColor('hsl(0, 100%, 50%)')).toBe(true);
      expect(isHSLColor('hsl(120, 100%, 50%)')).toBe(true);
      expect(isHSLColor('hsl(240, 100%, 50%)')).toBe(true);
      expect(isHSLColor('hsl(0, 0%, 100%)')).toBe(true);
      expect(isHSLColor('hsl(0, 0%, 0%)')).toBe(true);
    });

    it('should return false for invalid HSL colors', () => {
      expect(isHSLColor('rgb(255, 0, 0)')).toBe(false);
      expect(isHSLColor('#FF0000')).toBe(false);
      expect(isHSLColor('hsl(370, 100%, 50%)')).toBe(false);
      expect(isHSLColor('hsl(120, 150%, 50%)')).toBe(false);
      expect(isHSLColor('hsl(240, 100%, 150%)')).toBe(false);
      expect(isHSLColor('not a color')).toBe(false);
    });

    it('should return true for edge case HSL values', () => {
      expect(isHSLColor('hsl(360, 100%, 100%)')).toBe(true);
      expect(isHSLColor('hsl(0, 0%, 0%)')).toBe(true);
    });

    it('should return false for HSL values out of range', () => {
      expect(isHSLColor('hsl(361, 100%, 100%)')).toBe(false);
      expect(isHSLColor('hsl(-1, 100%, 100%)')).toBe(false);
      expect(isHSLColor('hsl(0, 101%, 100%)')).toBe(false);
      expect(isHSLColor('hsl(0, 100%, 101%)')).toBe(false);
    });
  });

  describe('compareHEXColorsViaHSL', () => {
    it('should return true for identical colors', () => {
      expect(compareHEXColorsViaHSL('#FF0000' as HEX, '#FF0000' as HEX)).toBe(
        true,
      );
    });

    it('should return true for similar colors within tolerance', () => {
      expect(compareHEXColorsViaHSL('#FF0000' as HEX, '#FF1010' as HEX)).toBe(
        true,
      );
    });

    it('should return false for different colors outside tolerance', () => {
      expect(compareHEXColorsViaHSL('#FF0000' as HEX, '#00FF00' as HEX)).toBe(
        false,
      );
    });

    it('should handle hue wrap-around', () => {
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#FF00FF' as HEX, 10),
      ).toBe(false);
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#FF00FF' as HEX, 20),
      ).toBe(false);
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#FF00FF' as HEX, 30),
      ).toBe(true);
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#FF00FF' as HEX, 60),
      ).toBe(true);
    });

    it('should use custom tolerance', () => {
      expect(compareHEXColorsViaHSL('#FF0000' as HEX, '#FF3030' as HEX)).toBe(
        true,
      );
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#FF3030' as HEX, 40),
      ).toBe(true);
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#FF3030' as HEX, 5),
      ).toBe(false);
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#FF5050' as HEX, 50),
      ).toBe(true);
    });

    it('should handle edge cases', () => {
      expect(compareHEXColorsViaHSL('#FFFFFF' as HEX, '#000000' as HEX)).toBe(
        false,
      );
      expect(compareHEXColorsViaHSL('#FF0000' as HEX, '#800000' as HEX)).toBe(
        false,
      );
      expect(compareHEXColorsViaHSL('#FF0000' as HEX, '#FF8080' as HEX)).toBe(
        false,
      );
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#800000' as HEX, 30),
      ).toBe(true);
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#FF8080' as HEX, 30),
      ).toBe(true);
    });

    it('should return true for colors with large hue difference but small s/l difference', () => {
      expect(
        compareHEXColorsViaHSL('#FF0000' as HEX, '#00FF00' as HEX, 100),
      ).toBe(true);
    });
  });
});
