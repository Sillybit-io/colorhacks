import { getHEXfromHSL } from '@features/hsl/hsl';
import { getHexFromRgb } from '@features/rgb/rgb';
import { InvalidColorMessage } from '@utilities/utilities';
import {
  type GetColorNameFromHexOptions,
  type GetColorNameFromHexOutput,
} from './colorname.type';
import { getClosestMatch, getExactMatch } from './colorname.utils';

/**
 * Retrieves the color name from a given hexadecimal color code.
 *
 * @param {GetColorNameFromHexOptions} options - The options object containing the hexadecimal color code.
 * @param {string} options.hexCode - The hexadecimal color code to look up. Can be with or without the '#' prefix.
 * @returns {GetColorNameFromHexOutput} An object containing information about the color:
 *   - hexcode: The input hex code, normalized to lowercase with '#' prefix.
 *   - colorName: The name of the closest matching color.
 *   - isExactMatch: Boolean indicating if an exact match was found.
 *   - shadeHex: The hex code of the closest matching color.
 *   - shadeName: The name of the closest matching color (same as colorName).
 *   - distance: The color distance between the input and the closest match (0 for exact matches).
 *
 * @throws {Error} If unable to find a closest color match.
 *
 * @example
 * const result = getColorNameFromHex({ hexCode: '#FF0000' });
 * // Returns: { hexcode: '#ff0000', colorName: 'Red', isExactMatch: true, shadeHex: '#ff0000', shadeName: 'Red', distance: 0 }
 */
export function getColorNameFromHex({
  hexCode,
}: GetColorNameFromHexOptions): GetColorNameFromHexOutput {
  const exactMatch = getExactMatch(hexCode);
  if (exactMatch) {
    return exactMatch;
  }

  return getClosestMatch(hexCode);
}

/**
 * Retrieves the color name from a given RGB color.
 *
 * @param {Object} options - The options for converting RGB to color name.
 * @param {number} options.r - The red component of the RGB color (0-255).
 * @param {number} options.g - The green component of the RGB color (0-255).
 * @param {number} options.b - The blue component of the RGB color (0-255).
 * @returns {GetColorNameFromHexOutput} An object containing information about the color:
 *   - hexcode: The input hex code, normalized to lowercase with '#' prefix.
 *   - colorName: The name of the closest matching color.
 *   - isExactMatch: Boolean indicating if an exact match was found.
 *   - shadeHex: The hex code of the closest matching color.
 *   - shadeName: The name of the closest matching color (same as colorName).
 *   - distance: The color distance between the input and the closest match (0 for exact matches).
 *
 * @throws {Error} If unable to find a closest color match.
 *
 * @example
 * const result = getColorNameFromRgb({ r: 255, g: 0, b: 0 });
 * // Returns: { hexcode: '#ff0000', colorName: 'Red', isExactMatch: true, shadeHex: '#ff0000', shadeName: 'Red', distance: 0 }
 */
export function getColorNameFromRgb({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): GetColorNameFromHexOutput {
  if (r > 255 || g > 255 || b > 255) {
    throw new Error(InvalidColorMessage);
  }
  const hexCode = getHexFromRgb({ r, g, b });
  return getColorNameFromHex({ hexCode });
}

/**
 * Retrieves the color name from a given HSL color.
 *
 * @param {Object} options - The options for converting HSL to color name.
 * @param {number} options.h - The hue component of the HSL color (0-360).
 * @param {number} options.s - The saturation component of the HSL color (0-100).
 * @param {number} options.l - The lightness component of the HSL color (0-100).
 * @returns {GetColorNameFromHexOutput} An object containing information about the color:
 *   - hexcode: The input hex code, normalized to lowercase with '#' prefix.
 *   - colorName: The name of the closest matching color.
 *   - isExactMatch: Boolean indicating if an exact match was found.
 *   - shadeHex: The hex code of the closest matching color.
 *   - shadeName: The name of the closest matching color (same as colorName).
 *   - distance: The color distance between the input and the closest match (0 for exact matches).
 *
 * @throws {Error} If unable to find a closest color match.
 *
 * @example
 * const result = getColorNameFromHsl({ h: 0, s: 100, l: 50 });
 * // Returns: { hexcode: '#ff0000', colorName: 'Red', isExactMatch: true, shadeHex: '#ff0000', shadeName: 'Red', distance: 0 }
 */
export function getColorNameFromHsl({
  h,
  s,
  l,
}: {
  h: number;
  s: number;
  l: number;
}): GetColorNameFromHexOutput {
  if (h > 360 || s > 100 || l > 100) {
    throw new Error(InvalidColorMessage);
  }
  const hexCode = getHEXfromHSL(h, s, l);
  return getColorNameFromHex({ hexCode });
}
