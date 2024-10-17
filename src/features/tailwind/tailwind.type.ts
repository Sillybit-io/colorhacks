import type { ColorSchemeType } from '@features/colorScheme/colorScheme.type';
import type { HEX } from '@features/hex/hex.type';

/**
 * Options for the theme generation
 * @property baseColor - The base color
 * @property expandPalette - Whether to expand the palette
 * @property colorScheme - The color scheme
 * @property infoHue - The hue for the info color
 * @property successHue - The hue for the success color
 * @property warningHue - The hue for the warning color
 * @property errorHue - The hue for the error color
 */
export interface GenerateThemeOptions {
  baseColor: HEX;
  expandPalette?: boolean;
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
export type ExpandedColorSet = ColorSet &
  Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, HEX>;

/**
 * A theme with different color categories for a regular palette
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

export type ColorTheme = RegularColorTheme | ExpandedColorTheme;
