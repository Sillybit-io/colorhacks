# exportThemeToCSS()

```ts
function exportThemeToCSS(theme, withRoot): string
```

Exports the theme to CSS Variables

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `theme` | [`ColorTheme`](../type-aliases/ColorTheme.md) | `undefined` | The theme to export |
| `withRoot` | `boolean` | `false` | Whether to include the root selector |

## Returns

`string`

The CSS for the theme

## Example

```ts
const theme = generateTheme({ baseColor: '#ff0000', expandPalette: true });
exportThemeToCSS(theme);
// returns '--color-primary-500: #ff0000;'
```

## Defined in

[tailwind/tailwind.ts:140](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.ts#L140)
