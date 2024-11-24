# adjustHexColor()

```ts
function adjustHexColor(hex, amount): HEX
```

Adjusts the brightness of a hex color by a given amount.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hex` | `string` | The hex color to adjust. |
| `amount` | `number` | The amount to adjust the brightness by. |

## Returns

[`HEX`](../type-aliases/HEX.md)

The adjusted hex color.

## Example

```ts
adjustHexColor('#FF0000', 50); // '#FF7F7F'
```

## Defined in

[hex/hex.ts:32](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/hex/hex.ts#L32)
