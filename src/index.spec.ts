import { describe, expect, it } from 'vitest';
import {
  ColorNames,
  type GetColorNameFromHexOutput,
  type GetRgbaFromHexOutput,
  getColorNameFromHex,
  getRgbaFromHex,
} from './index';

describe('index exports', () => {
  it('should export getRgbaFromHex function', () => {
    expect(typeof getRgbaFromHex).toBe('function');
  });

  it('should export getColorNameFromHex function', () => {
    expect(typeof getColorNameFromHex).toBe('function');
  });

  it('should export ColorNames enum', () => {
    expect(ColorNames).toBeDefined();
    expect(typeof ColorNames).toBe('object');
  });

  it('should have correct types exported', () => {
    const colorNameResult: GetColorNameFromHexOutput = {
      hexcode: '#ff0000',
      colorName: 'Red',
      isExactMatch: true,
      shadeHex: '#ff0000',
      shadeName: 'Red',
      distance: 0,
    };
    expect(colorNameResult).toBeDefined();

    const rgbaResult: GetRgbaFromHexOutput = {
      rgba: 'rgba(255, 0, 0, 1)',
      r: 255,
      g: 0,
      b: 0,
      a: 1,
    };
    expect(rgbaResult).toBeDefined();
  });
});
