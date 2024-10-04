import { getRgbaFromHex } from '@features/rgb/rgb';
import type { GetColorNameFromHexOutput } from './colorname.type';
import { ColorNames } from './colorname.type';

/**
 * Calculates the Euclidean distance between two RGB colors.
 *
 * @param {Object} rgb1 - The first RGB color object with r, g, and b properties.
 * @param {Object} rgb2 - The second RGB color object with r, g, and b properties.
 * @returns {number} The Euclidean distance between the two RGB colors.
 */
export function getColorDistance(
  rgb1: { r: number; g: number; b: number },
  rgb2: { r: number; g: number; b: number },
): number {
  const rDiff = rgb1.r - rgb2.r;
  const gDiff = rgb1.g - rgb2.g;
  const bDiff = rgb1.b - rgb2.b;

  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}

/**
 * Checks if the provided hex code matches any exact color name in the ColorNames enum.
 *
 * @param {string} hexCode - The hexadecimal color code to check.
 * @returns {GetColorNameFromHexOutput | null} - An object containing the color name and other details if it's an exact match, otherwise null.
 */
export function getExactMatch(
  hexCode: string,
): GetColorNameFromHexOutput | null {
  if (!hexCode.startsWith('#')) {
    // biome-ignore lint/style/noParameterAssign: it's necessary
    hexCode = `#${hexCode}`;
  }
  const cleanHex = hexCode.slice(1).toLowerCase();
  // Use Object.entries only once and store the result
  const colorEntries = Object.entries(ColorNames);
  const exactMatch = colorEntries.find(
    ([, hex]) => hex.slice(1).toLowerCase() === cleanHex,
  );

  if (exactMatch) {
    const [name, hex] = exactMatch;
    const formattedColorName = formatColorName(name);
    return {
      hexcode: `#${cleanHex}`,
      colorName: formattedColorName,
      isExactMatch: true,
      shadeHex: hex.toLowerCase(),
      shadeName: formattedColorName,
      distance: 0,
    };
  }

  return null;
}

/**
 * Finds the closest color name match from the ColorNames enum.
 *
 * @param {string} hexCode - The hexadecimal color code to find the closest match for.
 * @returns {GetColorNameFromHexOutput} - An object containing the closest color name and other details.
 * @throws {Error} - If no closest color match is found.
 */
export function getClosestMatch(hexCode: string): GetColorNameFromHexOutput {
  const cleanHex = hexCode.replace('#', '').toLowerCase();
  let closestColor: [string, string] | null = null;
  let minDistance = Number.POSITIVE_INFINITY;

  const colorEntries = Object.entries(ColorNames);
  const inputRgb = getRgbaFromHex({ hexCode: cleanHex });

  // biome-ignore lint/complexity/noForEach: <explanation>
  colorEntries.forEach(([name, hex]) => {
    const colorRgb = getRgbaFromHex({ hexCode: hex.slice(1) });
    const distance = getColorDistance(inputRgb, colorRgb);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = [name, hex];
    }
  });

  if (closestColor) {
    const [name, hex]: [string, string] = closestColor;
    const formattedColorName = formatColorName(name);
    return {
      hexcode: `#${cleanHex}`.toLowerCase(),
      colorName: formattedColorName,
      isExactMatch: false,
      shadeHex: `#${hex.slice(1)}`.toLowerCase(),
      shadeName: formattedColorName,
      distance: minDistance,
    };
  }

  throw new Error('Unable to find closest color match');
}

/**
 * Formats a color name by converting it to a human-readable string.
 *
 * @param {string} enumKey - The key from the ColorNames enum.
 * @returns {string} The formatted color name.
 */
export function formatColorName(enumKey: string): string {
  return enumKey
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
