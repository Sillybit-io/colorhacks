# ThemeType\<T\>

```ts
type ThemeType<T>: T extends true ? ExpandedColorTheme : RegularColorTheme;
```

A theme type that varies based on the expandPalette boolean parameter

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* `boolean` | Boolean type parameter that determines if the theme is expanded |

## Returns

Returns ExpandedColorTheme if T is true, otherwise RegularColorTheme

## Example

```ts
// Regular theme
type RegularTheme = ThemeType<false>;

// Expanded theme
type ExpandedTheme = ThemeType<true>;
```

## Defined in

[tailwind/tailwind.type.ts:17](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.type.ts#L17)
