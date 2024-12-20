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

[hsl/hsl.ts:98](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/hsl/hsl.ts#L98)
