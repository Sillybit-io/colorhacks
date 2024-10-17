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

[rgb/rgb.ts:85](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/rgb/rgb.ts#L85)
