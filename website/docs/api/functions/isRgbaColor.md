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

[rgb/rgb.ts:85](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/rgb/rgb.ts#L85)
