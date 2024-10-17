import { isHexColor } from '@features/hex/hex';
import type { HEX } from '@features/hex/hex.type';
import { getRgbaFromHex } from '@features/rgb/rgb';
import { InvalidColorMessage } from '@utilities/utilities';
import { calculateRelativeLuminance, getLuminance } from './hacks.utils';

/**
 * Get the opposite color for text based on the background color
 * @param {Object} options - The options for determining the opposite color
 * @param {string} options.hexCode - Background color in hex format (e.g., "#RRGGBB")
 * @param {string} [options.darkColor="#000000"] - Optional dark color for text
 * @param {string} [options.lightColor="#FFFFFF"] - Optional light color for text
 * @returns {string} Opposite color for text in hex format
 * @throws {Error} If the provided hexCode is invalid
 *
 * @example
 * const oppositeColor = getOppositeColor({ hexCode: "#FFFFFF" });
 * console.log(oppositeColor); // Outputs: "#000000"
 */
export function getOppositeColor(
  hexCode: string,
  darkColor = '#000000',
  lightColor = '#FFFFFF',
): string {
  if (!isHexColor(hexCode)) {
    throw new Error(InvalidColorMessage);
  }

  const rgba = getRgbaFromHex({ hexCode: hexCode as HEX });
  const { r, g, b } = rgba;

  const luminance = getLuminance(r, g, b);

  // Using WCAG 2.0 level AA standard (contrast ratio of 4.5:1 for normal text)
  return luminance > 0.179 ? darkColor : lightColor;
}

/**
 * Calculate the contrast ratio between two colors
 * @param hexCode1 First color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB")
 * @param hexCode2 Second color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB")
 * @returns The contrast ratio between the two colors (a number between 1 and 21)
 * @throws {Error} If either hexCode1 or hexCode2 is not a valid hexadecimal color code
 *
 * @example
 * const ratio = getContrastRatio("#FFFFFF", "#000000");
 * console.log(ratio); // Outputs: 21
 */
export function getContrastRatio(hexCode1: string, hexCode2: string): number {
  if (!isHexColor(hexCode1) || !isHexColor(hexCode2)) {
    throw new Error(InvalidColorMessage);
  }

  const rgba1 = getRgbaFromHex({ hexCode: hexCode1 as HEX });
  const rgba2 = getRgbaFromHex({ hexCode: hexCode2 as HEX });
  const { r: r1, g: g1, b: b1 } = rgba1;
  const { r: r2, g: g2, b: b2 } = rgba2;

  const luminance1 = calculateRelativeLuminance({ r: r1, g: g1, b: b1 });
  const luminance2 = calculateRelativeLuminance({ r: r2, g: g2, b: b2 });

  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Calculate the WCAG 2.0 contrast ratio between two colors
 * @param hexCode1 First color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB")
 * @param hexCode2 Second color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB")
 * @returns The WCAG 2.0 contrast ratio between the two colors (a number between 1 and 21)
 * @throws {Error} If either hexCode1 or hexCode2 is not a valid hexadecimal color code
 *
 * @example
 * const ratio = getContrastRatioWCAG20("#FFFFFF", "#000000");
 * console.log(ratio); // Outputs: 21
 */
export function getContrastRatioWCAG20(
  hexCode1: string,
  hexCode2: string,
): number {
  if (!isHexColor(hexCode1) || !isHexColor(hexCode2)) {
    throw new Error(InvalidColorMessage);
  }

  const ratio = getContrastRatio(hexCode1, hexCode2);

  return Math.max(ratio, 1 / ratio);
}

/**
 * Adjusts the saturation based on the lightness and whether the base color is light or dark.
 *
 * @param lightness - The lightness value of the color (0-100)
 * @param baseSaturation - The original saturation of the base color (0-100)
 * @param isLightBase - Whether the base color is considered light
 * @param saturationFactor - The factor by which to adjust the saturation (default is 0.3)
 * @returns The adjusted saturation value (0-100)
 *
 * @example
 * const adjustedSaturation = adjustSaturation(50, 50, true);
 * console.log(adjustedSaturation); // Outputs: 35
 */
export function adjustSaturation(
  lightness: number,
  baseSaturation: number,
  isLightBase: boolean,
  saturationFactor = 0.3,
): number {
  if (isLightBase) {
    return Math.max(0, baseSaturation - (100 - lightness) * saturationFactor);
  }
  return Math.min(100, baseSaturation + (100 - lightness) * saturationFactor);
}

/**
 * Checks if the contrast ratio between two colors meets the WCAG AA standard for normal text
 * @param backgroundColor - The background color in hexadecimal format
 * @param textColor - The text color in hexadecimal format
 * @returns {boolean} - True if the contrast ratio is greater than or equal to 4.5, false otherwise
 * @throws {Error} If either backgroundColor or textColor is not a valid hexadecimal color code
 *
 * @example
 * const isAccessible = checkAccessibility("#FFFFFF", "#000000");
 * console.log(isAccessible); // Outputs: true
 */
export function checkAccessibility(
  backgroundColor: HEX,
  textColor: HEX,
): boolean {
  const contrastRatio = getContrastRatioWCAG20(backgroundColor, textColor);
  return contrastRatio >= 4.5;
}
