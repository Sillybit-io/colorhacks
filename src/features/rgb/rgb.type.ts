import type { HEX } from '@features/hex/hex.type';

export interface GetRgbaFromHexOptions {
  hexCode: HEX;
  alpha?: number;
}

export interface GetRgbaFromHexOutput {
  rgba: string;
  r: number;
  g: number;
  b: number;
  a: number;
}
