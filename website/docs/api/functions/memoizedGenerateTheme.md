# memoizedGenerateTheme()

```ts
function memoizedGenerateTheme(options): ColorTheme
```

Memoized version of generateTheme to improve performance for repeated calls with the same options.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`GenerateThemeOptions`](../interfaces/GenerateThemeOptions.md) | The options for generating the theme. |

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

[tailwind/tailwind.ts:100](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/tailwind/tailwind.ts#L100)
