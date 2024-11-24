# API

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ColorNames](enumerations/ColorNames.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ColorScheme](interfaces/ColorScheme.md) | - |
| [ColorSet](interfaces/ColorSet.md) | A set of colors with different shades |
| [ExpandedColorSet](interfaces/ExpandedColorSet.md) | An expanded color set with shades from 50 to 900 |
| [ExpandedColorTheme](interfaces/ExpandedColorTheme.md) | A theme with different color categories for an expanded palette |
| [GenerateThemeOptions](interfaces/GenerateThemeOptions.md) | Options for generating a color theme |
| [GetColorNameFromHexOptions](interfaces/GetColorNameFromHexOptions.md) | - |
| [GetColorNameFromHexOutput](interfaces/GetColorNameFromHexOutput.md) | - |
| [GetRgbaFromHexOptions](interfaces/GetRgbaFromHexOptions.md) | - |
| [GetRgbaFromHexOutput](interfaces/GetRgbaFromHexOutput.md) | - |
| [RegularColorTheme](interfaces/RegularColorTheme.md) | A theme with different color categories for a regular palette |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [ColorSchemeType](type-aliases/ColorSchemeType.md) | - |
| [ColorTheme](type-aliases/ColorTheme.md) | A theme with different color categories for a color palette |
| [HEX](type-aliases/HEX.md) | - |
| [HSL](type-aliases/HSL.md) | - |
| [ThemeType](type-aliases/ThemeType.md) | A theme type that varies based on the expandPalette boolean parameter |

## Functions

| Function | Description |
| ------ | ------ |
| [adjustHexColor](functions/adjustHexColor.md) | Adjusts the brightness of a hex color by a given amount. |
| [adjustSaturation](functions/adjustSaturation.md) | Adjusts the saturation based on the lightness and whether the base color is light or dark. |
| [checkAccessibility](functions/checkAccessibility.md) | Checks if the contrast ratio between two colors meets the WCAG AA standard for normal text |
| [compareHEXColorsViaHSL](functions/compareHEXColorsViaHSL.md) | Compares two hex colors via HSL |
| [exportThemeToCSS](functions/exportThemeToCSS.md) | Exports the theme to CSS Variables |
| [generateTheme](functions/generateTheme.md) | Generates a color theme based on the provided options |
| [getColorNameFromHex](functions/getColorNameFromHex.md) | Retrieves the color name from a given hexadecimal color code. |
| [getColorNameFromHsl](functions/getColorNameFromHsl.md) | Retrieves the color name from a given HSL color. |
| [getColorNameFromRgb](functions/getColorNameFromRgb.md) | Retrieves the color name from a given RGB color. |
| [getContrastRatio](functions/getContrastRatio.md) | Calculate the contrast ratio between two colors |
| [getContrastRatioWCAG20](functions/getContrastRatioWCAG20.md) | Calculate the WCAG 2.0 contrast ratio between two colors |
| [getHEXfromHSL](functions/getHEXfromHSL.md) | Converts an HSL color to a hex color |
| [getHexFromRgb](functions/getHexFromRgb.md) | Converts an RGB color to a hexadecimal color code. |
| [getHSLfromHEX](functions/getHSLfromHEX.md) | Converts a hex color to an HSL color |
| [getOppositeColor](functions/getOppositeColor.md) | Get the opposite color for text based on the background color |
| [getRgbaFromHex](functions/getRgbaFromHex.md) | Converts a hexadecimal color code to RGBA format. |
| [isHexColor](functions/isHexColor.md) | Check if a string is a valid hex color |
| [isHSLColor](functions/isHSLColor.md) | Checks if a string is a valid HSL color |
| [isRgbaColor](functions/isRgbaColor.md) | Check if a string is a valid RGBA color |
| [isRgbColor](functions/isRgbColor.md) | Check if a string is a valid RGB color |
| [memoizedGenerateTheme](functions/memoizedGenerateTheme.md) | Memoized version of generateTheme to improve performance for repeated calls with the same options. |
