# getHexFromRgb()

```ts
function getHexFromRgb(options): string
```

Converts an RGB color to a hexadecimal color code.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` | The options for converting RGB to hex. |
| `options.b` | `number` | The blue component of the RGB color (0-255). |
| `options.g` | `number` | The green component of the RGB color (0-255). |
| `options.r` | `number` | The red component of the RGB color (0-255). |

## Returns

`string`

The hexadecimal color code.

## Throws

If any RGB component is outside the valid range (0-255).

## Example

```ts
getHexFromRgb({ r: 255, g: 0, b: 0 });
// Returns '#ff0000'
```

## Defined in

[rgb/rgb.ts:95](https://github.com/Sillybit-io/colorhacks/blob/1141412e2ad2f6a42ef9c6271418b8c6be806b0e/src/features/rgb/rgb.ts#L95)
