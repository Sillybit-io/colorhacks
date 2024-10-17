# compareHEXColorsViaHSL()

```ts
function compareHEXColorsViaHSL(
   color1, 
   color2, 
   tolerance): boolean
```

Compares two hex colors via HSL

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `color1` | \`#$\{string\}\` | `undefined` | The first hex color |
| `color2` | \`#$\{string\}\` | `undefined` | The second hex color |
| `tolerance` | `number` | `10` | The tolerance for the comparison |

## Returns

`boolean`

True if the colors are similar, false otherwise

## Example

```ts
compareHEXColorsViaHSL('#FF0000', '#00FF00'); // false
```

## Defined in

[hsl/hsl.ts:98](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/hsl/hsl.ts#L98)
