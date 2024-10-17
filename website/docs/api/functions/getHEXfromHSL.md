# getHEXfromHSL()

```ts
function getHEXfromHSL(
   h, 
   s, 
   l): HEX
```

Converts an HSL color to a hex color

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `h` | `number` | The hue of the color |
| `s` | `number` | The saturation of the color |
| `l` | `number` | The lightness of the color |

## Returns

[`HEX`](../type-aliases/HEX.md)

The hex color

## Example

```ts
const hex = getHEXfromHSL(0, 100, 50);
// Returns '#FF0000'
```

## Defined in

[hsl/hsl.ts:58](https://github.com/Sillybit-io/colorhacks/blob/fb76eb3f8201e2f6e24d5eb200be883dc1c98169/src/features/hsl/hsl.ts#L58)
