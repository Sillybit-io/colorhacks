# isRgbaColor()

```ts
function isRgbaColor(rgba): boolean
```

Check if a string is a valid RGBA color

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rgba` | `string` | The string to check |

## Returns

`boolean`

True if the string is a valid RGBA color, false otherwise

## Example

```ts
isRgbaColor('rgba(255, 0, 0, 1)'); // true
isRgbaColor('rgba(256, 0, 0, 1)'); // false
```

## Defined in

[rgb/rgb.ts:85](https://github.com/Sillybit-io/colorhacks/blob/fb76eb3f8201e2f6e24d5eb200be883dc1c98169/src/features/rgb/rgb.ts#L85)
