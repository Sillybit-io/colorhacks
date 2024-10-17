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

[hex/hex.ts:32](https://github.com/Sillybit-io/colorhacks/blob/fb76eb3f8201e2f6e24d5eb200be883dc1c98169/src/features/hex/hex.ts#L32)
