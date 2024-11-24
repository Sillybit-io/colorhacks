# getHSLfromHEX()

```ts
function getHSLfromHEX(hex): HSL
```

Converts a hex color to an HSL color

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hex` | \`#$\{string\}\` | The hex color to convert |

## Returns

[`HSL`](../type-aliases/HSL.md)

The HSL color

## Example

```ts
const hsl = getHSLfromHEX('#FF0000');
// Returns [0, 100, 50]
```

## Defined in

[hsl/hsl.ts:14](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/hsl/hsl.ts#L14)
