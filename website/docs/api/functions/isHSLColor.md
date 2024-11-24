# isHSLColor()

```ts
function isHSLColor(HSLColor): boolean
```

Checks if a string is a valid HSL color

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `HSLColor` | `string` | The string to check |

## Returns

`boolean`

True if the string is a valid HSL color, false otherwise

## Example

```ts
isHSLColor('hsl(0, 100%, 50%)'); // true
isHSLColor('rgb(255, 255, 0)'); // false
```

## Defined in

[hsl/hsl.ts:82](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/hsl/hsl.ts#L82)
