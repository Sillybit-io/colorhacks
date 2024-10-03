import type { GetRgbaFromHexOptions, GetRgbaFromHexOutput } from './rgb.type';

/**
 * Converts a hexadecimal color code to RGBA format.
 *
 * @param {GetRgbaFromHexOptions} options - The options for converting hex to RGBA.
 * @param {string} options.hexCode - The hexadecimal color code to convert. Can be with or without the '#' prefix.
 * @param {number} [options.alpha=1] - The alpha value for the RGBA color (0 to 1). Defaults to 1 if not provided.
 * @returns {GetRgbaFromHexOutput} An object containing the RGBA color string and individual RGBA values.
 *
 * @example
 * getRgbaFromHex({ hexCode: '#FF0000' });
 * // Returns { rgba: 'rgba(255, 0, 0, 1)', r: 255, g: 0, b: 0, a: 1 }
 *
 * getRgbaFromHex({ hexCode: '#00FF00', alpha: 0.5 });
 * // Returns { rgba: 'rgba(0, 255, 0, 0.5)', r: 0, g: 255, b: 0, a: 0.5 }
 */
export function getRgbaFromHex({
  hexCode,
  alpha = 1,
}: GetRgbaFromHexOptions): GetRgbaFromHexOutput {
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
