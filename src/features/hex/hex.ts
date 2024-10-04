/**
 * Check if a string is a valid hex color
 * @param hex - The string to check
 * @returns True if the string is a valid hex color, false otherwise
 */
export function isHexColor(hex: string): boolean {
  // Remove the '#' if present
  const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;

  // Check if the cleaned hex is valid (6 or 3 characters)
  return /^([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(cleanHex);
}
