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
      }
    ]
  },
  {
    "type": "category",
    "label": "Functions",
    "items": [
      {
        "type": "doc",
        "id": "api/functions/getColorNameFromHex",
        "label": "getColorNameFromHex"
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
        "id": "api/functions/getHexFromRgb",
        "label": "getHexFromRgb"
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
        "id": "api/functions/isRgbaColor",
        "label": "isRgbaColor"
      },
      {
        "type": "doc",
        "id": "api/functions/isRgbColor",
        "label": "isRgbColor"
      }
    ]
  }
]};
module.exports = typedocSidebar.items;