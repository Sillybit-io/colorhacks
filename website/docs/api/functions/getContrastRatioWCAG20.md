# getContrastRatioWCAG20()

```ts
function getContrastRatioWCAG20(hexCode1, hexCode2): number
```

Calculate the WCAG 2.0 contrast ratio between two colors

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hexCode1` | `string` | First color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB") |
| `hexCode2` | `string` | Second color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB") |

## Returns

`number`

The WCAG 2.0 contrast ratio between the two colors (a number between 1 and 21)

## Throws

If either hexCode1 or hexCode2 is not a valid hexadecimal color code

## Example

```ts
const ratio = getContrastRatioWCAG20("#FFFFFF", "#000000");
console.log(ratio); // Outputs: 21
```

## Defined in

[hacks/hacks.ts:79](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/hacks/hacks.ts#L79)
