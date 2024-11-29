import { generateColorScheme } from '@features/colorScheme/colorScheme';
import { getColorNameFromHex } from '@features/colorname/colorname';
import type {
  ColorSet,
  ColorTheme,
  ExpandedColorSet,
  ExpandedColorTheme,
  GenerateThemeOptions,
  RegularColorTheme,
  ThemeType,
} from './tailwind.type';
import {
  generateColorSet,
  generateExpandedColorSet,
  getErrorColor,
  getInfoColor,
  getSuccessColor,
  getWarningColor,
} from './tailwind.utils';

/**
 * Generates a color theme based on the provided options
 *
 * @template T - Boolean type parameter that determines if the theme palette should be expanded
 * @param {GenerateThemeOptions<T>} options - The options for generating the theme
 * @param {HEX} options.baseColor - The base color to generate the theme from
 * @param {T} [options.expandPalette=false] - Whether to generate an expanded palette with additional shades
 * @param {ColorSchemeType} [options.colorScheme='complementary'] - The type of color scheme to generate
 * @param {number} [options.infoHue=200] - The hue value for info colors
 * @param {number} [options.successHue=120] - The hue value for success colors
 * @param {number} [options.warningHue=40] - The hue value for warning colors
 * @param {number} [options.errorHue=0] - The hue value for error colors
 * @returns {ThemeType<T>} A complete color theme with all color variations
 *
 * @example
 * // Generate a regular theme
 * const regularTheme = generateTheme({
 *   baseColor: '#3498db'
 * });
 *
 * console.log(regularTheme.brand.active);
 * // Please check ColorSet type for more information
 *
 * // Generate an expanded theme
 * const expandedTheme = generateTheme({
 *   baseColor: '#3498db',
 *   expandPalette: true,
 *   colorScheme: 'analogous'
 * });
 *
 * console.log(expandedTheme.brand.palette[500]);
 * // Please check ExpandedColorSet type for more information
 */
export function generateTheme<T extends boolean = false>({
  baseColor,
  expandPalette = false as T,
  colorScheme = 'complementary',
  infoHue = 200,
  successHue = 120,
  warningHue = 40,
  errorHue = 0,
}: GenerateThemeOptions<T>): ThemeType<T> {
  const { colors, areas } = generateColorScheme(baseColor, colorScheme);

  if (expandPalette) {
    const theme: ExpandedColorTheme = {
      brand: generateExpandedColorSet(baseColor),
      primary: generateExpandedColorSet(areas.primary),
      secondary: generateExpandedColorSet(areas.secondary),
      accent: generateExpandedColorSet(areas.accent),
      neutral: generateExpandedColorSet(areas.neutral),
      info: generateExpandedColorSet(getInfoColor(baseColor, infoHue)),
      success: generateExpandedColorSet(getSuccessColor(baseColor, successHue)),
      warning: generateExpandedColorSet(getWarningColor(baseColor, warningHue)),
      error: generateExpandedColorSet(getErrorColor(baseColor, errorHue)),
      schemeColors: colors,
    };
    return theme as ThemeType<T>;
  }

  const theme: RegularColorTheme = {
    brand: generateColorSet(baseColor),
    primary: generateColorSet(areas.primary),
    secondary: generateColorSet(areas.secondary),
    accent: generateColorSet(areas.accent),
    neutral: generateColorSet(areas.neutral),
    info: generateColorSet(getInfoColor(baseColor, infoHue)),
    success: generateColorSet(getSuccessColor(baseColor, successHue)),
    warning: generateColorSet(getWarningColor(baseColor, warningHue)),
    error: generateColorSet(getErrorColor(baseColor, errorHue)),
    schemeColors: colors,
  };
  return theme as ThemeType<T>;
}

/**
 * Memoized version of generateTheme to improve performance for repeated calls with the same options.
 *
 * @param {GenerateThemeOptions} options - The options for generating the theme.
 * @returns {ColorTheme} The generated theme.
 *
 * @example
 * const memoizedGenerateTheme = memoizedGenerateTheme();
 * const theme1 = memoizedGenerateTheme({ baseColor: '#ff0000', expandPalette: true });
 * const theme2 = memoizedGenerateTheme({ baseColor: '#ff0000', expandPalette: true });
 * console.log(theme1 === theme2); // true
 */
export const memoizedGenerateTheme = (() => {
  const cache = new Map<string, ColorTheme>();
  return (options: GenerateThemeOptions): ColorTheme => {
    const key = JSON.stringify(options);
    if (cache.has(key)) {
      return cache.get(key) as ColorTheme;
    }
    const result = generateTheme(options);
    cache.set(key, result);
    return result;
  };
})();

/**
 * Exports the theme to CSS Variables on the root element
 *
 * @param {ColorTheme} theme - The theme to export
 * @returns {string[]} The CSS code for the theme
 *
 * @example
 * const theme = generateTheme({ baseColor: '#ff0000', expandPalette: true });
 * exportThemeToCSSVariablesOnly(theme);
 * // returns ['--color-primary-500: #ff0000;']
 */
export function exportThemeToCSSVariablesOnly(theme: ColorTheme): string[] {
  const cssVariables: string[] = [];

  const processColorSet = (
    key: string,
    colorSet: ColorSet | ExpandedColorSet,
  ) => {
    for (const [shade, color] of Object.entries(colorSet)) {
      if (typeof color === 'string' && shade !== 'tone') {
        try {
          const colorName = getColorNameFromHex({ hexCode: color });
          cssVariables.push(
            `--color-${key}-${shade.toLowerCase()}: ${color}; /* ${colorName.colorName} */`,
          );
        } catch (error) {
          cssVariables.push(`--color-${key}-${shade.toLowerCase()}: ${color};`);
        }
      }
    }
  };

  for (const [key, value] of Object.entries(theme)) {
    if (key !== 'schemeColors') {
      processColorSet(key, value as ColorSet | ExpandedColorSet);
    }
  }

  return cssVariables;
}

/**
 * Exports the theme to CSS Variables on the root element
 *
 * @param {ColorTheme} theme - The theme to export
 * @returns {string} The CSS code for the theme
 *
 * @example
 * const theme = generateTheme({ baseColor: '#ff0000', expandPalette: true });
 * exportThemeToCSS(theme);
 * // returns ':root { --color-primary-500: #ff0000; }'
 */
export function exportThemeToCSS(theme: ColorTheme): string {
  let css = ':root {\n';
  css += exportThemeToCSSVariablesOnly(theme).join('  ');
  css += '}';
  return css;
}
