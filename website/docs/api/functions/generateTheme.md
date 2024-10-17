# generateTheme()

```ts
function generateTheme(options): RegularColorTheme | ExpandedColorTheme
```

Generates a theme based on the given options.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`GenerateThemeOptions`](../interfaces/GenerateThemeOptions.md) | The options for generating the theme. |

## Returns

[`RegularColorTheme`](../interfaces/RegularColorTheme.md) \| [`ExpandedColorTheme`](../interfaces/ExpandedColorTheme.md)

The generated theme.

## Example

```ts
const theme = generateTheme({
  baseColor: '#ff0000',
  expandPalette: true,
  colorScheme: 'complementary',
  infoHue: 200,
  successHue: 120,
  warningHue: 40,
  errorHue: 0
});
```

## Defined in

[tailwind/tailwind.ts:31](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/tailwind/tailwind.ts#L31)
