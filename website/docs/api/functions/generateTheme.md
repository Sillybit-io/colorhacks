# generateTheme()

```ts
function generateTheme<T>(options): ThemeType<T>
```

Generates a color theme based on the provided options

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` *extends* `boolean` | `false` | Boolean type parameter that determines if the theme palette should be expanded |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`GenerateThemeOptions`](../interfaces/GenerateThemeOptions.md)\<`T`\> | The options for generating the theme |

## Returns

[`ThemeType`](../type-aliases/ThemeType.md)\<`T`\>

A complete color theme with all color variations

## Example

```ts
// Generate a regular theme
const regularTheme = generateTheme({
  baseColor: '#3498db'
});

console.log(regularTheme.brand.active);
// Please check ColorSet type for more information

// Generate an expanded theme
const expandedTheme = generateTheme({
  baseColor: '#3498db',
  expandPalette: true,
  colorScheme: 'analogous'
});

console.log(expandedTheme.brand.palette[500]);
// Please check ExpandedColorSet type for more information
```

## Defined in

[tailwind/tailwind.ts:48](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.ts#L48)
