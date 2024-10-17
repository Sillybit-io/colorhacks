# exportThemeToCSS()

```ts
function exportThemeToCSS(theme, withRoot): string
```

Exports the theme to CSS.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theme` | [`ColorTheme`](../type-aliases/ColorTheme.md) | `undefined` | The theme to export. |
| `withRoot` | `boolean` | `false` | Whether to include the root selector. |

## Returns

`string`

The CSS for the theme.

## Example

```ts
const theme = generateTheme({ baseColor: '#ff0000', expandPalette: true });
exportThemeToCSS(theme);
// returns '--color-primary-500: #ff0000;'
```

## Defined in

[tailwind/tailwind.ts:121](https://github.com/Sillybit-io/colorhacks/blob/fb76eb3f8201e2f6e24d5eb200be883dc1c98169/src/features/tailwind/tailwind.ts#L121)
