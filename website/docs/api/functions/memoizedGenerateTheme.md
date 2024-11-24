# memoizedGenerateTheme()

```ts
function memoizedGenerateTheme(options): ColorTheme
```

Memoized version of generateTheme to improve performance for repeated calls with the same options.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`GenerateThemeOptions`](../interfaces/GenerateThemeOptions.md)\<`false`\> | The options for generating the theme. |

## Returns

[`ColorTheme`](../type-aliases/ColorTheme.md)

The generated theme.

## Example

```ts
const memoizedGenerateTheme = memoizedGenerateTheme();
const theme1 = memoizedGenerateTheme({ baseColor: '#ff0000', expandPalette: true });
const theme2 = memoizedGenerateTheme({ baseColor: '#ff0000', expandPalette: true });
console.log(theme1 === theme2); // true
```

## Defined in

[tailwind/tailwind.ts:117](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.ts#L117)
