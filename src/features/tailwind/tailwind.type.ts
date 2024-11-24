import type { ColorSchemeType } from '@features/colorScheme/colorScheme.type';
import type { HEX } from '@features/hex/hex.type';

/**
 * A theme type that varies based on the expandPalette boolean parameter
 *
 * @template T - Boolean type parameter that determines if the theme is expanded
 * @returns {ExpandedColorTheme | RegularColorTheme} Returns ExpandedColorTheme if T is true, otherwise RegularColorTheme
 *
 * @example
 * // Regular theme
 * type RegularTheme = ThemeType<false>;
 *
 * // Expanded theme
 * type ExpandedTheme = ThemeType<true>;
 */
export type ThemeType<T extends boolean> = T extends true
  ? ExpandedColorTheme
  : RegularColorTheme;

/**
 * Options for generating a color theme
 *
 * @template T - Boolean type parameter that determines if the theme palette should be expanded
 * @property {HEX} baseColor - The base color to generate the theme from
 * @property {T} [expandPalette] - Whether to generate an expanded palette with additional shades
 * @property {ColorSchemeType} [colorScheme='complementary'] - The type of color scheme to generate
 * @property {number} [infoHue=200] - The hue value for info colors
 * @property {number} [successHue=120] - The hue value for success colors
 * @property {number} [warningHue=40] - The hue value for warning colors
 * @property {number} [errorHue=0] - The hue value for error colors
 *
 * @example
 * const options: GenerateThemeOptions = {
 *   baseColor: '#ff0000',
 *   expandPalette: true,
 *   colorScheme: 'complementary',
 *   infoHue: 200,
 *   successHue: 120,
 *   warningHue: 40,
 *   errorHue: 0
 * };
 */
export interface GenerateThemeOptions<T extends boolean = false> {
  baseColor: HEX;
  expandPalette?: T;
  colorScheme?: ColorSchemeType;
  infoHue?: number;
  successHue?: number;
  warningHue?: number;
  errorHue?: number;
}

/**
 * A set of colors with different shades
 * @property DEFAULT - The default color
 * @property light - The light color
 * @property dark - The dark color
 * @property contrastText - The contrast text color
 * @property contrastTextLarge - The contrast text color for large text
 * @property uiContrast - The contrast color for UI elements
 * @property active - The active color
 * @property clarity - The clarity of the color
 * @property tone - The tone of the color
 * @property inverse - The inverse color
 */
export interface ColorSet {
  DEFAULT: HEX;
  light: HEX;
  dark: HEX;
  contrastText: HEX;
  contrastTextLarge: HEX;
  uiContrast: HEX;
  active: HEX;
  clarity: string;
  tone: 'light' | 'dark';
  inverse: HEX;
}

/**
 * An expanded color set with shades from 50 to 900
 * @property 50 - The 50 shade
 * @property 100 - The 100 shade
 * @property 200 - The 200 shade
 * @property 300 - The 300 shade
 * @property 400 - The 400 shade
 * @property 500 - The 500 shade
 * @property 600 - The 600 shade
 * @property 700 - The 700 shade
 * @property 800 - The 800 shade
 * @property 900 - The 900 shade
 */
export interface ExpandedColorSet extends ColorSet {
  palette: {
    [key in `${50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}`]: HEX;
  };
}

/**
 * A theme with different color categories for a regular palette
 * @property brand - The brand color
 * @property primary - The primary color
 * @property secondary - The secondary color
 * @property accent - The accent color
 * @property neutral - The neutral color
 * @property info - The info color
 * @property success - The success color
 * @property warning - The warning color
 * @property error - The error color
 * @property schemeColors - The color scheme colors
 */
export interface RegularColorTheme {
  brand: ColorSet;
  primary: ColorSet;
  secondary: ColorSet;
  accent: ColorSet;
  neutral: ColorSet;
  info: ColorSet;
  success: ColorSet;
  warning: ColorSet;
  error: ColorSet;
  schemeColors: HEX[];
}

/**
 * A theme with different color categories for an expanded palette
 * @property brand - The brand color
 * @property primary - The primary color
 * @property secondary - The secondary color
 * @property accent - The accent color
 * @property neutral - The neutral color
 * @property info - The info color
 * @property success - The success color
 * @property warning - The warning color
 * @property error - The error color
 * @property schemeColors - The color scheme colors
 */
export interface ExpandedColorTheme {
  brand: ExpandedColorSet;
  primary: ExpandedColorSet;
  secondary: ExpandedColorSet;
  accent: ExpandedColorSet;
  neutral: ExpandedColorSet;
  info: ExpandedColorSet;
  success: ExpandedColorSet;
  warning: ExpandedColorSet;
  error: ExpandedColorSet;
  schemeColors: HEX[];
}

/**
 * A theme with different color categories for a color palette
 * @property brand - The brand color
 * @property primary - The primary color
 * @property secondary - The secondary color
 * @property accent - The accent color
 * @property neutral - The neutral color
 * @property info - The info color
 * @property success - The success color
 */
export type ColorTheme = RegularColorTheme | ExpandedColorTheme;
