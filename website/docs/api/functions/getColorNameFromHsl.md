# getColorNameFromHsl()

```ts
function getColorNameFromHsl(options): GetColorNameFromHexOutput
```

Retrieves the color name from a given HSL color.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | The options for converting HSL to color name. |
| `options.h` | `number` | The hue component of the HSL color (0-360). |
| `options.l` | `number` | The lightness component of the HSL color (0-100). |
| `options.s` | `number` | The saturation component of the HSL color (0-100). |

## Returns

[`GetColorNameFromHexOutput`](../interfaces/GetColorNameFromHexOutput.md)

An object containing information about the color:
  - hexcode: The input hex code, normalized to lowercase with '#' prefix.
  - colorName: The name of the closest matching color.
  - isExactMatch: Boolean indicating if an exact match was found.
  - shadeHex: The hex code of the closest matching color.
  - shadeName: The name of the closest matching color (same as colorName).
  - distance: The color distance between the input and the closest match (0 for exact matches).

## Throws

If unable to find a closest color match.

## Example

```ts
const result = getColorNameFromHsl({ h: 0, s: 100, l: 50 });
// Returns: { hexcode: '#ff0000', colorName: 'Red', isExactMatch: true, shadeHex: '#ff0000', shadeName: 'Red', distance: 0 }
```

## Defined in

[colorname/colorname.ts:98](https://github.com/Sillybit-io/colorhacks/blob/fb76eb3f8201e2f6e24d5eb200be883dc1c98169/src/features/colorname/colorname.ts#L98)
