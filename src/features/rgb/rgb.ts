import { isHexColor } from '@features/hex/hex';
import { InvalidColorMessage } from '@utilities/utilities';
import type { GetRgbaFromHexOptions, GetRgbaFromHexOutput } from './rgb.type';

/**
 * Converts a hexadecimal color code to RGBA format.
 *
 * @param {GetRgbaFromHexOptions} options - The options for converting hex to RGBA.
 * @param {string} options.hexCode - The hexadecimal color code to convert. Can be with or without the '#' prefix.
 * @param {number} [options.alpha=1] - The alpha value for the RGBA color (0 to 1). Defaults to 1 if not provided.
 * @returns {GetRgbaFromHexOutput} An object containing the RGBA color string and individual RGBA values.
 * @throws {Error} If the provided hexCode is invalid.
 *
 * @example
 * getRgbaFromHex({ hexCode: '#FF0000' });
 * // Returns { rgba: 'rgba(255, 0, 0, 1)', r: 255, g: 0, b: 0, a: 1 }
 *
 * getRgbaFromHex({ hexCode: '#00FF00', alpha: 0.5 });
 * // Returns { rgba: 'rgba(0, 255, 0, 0.5)', r: 0, g: 255, b: 0, a: 0.5 }
 *
 * getRgbaFromHex({ hexCode: 'invalid' });
 * // Throws an error: Invalid color
 */
export function getRgbaFromHex({
  hexCode,
  alpha = 1,
}: GetRgbaFromHexOptions): GetRgbaFromHexOutput {
  if (!isHexColor(hexCode)) {
    throw new Error(InvalidColorMessage);
  }

  const cleanHex = hexCode.replace(/^#/, '');

  const r = Number.parseInt(cleanHex.slice(0, 2), 16);
  const g = Number.parseInt(cleanHex.slice(2, 4), 16);
  const b = Number.parseInt(cleanHex.slice(4, 6), 16);

  const clampedAlpha = Math.max(0, Math.min(1, alpha));

  return {
    rgba: `rgba(${r}, ${g}, ${b}, ${clampedAlpha})`,
    r,
    g,
    b,
    a: clampedAlpha,
  };
}

/**
 * Check if a string is a valid RGB color
 * @param rgb - The string to check
 * @returns True if the string is a valid RGB color, false otherwise
 */
export function isRgbColor(rgb: string): boolean {
  const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  if (!rgbRegex.test(rgb)) return false;

  const [, r, g, b] = rgb.match(rgbRegex) || [];
  return [r, g, b].every(
    (value) => Number.parseInt(value as string, 10) <= 255,
  );
}

/**
 * Check if a string is a valid RGBA color
 * @param rgba - The string to check
 * @returns True if the string is a valid RGBA color, false otherwise
 */
export function isRgbaColor(rgba: string): boolean {
  const rgbaRegex =
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0\.\d+)\)$/;
  if (!rgbaRegex.test(rgba)) return false;

  const [, r, g, b, a] = rgba.match(rgbaRegex) || [];
  return (
    [r, g, b].every((value) => Number.parseInt(value as string, 10) <= 255) &&
    Number.parseFloat(a as string) <= 1
  );
}

/**
 * Converts an RGB color to a hexadecimal color code.
 *
 * @param {Object} options - The options for converting RGB to hex.
 * @param {number} options.r - The red component of the RGB color (0-255).
 * @param {number} options.g - The green component of the RGB color (0-255).
 * @param {number} options.b - The blue component of the RGB color (0-255).
 * @returns {string} The hexadecimal color code.
 * @throws {Error} If any RGB component is outside the valid range (0-255).
 *
 * @example
 * getHexFromRgb({ r: 255, g: 0, b: 0 });
 * // Returns '#ff0000'
 */
export function getHexFromRgb({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): string {
  if (r > 255 || g > 255 || b > 255) {
    throw new Error(InvalidColorMessage);
  }

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
