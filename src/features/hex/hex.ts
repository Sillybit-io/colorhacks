import { getHSLfromHEX } from '@features/hsl/hsl';
import { getHEXfromHSL } from '@features/hsl/hsl';
import type { HEX } from './hex.type';

/**
 * Check if a string is a valid hex color
 * @param hex - The string to check
 * @returns True if the string is a valid hex color, false otherwise
 *
 * @example
 * isHexColor('#FF0000'); // true
 * isHexColor('#FF000000'); // true
 * isHexColor('#GHIJKL'); // false
 */
export function isHexColor(hex: string): boolean {
  // Remove the '#' if present
  const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;

  // Check if the cleaned hex is valid (6 or 3 characters)
  return /^([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(cleanHex);
}

/**
 * Adjusts the brightness of a hex color by a given amount.
 * @param hex - The hex color to adjust.
 * @param amount - The amount to adjust the brightness by.
 * @returns The adjusted hex color.
 *
 * @example
 * adjustHexColor('#FF0000', 50); // '#FF7F7F'
 */
export function adjustHexColor(hex: string, amount: number): HEX {
  const [h, s, l] = getHSLfromHEX(hex as HEX);
  const newL = Math.max(0, Math.min(100, l + amount));
  return getHEXfromHSL(h, s, newL);
}
