import type { HEX } from '@features/hex/hex.type';
import { getRgbaFromHex } from '@features/rgb/rgb';
import type { HSL } from './hsl.type';

/**
 * Converts a hex color to an HSL color
 * @param hex - The hex color to convert
 * @returns The HSL color
 *
 * @example
 * const hsl = getHSLfromHEX('#FF0000');
 * // Returns [0, 100, 50]
 */
export function getHSLfromHEX(hex: HEX): HSL {
  let { r, g, b } = getRgbaFromHex({ hexCode: hex });
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

/**
 * Converts an HSL color to a hex color
 * @param h - The hue of the color
 * @param s - The saturation of the color
 * @param l - The lightness of the color
 * @returns The hex color
 *
 * @example
 * const hex = getHEXfromHSL(0, 100, 50);
 * // Returns '#FF0000'
 */
export function getHEXfromHSL(h: number, s: number, l: number): HEX {
  const sNormalized = s / 100;
  const lNormalized = l / 100;
  const a = sNormalized * Math.min(lNormalized, 1 - lNormalized);
  const f = (n: number, k = (n + h / 30) % 12) =>
    lNormalized - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return `#${[f(0), f(8), f(4)]
    .map((x) =>
      Math.round(x * 255)
        .toString(16)
        .padStart(2, '0'),
    )
    .join('')}` as HEX;
}

/**
 * Checks if a string is a valid HSL color
 * @param HSLColor - The string to check
 * @returns True if the string is a valid HSL color, false otherwise
 *
 * @example
 * isHSLColor('hsl(0, 100%, 50%)'); // true
 * isHSLColor('rgb(255, 255, 0)'); // false
 */
export function isHSLColor(HSLColor: string) {
  const hslRegex =
    /^hsl\(([0-2]?[0-9]{1,2}|3[0-5][0-9]|360),\s*([0-9]|[1-9][0-9]|100)%,\s*([0-9]|[1-9][0-9]|100)%\)$/;
  return hslRegex.test(HSLColor);
}

/**
 * Compares two hex colors via HSL
 * @param color1 - The first hex color
 * @param color2 - The second hex color
 * @param tolerance - The tolerance for the comparison
 * @returns True if the colors are similar, false otherwise
 *
 * @example
 * compareHEXColorsViaHSL('#FF0000', '#00FF00'); // false
 */
export function compareHEXColorsViaHSL(
  color1: HEX,
  color2: HEX,
  tolerance = 10,
) {
  const [h1, s1, l1] = getHSLfromHEX(color1);
  const [h2, s2, l2] = getHSLfromHEX(color2);

  const hDiff = Math.min(Math.abs(h1 - h2), 360 - Math.abs(h1 - h2));
  const sDiff = Math.abs(s1 - s2);
  const lDiff = Math.abs(l1 - l2);

  return hDiff <= tolerance * 2 && sDiff <= tolerance && lDiff <= tolerance;
}
