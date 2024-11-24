# isHexColor()

```ts
function isHexColor(hex): boolean
```

Check if a string is a valid hex color

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hex` | `string` | The string to check |

## Returns

`boolean`

True if the string is a valid hex color, false otherwise

## Example

```ts
isHexColor('#FF0000'); // true
isHexColor('#FF000000'); // true
isHexColor('#GHIJKL'); // false
```

## Defined in

[hex/hex.ts:15](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/hex/hex.ts#L15)
