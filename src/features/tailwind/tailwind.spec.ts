import { describe, expect, it } from 'vitest';
import {
  exportThemeToCSS,
  generateTheme,
  memoizedGenerateTheme,
} from './tailwind';
import type { ColorSet, GenerateThemeOptions } from './tailwind.type';
import { generateColorSet, generateExpandedColorSet } from './tailwind.utils';

describe('tailwind', () => {
  describe('generateTheme', () => {
    it('should generate a valid ColorTheme', () => {
      const options: GenerateThemeOptions = {
        baseColor: '#3498db',
      };
      const theme = generateTheme(options);

      expect(theme).toBeDefined();
      expect(theme.primary).toBeDefined();
      expect(theme.secondary).toBeDefined();
      expect(theme.accent).toBeDefined();
      expect(theme.neutral).toBeDefined();
      expect(theme.info).toBeDefined();
      expect(theme.success).toBeDefined();
      expect(theme.warning).toBeDefined();
      expect(theme.error).toBeDefined();
      expect(theme.schemeColors).toHaveLength(5);
    });

    it('should use expandPalette when set to true', () => {
      const options: GenerateThemeOptions<true> = {
        baseColor: '#3498db',
        expandPalette: true,
      };
      const theme = generateTheme(options);

      if ('palette' in theme.primary) {
        expect(theme.primary.palette[50]).toBeDefined();
        expect(theme.primary.palette[900]).toBeDefined();
      } else {
        throw new Error(
          'Expected expanded color set, but got regular color set',
        );
      }
    });

    it('should use regular ColorSet when expandPalette is false', () => {
      const options: GenerateThemeOptions = {
        baseColor: '#3498db',
        expandPalette: false,
      };
      const theme = generateTheme(options);

      expect(theme.primary.DEFAULT).toBeDefined();
      expect(theme.primary.light).toBeDefined();
      expect(theme.primary.dark).toBeDefined();
      expect('50' in theme.primary).toBe(false);
    });

    it('should use custom hues when provided', () => {
      const options: GenerateThemeOptions = {
        baseColor: '#3498db',
        infoHue: 180,
        successHue: 90,
        warningHue: 30,
        errorHue: 350,
      };
      const theme = generateTheme(options);

      expect(theme.info).toBeDefined();
      expect(theme.success).toBeDefined();
      expect(theme.warning).toBeDefined();
      expect(theme.error).toBeDefined();
    });

    it('should generate different themes for different color schemes', () => {
      const baseOptions: GenerateThemeOptions = {
        baseColor: '#3498db',
      };
      const complementaryTheme = generateTheme(baseOptions);
      const analogousTheme = generateTheme({
        ...baseOptions,
        colorScheme: 'analogous',
      });
      const triadicTheme = generateTheme({
        ...baseOptions,
        colorScheme: 'triadic',
      });

      expect(complementaryTheme.schemeColors).not.toEqual(
        analogousTheme.schemeColors,
      );
      expect(complementaryTheme.schemeColors).not.toEqual(
        triadicTheme.schemeColors,
      );
      expect(analogousTheme.schemeColors).not.toEqual(
        triadicTheme.schemeColors,
      );
    });
  });

  describe('memoizedGenerateTheme', () => {
    it('should return the same result for the same input', () => {
      const options: GenerateThemeOptions = {
        baseColor: '#3498db',
      };
      const result1 = memoizedGenerateTheme(options);
      const result2 = memoizedGenerateTheme(options);

      expect(result1).toBe(result2);
    });

    it('should return different results for different inputs', () => {
      const options1: GenerateThemeOptions = {
        baseColor: '#3498db',
      };
      const options2: GenerateThemeOptions = {
        baseColor: '#e74c3c',
      };
      const result1 = memoizedGenerateTheme(options1);
      const result2 = memoizedGenerateTheme(options2);

      expect(result1).not.toBe(result2);
    });
  });

  describe('exportThemeToCSS', () => {
    it('should generate CSS variables', () => {
      const theme = generateTheme({ baseColor: '#3498db' });
      console.log(theme);
      const css = exportThemeToCSS(theme);

      expect(css).toContain('--color-primary-default:');
      expect(css).toContain('--color-secondary-light:');
      expect(css).toContain('--color-accent-dark:');
      expect(css).not.toContain(':root {');
    });

    it('should include :root when withRoot is true', () => {
      const theme = generateTheme({ baseColor: '#3498db' });
      const css = exportThemeToCSS(theme, true);

      expect(css).toContain(':root {');
      expect(css).toContain('}');
    });

    it('should include color names in comments', () => {
      const theme = generateTheme({ baseColor: '#3498db' });
      const css = exportThemeToCSS(theme);

      expect(css).toMatch(/\/\* .+ \*\//);
    });
  });

  describe('tailwind utilities', () => {
    describe('generateColorSet', () => {
      it('should generate a valid ColorSet from a base color', () => {
        const baseColor = '#3498db';
        const colorSet = generateColorSet(baseColor);

        expect(colorSet).toBeDefined();
        expect(colorSet.DEFAULT).toBe(baseColor);
        expect(colorSet.light).toBeDefined();
        expect(colorSet.dark).toBeDefined();
        expect(colorSet.contrastText).toBeDefined();
        expect(colorSet.contrastTextLarge).toBeDefined();
        expect(colorSet.uiContrast).toBeDefined();
        expect(colorSet.active).toBeDefined();
        expect(colorSet.clarity).toBeDefined();
        expect(colorSet.tone).toMatch(/^(light|dark)$/);
        expect(colorSet.inverse).toBeDefined();
      });

      it('should generate appropriate light and dark shades', () => {
        const baseColor = '#3498db';
        const colorSet = generateColorSet(baseColor);

        expect(colorSet.light).not.toBe(baseColor);
        expect(colorSet.dark).not.toBe(baseColor);
        expect(colorSet.light).not.toBe(colorSet.dark);
      });

      it('should handle edge cases (very light color)', () => {
        const baseColor = '#ffffff';
        const colorSet = generateColorSet(baseColor);

        expect(colorSet.DEFAULT).toBe(baseColor);
        expect(colorSet.light).toBe(baseColor);
        expect(colorSet.dark).not.toBe(baseColor);
        expect(colorSet.tone).toBe('dark');
      });

      it('should handle edge cases (very dark color)', () => {
        const baseColor = '#000000';
        const colorSet = generateColorSet(baseColor);

        expect(colorSet.DEFAULT).toBe(baseColor);
        expect(colorSet.light).not.toBe(baseColor);
        expect(colorSet.dark).toBe(baseColor);
        expect(colorSet.tone).toBe('light');
      });
    });

    describe('generateExpandedColorSet', () => {
      it('should generate a valid ExpandedColorSet from a base color', () => {
        const baseColor = '#3498db';
        const expandedColorSet = generateExpandedColorSet(baseColor);

        expect(expandedColorSet).toBeDefined();
        expect(expandedColorSet.DEFAULT).toBe(baseColor);
        expect(expandedColorSet.palette[50]).toBeDefined();
        expect(expandedColorSet.palette[100]).toBeDefined();
        expect(expandedColorSet.palette[200]).toBeDefined();
        expect(expandedColorSet.palette[300]).toBeDefined();
        expect(expandedColorSet.palette[400]).toBeDefined();
        expect(expandedColorSet.palette[500]).toBe(baseColor);
        expect(expandedColorSet.palette[600]).toBeDefined();
        expect(expandedColorSet.palette[700]).toBeDefined();
        expect(expandedColorSet.palette[800]).toBeDefined();
        expect(expandedColorSet.palette[900]).toBeDefined();
      });

      it('should include all properties from ColorSet', () => {
        const baseColor = '#3498db';
        const expandedColorSet = generateExpandedColorSet(baseColor);
        const colorSet = generateColorSet(baseColor);

        for (const key of Object.keys(colorSet) as (keyof ColorSet)[]) {
          expect(expandedColorSet[key]).toBeDefined();
          expect(expandedColorSet[key]).toBe(colorSet[key]);
        }
      });

      it('should generate a gradual scale of shades', () => {
        const baseColor = '#3498db';
        const expandedColorSet = generateExpandedColorSet(baseColor);

        const shades = [
          50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
        ] as const;
        for (let i = 0; i < shades.length - 1; i++) {
          // @ts-ignore
          const currentShade = expandedColorSet.palette[shades[i]];
          // @ts-ignore
          const nextShade = expandedColorSet.palette[shades[i + 1]];
          expect(currentShade).not.toBe(nextShade);
        }
      });
    });
  });
});
