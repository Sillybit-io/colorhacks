// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: [
  {
    "type": "category",
    "label": "Enumerations",
    "items": [
      {
        "type": "doc",
        "id": "api/enumerations/ColorNames",
        "label": "ColorNames"
      }
    ]
  },
  {
    "type": "category",
    "label": "Interfaces",
    "items": [
      {
        "type": "doc",
        "id": "api/interfaces/ColorSet",
        "label": "ColorSet"
      },
      {
        "type": "doc",
        "id": "api/interfaces/ExpandedColorTheme",
        "label": "ExpandedColorTheme"
      },
      {
        "type": "doc",
        "id": "api/interfaces/GenerateThemeOptions",
        "label": "GenerateThemeOptions"
      },
      {
        "type": "doc",
        "id": "api/interfaces/GetColorNameFromHexOptions",
        "label": "GetColorNameFromHexOptions"
      },
      {
        "type": "doc",
        "id": "api/interfaces/GetColorNameFromHexOutput",
        "label": "GetColorNameFromHexOutput"
      },
      {
        "type": "doc",
        "id": "api/interfaces/GetRgbaFromHexOptions",
        "label": "GetRgbaFromHexOptions"
      },
      {
        "type": "doc",
        "id": "api/interfaces/GetRgbaFromHexOutput",
        "label": "GetRgbaFromHexOutput"
      },
      {
        "type": "doc",
        "id": "api/interfaces/RegularColorTheme",
        "label": "RegularColorTheme"
      }
    ]
  },
  {
    "type": "category",
    "label": "Type Aliases",
    "items": [
      {
        "type": "doc",
        "id": "api/type-aliases/ColorTheme",
        "label": "ColorTheme"
      },
      {
        "type": "doc",
        "id": "api/type-aliases/ExpandedColorSet",
        "label": "ExpandedColorSet"
      },
      {
        "type": "doc",
        "id": "api/type-aliases/HEX",
        "label": "HEX"
      }
    ]
  },
  {
    "type": "category",
    "label": "Functions",
    "items": [
      {
        "type": "doc",
        "id": "api/functions/adjustHexColor",
        "label": "adjustHexColor"
      },
      {
        "type": "doc",
        "id": "api/functions/adjustSaturation",
        "label": "adjustSaturation"
      },
      {
        "type": "doc",
        "id": "api/functions/checkAccessibility",
        "label": "checkAccessibility"
      },
      {
        "type": "doc",
        "id": "api/functions/compareHEXColorsViaHSL",
        "label": "compareHEXColorsViaHSL"
      },
      {
        "type": "doc",
        "id": "api/functions/exportThemeToCSS",
        "label": "exportThemeToCSS"
      },
      {
        "type": "doc",
        "id": "api/functions/generateTheme",
        "label": "generateTheme"
      },
      {
        "type": "doc",
        "id": "api/functions/getColorNameFromHex",
        "label": "getColorNameFromHex"
      },
      {
        "type": "doc",
        "id": "api/functions/getColorNameFromHsl",
        "label": "getColorNameFromHsl"
      },
      {
        "type": "doc",
        "id": "api/functions/getColorNameFromRgb",
        "label": "getColorNameFromRgb"
      },
      {
        "type": "doc",
        "id": "api/functions/getContrastRatio",
        "label": "getContrastRatio"
      },
      {
        "type": "doc",
        "id": "api/functions/getContrastRatioWCAG20",
        "label": "getContrastRatioWCAG20"
      },
      {
        "type": "doc",
        "id": "api/functions/getHEXfromHSL",
        "label": "getHEXfromHSL"
      },
      {
        "type": "doc",
        "id": "api/functions/getHexFromRgb",
        "label": "getHexFromRgb"
      },
      {
        "type": "doc",
        "id": "api/functions/getHSLfromHEX",
        "label": "getHSLfromHEX"
      },
      {
        "type": "doc",
        "id": "api/functions/getOppositeColor",
        "label": "getOppositeColor"
      },
      {
        "type": "doc",
        "id": "api/functions/getRgbaFromHex",
        "label": "getRgbaFromHex"
      },
      {
        "type": "doc",
        "id": "api/functions/isHexColor",
        "label": "isHexColor"
      },
      {
        "type": "doc",
        "id": "api/functions/isHSLColor",
        "label": "isHSLColor"
      },
      {
        "type": "doc",
        "id": "api/functions/isRgbaColor",
        "label": "isRgbaColor"
      },
      {
        "type": "doc",
        "id": "api/functions/isRgbColor",
        "label": "isRgbColor"
      },
      {
        "type": "doc",
        "id": "api/functions/memoizedGenerateTheme",
        "label": "memoizedGenerateTheme"
      }
    ]
  }
]};
module.exports = typedocSidebar.items;