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

## Example

```ts
getRgbaFromHex({ hexCode: '#FF0000' });
// Returns { rgba: 'rgba(255, 0, 0, 1)', r: 255, g: 0, b: 0, a: 1 }

getRgbaFromHex({ hexCode: '#00FF00', alpha: 0.5 });
// Returns { rgba: 'rgba(0, 255, 0, 0.5)', r: 0, g: 255, b: 0, a: 0.5 }
```

## Defined in

[rgb/rgb.ts:18](https://github.com/Sillybit-io/colorhacks/blob/be6ec2547a222f5e280e5373351fa5f457444a8c/src/features/rgb/rgb.ts#L18)
