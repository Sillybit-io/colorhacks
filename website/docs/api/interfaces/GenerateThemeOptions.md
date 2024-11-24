# GenerateThemeOptions\<T\>

Options for generating a color theme

## Example

```ts
const options: GenerateThemeOptions = {
  baseColor: '#ff0000',
  expandPalette: true,
  colorScheme: 'complementary',
  infoHue: 200,
  successHue: 120,
  warningHue: 40,
  errorHue: 0
};
```

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` *extends* `boolean` | `false` | Boolean type parameter that determines if the theme palette should be expanded |

## Properties

### baseColor

```ts
baseColor: `#${string}`;
```

The base color to generate the theme from

#### Defined in

[tailwind/tailwind.type.ts:45](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.type.ts#L45)

***

### colorScheme?

```ts
optional colorScheme: ColorSchemeType;
```

The type of color scheme to generate

#### Defined in

[tailwind/tailwind.type.ts:47](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.type.ts#L47)

***

### errorHue?

```ts
optional errorHue: number;
```

The hue value for error colors

#### Defined in

[tailwind/tailwind.type.ts:51](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.type.ts#L51)

***

### expandPalette?

```ts
optional expandPalette: T;
```

Whether to generate an expanded palette with additional shades

#### Defined in

[tailwind/tailwind.type.ts:46](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.type.ts#L46)

***

### infoHue?

```ts
optional infoHue: number;
```

The hue value for info colors

#### Defined in

[tailwind/tailwind.type.ts:48](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.type.ts#L48)

***

### successHue?

```ts
optional successHue: number;
```

The hue value for success colors

#### Defined in

[tailwind/tailwind.type.ts:49](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.type.ts#L49)

***

### warningHue?

```ts
optional warningHue: number;
```

The hue value for warning colors

#### Defined in

[tailwind/tailwind.type.ts:50](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/tailwind/tailwind.type.ts#L50)
