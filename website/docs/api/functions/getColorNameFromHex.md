# getColorNameFromHex()

```ts
function getColorNameFromHex(options): GetColorNameFromHexOutput
```

Retrieves the color name from a given hexadecimal color code.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`GetColorNameFromHexOptions`](../interfaces/GetColorNameFromHexOptions.md) | The options object containing the hexadecimal color code. |

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
const result = getColorNameFromHex({ hexCode: '#FF0000' });
// Returns: { hexcode: '#ff0000', colorName: 'Red', isExactMatch: true, shadeHex: '#ff0000', shadeName: 'Red', distance: 0 }
```

## Defined in

[colorname/colorname.ts:27](https://github.com/Sillybit-io/colorhacks/blob/1141412e2ad2f6a42ef9c6271418b8c6be806b0e/src/features/colorname/colorname.ts#L27)
