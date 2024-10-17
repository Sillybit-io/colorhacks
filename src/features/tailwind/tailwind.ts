import { generateColorScheme } from '@features/colorScheme/colorScheme';
import { getColorNameFromHex } from '@features/colorname/colorname';
import { getHEXfromHSL, getHSLfromHEX } from '@features/hsl/hsl';
import type {
  ColorSet,
  ColorTheme,
  ExpandedColorSet,
  ExpandedColorTheme,
  GenerateThemeOptions,
  RegularColorTheme,
} from './tailwind.type';
import { generateColorSet, generateExpandedColorSet } from './tailwind.utils';

/**
 * Generates a theme based on the given options.
 *
 * @param {GenerateThemeOptions} options - The options for generating the theme.
 * @returns {RegularColorTheme | ExpandedColorTheme} The generated theme.
 *
 * @example
 * const theme = generateTheme({
 *   baseColor: '#ff0000',
 *   expandPalette: true,
 *   colorScheme: 'complementary',
 *   infoHue: 200,
 *   successHue: 120,
 *   warningHue: 40,
 *   errorHue: 0
 * });
 */
export function generateTheme({
  baseColor,
  expandPalette = false,
  colorScheme = 'complementary',
  infoHue = 200,
  successHue = 120,
  warningHue = 40,
  errorHue = 0,
}: GenerateThemeOptions): RegularColorTheme | ExpandedColorTheme {
  const { colors, areas } = generateColorScheme(baseColor, colorScheme);
  const [baseH] = getHSLfromHEX(baseColor);

  if (expandPalette) {
    const theme: ExpandedColorTheme = {
      brand: generateExpandedColorSet(baseColor),
      primary: generateExpandedColorSet(areas.primary),
      secondary: generateExpandedColorSet(areas.secondary),
      accent: generateExpandedColorSet(areas.accent),
      neutral: generateExpandedColorSet(areas.neutral),
      info: generateExpandedColorSet(
        getHEXfromHSL((baseH + infoHue) % 360, 70, 50),
      ),
      success: generateExpandedColorSet(
        getHEXfromHSL((baseH + successHue) % 360, 70, 50),
      ),
      warning: generateExpandedColorSet(
        getHEXfromHSL((baseH + warningHue) % 360, 70, 50),
      ),
      error: generateExpandedColorSet(
        getHEXfromHSL((baseH + errorHue) % 360, 70, 50),
      ),
      schemeColors: colors,
    };
    return theme;
  }

  const theme: RegularColorTheme = {
    brand: generateColorSet(baseColor),
    primary: generateColorSet(areas.primary),
    secondary: generateColorSet(areas.secondary),
    accent: generateColorSet(areas.accent),
    neutral: generateColorSet(areas.neutral),
    info: generateColorSet(getHEXfromHSL((baseH + infoHue) % 360, 70, 50)),
    success: generateColorSet(
      getHEXfromHSL((baseH + successHue) % 360, 70, 50),
    ),
    warning: generateColorSet(
      getHEXfromHSL((baseH + warningHue) % 360, 70, 50),
    ),
    error: generateColorSet(getHEXfromHSL((baseH + errorHue) % 360, 70, 50)),
    schemeColors: colors,
  };
  return theme;
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
 * Exports the theme to CSS.
 *
 * @param {ColorTheme} theme - The theme to export.
 * @param {boolean} withRoot - Whether to include the root selector.
 * @returns {string} The CSS for the theme.
 *
 * @example
 * const theme = generateTheme({ baseColor: '#ff0000', expandPalette: true });
 * exportThemeToCSS(theme);
 * // returns '--color-primary-500: #ff0000;'
 */
export function exportThemeToCSS(theme: ColorTheme, withRoot = false): string {
  let css = withRoot ? ':root {\n' : '';

  const processColorSet = (
    key: string,
    colorSet: ColorSet | ExpandedColorSet,
  ) => {
    for (const [shade, color] of Object.entries(colorSet)) {
      if (typeof color === 'string' && shade !== 'tone') {
        try {
          const colorName = getColorNameFromHex({ hexCode: color });
          css += `  --color-${key}-${shade.toLowerCase()}: ${color}; /* ${colorName} */\n`;
        } catch (error) {
          css += `  --color-${key}-${shade.toLowerCase()}: ${color};\n`;
        }
      }
    }
  };

  for (const [key, value] of Object.entries(theme)) {
    if (key !== 'schemeColors') {
      processColorSet(key, value as ColorSet | ExpandedColorSet);
    }
  }

  css += withRoot ? '}' : '';
  return css;
}
