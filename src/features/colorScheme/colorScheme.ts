import { getContrastRatioWCAG20 } from '@features/hacks/hacks';
import { adjustHexColor } from '@features/hex/hex';
import type { HEX } from '@features/hex/hex.type';
import { getHEXfromHSL, getHSLfromHEX } from '@features/hsl/hsl';
import type { ColorScheme, ColorSchemeType } from './colorScheme.type';

/**
 * Generates a monochromatic color scheme based on the given base color.
 *
 * @param baseColor - The base color for the scheme.
 * @returns An array of HexColor representing the monochromatic color scheme.
 *
 * @example
 * const scheme = generateMonochromaticScheme('#ff0000');
 * // returns ['#330000', '#990000', '#ff0000', '#ff6666', '#ff9999']
        ]
 */
export function generateMonochromaticScheme(baseColor: HEX): HEX[] {
  const [h, s, l] = getHSLfromHEX(baseColor);

  return [
    getHEXfromHSL(h, s, 10),
    getHEXfromHSL(h, s, 30),
    baseColor,
    getHEXfromHSL(h, s, 70),
    getHEXfromHSL(h, s, 90),
  ];
}

/**
 * Generates an analogous color scheme based on the given base color.
 *
 * @param baseColor - The base color for the scheme.
 * @returns An array of HexColor representing the analogous color scheme.
 *
 * @example
 * const scheme = generateAnalogousScheme('#ff0000');
 * // returns ['#ff8000', '#ff6666', '#ff0080']
 */
export function generateAnalogousScheme(baseColor: HEX): HEX[] {
  const [h, s, l] = getHSLfromHEX(baseColor);
  return [
    getHEXfromHSL((h - 30 + 360) % 360, s, l),
    baseColor,
    getHEXfromHSL((h + 30) % 360, s, l),
  ];
}

/**
 * Generates a complementary color scheme based on the given base color.
 *
 * @param baseColor - The base color for the scheme.
 * @returns An array of HexColor representing the complementary color scheme.
 *
 * @example
 * const scheme = generateComplementaryScheme('#ff0000');
 * // returns ['#ff0000', '#00ffff']
 */
export function generateComplementaryScheme(baseColor: HEX): HEX[] {
  const [h, s, l] = getHSLfromHEX(baseColor);
  return [baseColor, getHEXfromHSL((h + 180) % 360, s, l)];
}

/**
 * Generates a triadic color scheme based on the given base color.
 *
 * @param baseColor - The base color for the scheme.
 * @returns An array of HexColor representing the triadic color scheme.
 *
 * @example
 * const scheme = generateTriadicScheme('#ff0000');
 * // returns ['#ff0000', '#00ff00', '#0000ff']
 */
export function generateTriadicScheme(baseColor: HEX): HEX[] {
  const [h, s, l] = getHSLfromHEX(baseColor);
  return [
    baseColor,
    getHEXfromHSL((h + 120) % 360, s, l),
    getHEXfromHSL((h + 240) % 360, s, l),
  ];
}

/**
 * Generates a tetradic color scheme based on the given base color.
 *
 * @param baseColor - The base color for the scheme.
 * @returns An array of HexColor representing the tetradic color scheme.
 *
 * @example
 * const scheme = generateTetradicScheme('#ff0000');
 * // returns ['#ff0000', '#80ff00', '#00ffff', '#8000ff']
 */
export function generateTetradicScheme(baseColor: HEX): HEX[] {
  const [h, s, l] = getHSLfromHEX(baseColor);
  return [
    baseColor,
    getHEXfromHSL((h + 90) % 360, s, l),
    getHEXfromHSL((h + 180) % 360, s, l),
    getHEXfromHSL((h + 270) % 360, s, l),
  ];
}

