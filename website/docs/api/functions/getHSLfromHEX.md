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

`HSL`

The HSL color

## Example

```ts
const hsl = getHSLfromHEX('#FF0000');
// Returns [0, 100, 50]
```

## Defined in

[hsl/hsl.ts:14](https://github.com/Sillybit-io/colorhacks/blob/fb76eb3f8201e2f6e24d5eb200be883dc1c98169/src/features/hsl/hsl.ts#L14)
