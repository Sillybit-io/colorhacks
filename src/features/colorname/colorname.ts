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