/**
 * Generates a color scheme based on the given base color and scheme type.
 *
 * @param baseColor - The base color for the scheme.
 * @param schemeType - The type of color scheme to generate.
 * @returns An object containing the colors and areas of the color scheme.
 *
 * @example
 * const scheme = generateColorScheme('#ff0000', 'monochromatic');
 * // Returns {
 * //  colors: ['#ff0000', '#990000', '#ff6666', '#e61919', '#ff0000'],
 * //  areas: {
 * //    primary: '#ff0000',
 * //    secondary: '#ff6666',
 * //    accent: '#e61919',
 * //    neutral: '#990000'
 * //  }
 * }
 */
export function generateColorScheme(
  baseColor: HEX,
  schemeType: ColorSchemeType,
): ColorScheme {
  let colors: HEX[];

  switch (schemeType) {
    case 'monochromatic':
      colors = generateMonochromaticScheme(baseColor);
      break;
    case 'analogous':
      colors = generateAnalogousScheme(baseColor);
      break;
    case 'complementary':
      colors = generateComplementaryScheme(baseColor);
      break;
    case 'triadic':
      colors = generateTriadicScheme(baseColor);
      break;
    case 'tetradic':
      colors = generateTetradicScheme(baseColor);
      break;
    default:
      throw new Error('Invalid color scheme type');
  }

  while (colors.length < 5) {
    colors.push(adjustHexColor(colors[colors.length - 1] as HEX, 10));
  }

  const ensureContrastWithFallback = (color: HEX, minContrast: number): HEX => {
    let adjustedColor = ensureContrast(baseColor, color, minContrast);
    if (getContrastRatioWCAG20(baseColor, adjustedColor) < minContrast) {
      // If ensureContrast fails, fall back to a more dramatic adjustment
      const [h, s, l] = getHSLfromHEX(baseColor);
      adjustedColor = getHEXfromHSL(h, s, l > 50 ? 10 : 90);
    }
    return adjustedColor;
  };

  const areas = {
    primary: baseColor,
    secondary: ensureContrastWithFallback(colors[1] as HEX, 4.5),
    accent: ensureContrastWithFallback(colors[2] as HEX, 4.5),
    neutral: ensureContrastWithFallback(adjustHexColor(baseColor, 40), 4.5),
  };

  return { colors, areas };
}

/**
 * Ensures that the contrast ratio between the background color and the foreground color is at least the minimum contrast ratio.
 *
 * @param bgColor - The background color.
 * @param fgColor - The foreground color.
 * @param minContrastRatio - The minimum contrast ratio.
 * @returns The adjusted foreground color.
 *
 * @example
 * const adjustedColor = ensureContrast('#ffffff', '#000000', 4.5);
 * // returns '#000000'
 */
export function ensureContrast(
  bgColor: HEX,
  fgColor: HEX,
  minContrastRatio: number,
): HEX {
  let contrastRatio = getContrastRatioWCAG20(bgColor, fgColor);
  if (contrastRatio >= minContrastRatio) return fgColor;

  const [bgH, bgS, bgL] = getHSLfromHEX(bgColor);
  let [fgH, fgS, fgL] = getHSLfromHEX(fgColor);

  const shouldLighten = bgL < 50;

  const adjustLightness = (l: number) =>
    shouldLighten ? Math.min(l + 5, 100) : Math.max(l - 5, 0);

  while (contrastRatio < minContrastRatio && fgL > 0 && fgL < 100) {
    fgL = adjustLightness(fgL);
    const adjustedColor = getHEXfromHSL(fgH, fgS, fgL);
    contrastRatio = getContrastRatioWCAG20(bgColor, adjustedColor);
    if (contrastRatio >= minContrastRatio) return adjustedColor;
  }

  fgL = shouldLighten ? 100 : 0;
  let adjustedColor = getHEXfromHSL(fgH, fgS, fgL);
  contrastRatio = getContrastRatioWCAG20(bgColor, adjustedColor);

  if (contrastRatio < minContrastRatio) {
    fgH = (bgH + 180) % 360;
    adjustedColor = getHEXfromHSL(fgH, 100, fgL);
  }

  return adjustedColor;
}
