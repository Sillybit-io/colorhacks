import { describe, expect, it } from 'vitest';
import { isHexColor } from './hex';

describe('HEX utilities', () => {
  it('should return true for valid 6-digit hex colors', () => {
    expect(isHexColor('#000000')).toBe(true);
    expect(isHexColor('#FFFFFF')).toBe(true);
    expect(isHexColor('#FF5733')).toBe(true);
  });

  it('should return true for valid 3-digit hex colors', () => {
    expect(isHexColor('#000')).toBe(true);
    expect(isHexColor('#FFF')).toBe(true);
    expect(isHexColor('#F5A')).toBe(true);
  });

  it('should return false for invalid hex colors', () => {
    expect(isHexColor('#GGGGGG')).toBe(false);
    expect(isHexColor('#FF55')).toBe(false);
    expect(isHexColor('#FFFFFFF')).toBe(false);
    expect(isHexColor('invalid')).toBe(false);
    expect(isHexColor('')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isHexColor('#aabbcc')).toBe(true);
    expect(isHexColor('#AABBCC')).toBe(true);
    expect(isHexColor('#AaBbCc')).toBe(true);
  });
});
