import type { HEX } from '@features/hex/hex.type';

export type ColorSchemeType =
  | 'monochromatic'
  | 'analogous'
  | 'complementary'
  | 'triadic'
  | 'tetradic'
  | 'complementary';

export interface ColorScheme {
  colors: HEX[];
  areas: {
    primary: HEX;
    secondary: HEX;
    accent: HEX;
    neutral: HEX;
  };
}
