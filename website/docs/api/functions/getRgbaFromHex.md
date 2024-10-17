# getRgbaFromHex()

```ts
function getRgbaFromHex(options): GetRgbaFromHexOutput
```

Converts a hexadecimal color code to RGBA format.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`GetRgbaFromHexOptions`](../interfaces/GetRgbaFromHexOptions.md) | The options for converting hex to RGBA. |

## Returns

[`GetRgbaFromHexOutput`](../interfaces/GetRgbaFromHexOutput.md)

An object containing the RGBA color string and individual RGBA values.

## Throws

If the provided hexCode is invalid.

## Example

```ts
getRgbaFromHex({ hexCode: '#FF0000' });
// Returns { rgba: 'rgba(255, 0, 0, 1)', r: 255, g: 0, b: 0, a: 1 }

getRgbaFromHex({ hexCode: '#00FF00', alpha: 0.5 });
// Returns { rgba: 'rgba(0, 255, 0, 0.5)', r: 0, g: 255, b: 0, a: 0.5 }

getRgbaFromHex({ hexCode: 'invalid' });
// Throws an error: Invalid color
```

## Defined in

[rgb/rgb.ts:24](https://github.com/Sillybit-io/colorhacks/blob/fb76eb3f8201e2f6e24d5eb200be883dc1c98169/src/features/rgb/rgb.ts#L24)
