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

[rgb/rgb.ts:111](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/rgb/rgb.ts#L111)
