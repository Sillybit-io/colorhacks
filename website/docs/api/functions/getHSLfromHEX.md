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

[hsl/hsl.ts:14](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/hsl/hsl.ts#L14)
