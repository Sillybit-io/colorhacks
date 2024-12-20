# isRgbColor()

```ts
function isRgbColor(rgb): boolean
```

Check if a string is a valid RGB color

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rgb` | `string` | The string to check |

## Returns

`boolean`

True if the string is a valid RGB color, false otherwise

## Example

```ts
isRgbColor('rgb(255, 0, 0)'); // true
isRgbColor('rgb(256, 0, 0)'); // false
```

## Defined in

[rgb/rgb.ts:66](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/rgb/rgb.ts#L66)
