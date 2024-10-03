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
        "id": "api/functions/getRgbaFromHex",
        "label": "getRgbaFromHex"
      }
    ]
  }
]};
module.exports = typedocSidebar.items;