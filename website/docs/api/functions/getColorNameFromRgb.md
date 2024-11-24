# getColorNameFromRgb()

```ts
function getColorNameFromRgb(options): GetColorNameFromHexOutput
```

Retrieves the color name from a given RGB color.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | The options for converting RGB to color name. |
| `options.b` | `number` | The blue component of the RGB color (0-255). |
| `options.g` | `number` | The green component of the RGB color (0-255). |
| `options.r` | `number` | The red component of the RGB color (0-255). |

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
const result = getColorNameFromRgb({ r: 255, g: 0, b: 0 });
// Returns: { hexcode: '#ff0000', colorName: 'Red', isExactMatch: true, shadeHex: '#ff0000', shadeName: 'Red', distance: 0 }
```

## Defined in

[colorname/colorname.ts:61](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/colorname/colorname.ts#L61)
