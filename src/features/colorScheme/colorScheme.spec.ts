import { getContrastRatioWCAG20 } from '@features/hacks/hacks';
import type { HEX } from '@features/hex/hex.type';
import { getHSLfromHEX } from '@features/hsl/hsl';
import { describe, expect, it } from 'vitest';
import {
  ensureContrast,
  generateAnalogousScheme,
  generateColorScheme,
  generateComplementaryScheme,
  generateMonochromaticScheme,
  generateTetradicScheme,
  generateTriadicScheme,
} from './colorScheme';
import type { ColorSchemeType } from './colorScheme.type';

describe('Color Scheme', () => {
  const baseColor: HEX = '#ff0000';

  describe('generateMonochromaticScheme', () => {
    it('should generate 5 colors', () => {
      const scheme = generateMonochromaticScheme(baseColor);
      expect(scheme).toHaveLength(5);
      expect(scheme).toContain(baseColor);
    });

    it('should generate 5 colors', () => {
      const baseColor = '#ff0000';
      const scheme = generateMonochromaticScheme(baseColor);
      expect(scheme).toHaveLength(5);
      expect(scheme).toContain(baseColor);
    });

    it('should maintain the same hue and saturation for all colors', () => {
      const baseColor = '#3366cc';
      const scheme = generateMonochromaticScheme(baseColor);
      const [baseHue, baseSaturation] = getHSLfromHEX(baseColor);

      for (const color of scheme) {
        const [hue, saturation] = getHSLfromHEX(color);
        expect(Math.abs(hue - baseHue)).toBeLessThan(1);
        expect(Math.abs(saturation - baseSaturation)).toBeLessThan(1);
      }
    });

    it('should generate colors with varying lightness', () => {
      const baseColor = '#00ff00';
      const scheme = generateMonochromaticScheme(baseColor);
      const lightnesses = scheme.map((color) => getHSLfromHEX(color)[2]);

      expect(lightnesses).toHaveLength(5);
      expect(Math.min(...lightnesses)).toBeLessThan(50);
      expect(Math.max(...lightnesses)).toBeGreaterThan(50);
    });
  });

  describe('generateAnalogousScheme', () => {
    it('should generate 3 colors', () => {
      const scheme = generateAnalogousScheme(baseColor);
      expect(scheme).toHaveLength(3);
      expect(scheme).toContain(baseColor);
    });
  });

  describe('generateComplementaryScheme', () => {
    it('should generate 2 colors', () => {
      const scheme = generateComplementaryScheme(baseColor);
      expect(scheme).toHaveLength(2);
      expect(scheme).toContain(baseColor);
    });
  });

  describe('generateTriadicScheme', () => {
    it('should generate 3 colors', () => {
      const scheme = generateTriadicScheme(baseColor);
      expect(scheme).toHaveLength(3);
      expect(scheme).toContain(baseColor);
    });
  });

  describe('generateTetradicScheme', () => {
    it('should generate 4 colors', () => {
      const scheme = generateTetradicScheme(baseColor);
      expect(scheme).toHaveLength(4);
      expect(scheme).toContain(baseColor);
    });
  });

  describe('generateColorScheme', () => {
    it('should generate a valid color scheme for each type', () => {
      const schemeTypes = [
        'monochromatic',
        'analogous',
        'complementary',
        'triadic',
        'tetradic',
      ] as const;

      for (const schemeType of schemeTypes) {
        const scheme = generateColorScheme(baseColor, schemeType);
        expect(scheme.colors).toHaveLength(5);
        expect(scheme.areas).toHaveProperty('primary', baseColor);
        expect(scheme.areas).toHaveProperty('secondary');
        expect(scheme.areas).toHaveProperty('accent');
        expect(scheme.areas).toHaveProperty('neutral');
      }
    });

    it('should throw an error for invalid scheme type', () => {
      // @ts-expect-error Testing invalid input
      expect(() => generateColorScheme(baseColor, 'invalid')).toThrow(
        'Invalid color scheme type',
      );
    });

    const schemeTypes: ColorSchemeType[] = [
      'monochromatic',
      'analogous',
      'complementary',
      'triadic',
      'tetradic',
    ];
    const baseColors: HEX[] = [
      '#ff0000',
      '#00ff00',
      '#0000ff',
      '#ffff00',
      '#00ffff',
      '#ff00ff',
    ];

    it.each(schemeTypes)(
      'should generate a valid %s color scheme with sufficient contrast',
      (schemeType) => {
        for (const baseColor of baseColors) {
          const scheme = generateColorScheme(baseColor, schemeType);

          expect(scheme.colors).toHaveLength(5);
          expect(scheme.areas).toHaveProperty('primary', baseColor);
          expect(scheme.areas).toHaveProperty('secondary');
          expect(scheme.areas).toHaveProperty('accent');
          expect(scheme.areas).toHaveProperty('neutral');

          // Check contrast ratios
          const secondaryContrast = getContrastRatioWCAG20(
            baseColor,
            scheme.areas.secondary,
          );
          const accentContrast = getContrastRatioWCAG20(
            baseColor,
            scheme.areas.accent,
          );
          const neutralContrast = getContrastRatioWCAG20(
            baseColor,
            scheme.areas.neutral,
          );

          expect(secondaryContrast).toBeGreaterThanOrEqual(4.5);
          expect(accentContrast).toBeGreaterThanOrEqual(4.5);
          expect(neutralContrast).toBeGreaterThanOrEqual(4.5);
        }
      },
    );

    it('should handle edge case of pure blue (#0000ff) correctly', () => {
      const blueSchemes = schemeTypes.map((type) =>
        generateColorScheme('#0000ff', type),
      );

      for (const scheme of blueSchemes) {
        const secondaryContrast = getContrastRatioWCAG20(
          '#0000ff',
          scheme.areas.secondary,
        );
        const accentContrast = getContrastRatioWCAG20(
          '#0000ff',
          scheme.areas.accent,
        );
        const neutralContrast = getContrastRatioWCAG20(
          '#0000ff',
          scheme.areas.neutral,
        );

        expect(secondaryContrast).toBeGreaterThanOrEqual(4.5);
        expect(accentContrast).toBeGreaterThanOrEqual(4.5);
        expect(neutralContrast).toBeGreaterThanOrEqual(4.5);
      }
    });

    it('should throw an error for invalid scheme type', () => {
      // @ts-expect-error Testing invalid input
      expect(() => generateColorScheme('#ff0000', 'invalid')).toThrow(
        'Invalid color scheme type',
      );
    });
  });

  describe('ensureContrast', () => {
    const testCases = [
      { bg: '#ffffff', fg: '#777777', min: 4.5 },
      { bg: '#ff0000', fg: '#0000ff', min: 3 },
      { bg: '#ffffff', fg: '#ffffff', min: 4.5 },
      { bg: '#000000', fg: '#000000', min: 4.5 },
      { bg: '#808080', fg: '#808080', min: 4.5 },
      { bg: '#ff8800', fg: '#0088ff', min: 4.5 },
    ];

    for (const { bg, fg, min } of testCases) {
      it(`should ensure contrast ratio of ${min} between ${bg} and ${fg}`, () => {
        const contrastedColor = ensureContrast(bg as HEX, fg as HEX, min);
        const actualContrast = getContrastRatioWCAG20(bg, contrastedColor);
        expect(actualContrast).toBeGreaterThanOrEqual(min);
        if (actualContrast > min) {
          expect(contrastedColor).not.toBe(fg);
        } else {
          expect(contrastedColor).toBe(fg);
        }
      });
    }

    it('should set lightness to 100 when background is dark and contrast is not achieved', () => {
      const bg = '#000000';
      const fg = '#010101';
      const min = 21; // An unreachable contrast ratio
      const contrastedColor = ensureContrast(bg as HEX, fg as HEX, min);
      expect(contrastedColor).toBe('#ffffff');
    });

    it('should set lightness to 0 when background is light and contrast is not achieved', () => {
      const bg = '#ffffff';
      const fg = '#fefefe';
      const min = 21; // An unreachable contrast ratio
      const contrastedColor = ensureContrast(bg as HEX, fg as HEX, min);
      expect(contrastedColor).toBe('#000000');
    });

    it('should adjust hue when maximum lightness adjustment does not achieve desired contrast', () => {
      const bg = '#808080';
      const fg = '#818181';
      const min = 21; // An unreachable contrast ratio
      const contrastedColor = ensureContrast(bg as HEX, fg as HEX, min);

      // Check that the contrast has been improved
      const initialContrast = getContrastRatioWCAG20(bg, fg);
      const finalContrast = getContrastRatioWCAG20(bg, contrastedColor);
      expect(finalContrast).toBeGreaterThan(initialContrast);

      // Check that the color has changed
      expect(contrastedColor).not.toBe(fg);

      // Check that the contrast is at least as good as with pure black or white
      const blackContrast = getContrastRatioWCAG20(bg, '#000000');
      const whiteContrast = getContrastRatioWCAG20(bg, '#ffffff');
      expect(finalContrast).toBeGreaterThanOrEqual(
        Math.max(blackContrast, whiteContrast),
      );
    });

    it('should use fallback contrast adjustment when ensureContrast fails', () => {
      const baseColor: HEX = '#808080'; // Medium gray
      const scheme = generateColorScheme(baseColor, 'monochromatic');

      // Check if the secondary color has been adjusted
      const secondaryContrast = getContrastRatioWCAG20(
        baseColor,
        scheme.areas.secondary,
      );
      expect(secondaryContrast).toBeGreaterThanOrEqual(4.5);

      // The adjusted color should be either very dark or very light
      const [, , l] = getHSLfromHEX(scheme.areas.secondary);
      expect(l).to.satisfy((value: number) => value <= 10 || value >= 90);

      // Repeat for accent color
      const accentContrast = getContrastRatioWCAG20(
        baseColor,
        scheme.areas.accent,
      );
      expect(accentContrast).toBeGreaterThanOrEqual(4.5);

      const [, , accentL] = getHSLfromHEX(scheme.areas.accent);
      expect(accentL).to.satisfy((value: number) => value <= 10 || value >= 90);
    });
  });
});
