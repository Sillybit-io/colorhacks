import { ensureContrast } from '@features/colorScheme/colorScheme';
import { adjustSaturation, getOppositeColor } from '@features/hacks/hacks';
import type { HEX } from '@features/hex/hex.type';
import { getHEXfromHSL, getHSLfromHEX } from '@features/hsl/hsl';
import { getRgbaFromHex } from '@features/rgb/rgb';
import type { ColorSet, ExpandedColorSet } from './tailwind.type';

export function generateColorSet(baseColor: HEX): ColorSet {
  const [h, s, l] = getHSLfromHEX(baseColor);

  const light = getHEXfromHSL(h, s, Math.min(l + 20, 100));
  const dark = getHEXfromHSL(h, s, Math.max(l - 20, 0));

  const contrastText = getOppositeColor(baseColor) as HEX;
  const contrastTextLarge = ensureContrast(baseColor, contrastText, 7);

  const uiContrast = getHEXfromHSL(
    h,
    s,
    l > 50 ? Math.max(l - 40, 0) : Math.min(l + 40, 100),
  );
  const active = getHEXfromHSL(
    h,
    adjustSaturation(l, s, l > 50),
    l > 50 ? Math.max(l - 10, 0) : Math.min(l + 10, 100),
  );

  const tone = l > 50 ? 'dark' : 'light';
  const clarity = getRgbaFromHex({ hexCode: baseColor, alpha: 0.2 }).rgba;
  const inverse = getHEXfromHSL((h + 180) % 360, s, 100 - l);

  return {
    DEFAULT: baseColor,
    light,
    dark,
    contrastText,
    contrastTextLarge,
    uiContrast,
    active,
    clarity,
    tone,
    inverse,
  };
}

export function generateExpandedColorSet(baseColor: HEX): ExpandedColorSet {
  const baseSet = generateColorSet(baseColor);
  const [h, s, l] = getHSLfromHEX(baseColor);

  const shades: Record<
    50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
    HEX
  > = {
    50: getHEXfromHSL(h, s, 95),
    100: getHEXfromHSL(h, s, 90),
    200: getHEXfromHSL(h, s, 80),
    300: getHEXfromHSL(h, s, 70),
    400: getHEXfromHSL(h, s, 60),
    500: baseColor,
    600: getHEXfromHSL(h, s, 40),
    700: getHEXfromHSL(h, s, 30),
    800: getHEXfromHSL(h, s, 20),
    900: getHEXfromHSL(h, s, 10),
  };

  return {
    ...baseSet,
    palette: shades,
  };
}

export function getErrorColor(baseColor: HEX, errorHue: number): HEX {
  const [baseH] = getHSLfromHEX(baseColor);

  const errorH = (((baseH + errorHue) % 360) + 360) % 360;
  const adjustedH = errorH > 5 && errorH < 355 ? 0 : errorH;
  return getHEXfromHSL(adjustedH, 85, 45);
}

export function getSuccessColor(baseColor: HEX, successHue: number): HEX {
  const [baseH] = getHSLfromHEX(baseColor);

  const successH = (((baseH + successHue) % 360) + 360) % 360;
  const adjustedH = successH < 90 || successH > 150 ? 120 : successH;
  return getHEXfromHSL(adjustedH, 75, 35);
}

export function getWarningColor(baseColor: HEX, warningHue: number): HEX {
  const [baseH] = getHSLfromHEX(baseColor);

  const warningH = (((baseH + warningHue) % 360) + 360) % 360;
  const adjustedH = warningH < 30 || warningH > 50 ? 40 : warningH;
  return getHEXfromHSL(adjustedH, 90, 50);
}

export function getInfoColor(baseColor: HEX, infoHue: number): HEX {
  const [baseH] = getHSLfromHEX(baseColor);

  const infoH = (((baseH + infoHue) % 360) + 360) % 360;
  const adjustedH = infoH < 190 || infoH > 230 ? 210 : infoH;
  return getHEXfromHSL(adjustedH, 80, 40);
}
