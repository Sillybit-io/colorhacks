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

[hsl/hsl.ts:58](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/hsl/hsl.ts#L58)
