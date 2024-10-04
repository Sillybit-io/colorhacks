/**
 * Normalize a color component to a linear RGB value
 * @param c Color component (0-255)
 * @returns Normalized color component
 */
export function normalizeColor(c: number): number {
  const normalized = c / 255;
  return normalized <= 0.03928
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

/**
 * Calculate the relative luminance of a color
 * This follows the WCAG 2.0 formula for luminance
 * @param r Red channel (0-255)
 * @param g Green channel (0-255)
 * @param b Blue channel (0-255)
 * @returns Relative luminance value
 */
export function getLuminance(
  r: number | undefined,
  g: number | undefined,
  b: number | undefined,
): number {
  const [rLinear, gLinear, bLinear] = [r, g, b].map((c) =>
    c !== undefined ? normalizeColor(c) : 0,
  ) as [number, number, number];
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Calculate the relative luminance of a color
 * This follows the WCAG 2.0 formula for luminance
 * @param rgb - The RGB color object
 * @returns The relative luminance value
 */
export function calculateRelativeLuminance(rgb: {
  r: number;
  g: number;
  b: number;
}): number {
  const { r, g, b } = rgb;
  const [R, G, B] = [r, g, b].map((c) => {
    const s = (c ?? 0) / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  }) as [number, number, number];
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
