# getContrastRatio()

```ts
function getContrastRatio(hexCode1, hexCode2): number
```

Calculate the contrast ratio between two colors

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hexCode1` | `string` | First color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB") |
| `hexCode2` | `string` | Second color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB") |

## Returns

`number`

The contrast ratio between the two colors (a number between 1 and 21)

## Throws

If either hexCode1 or hexCode2 is not a valid hexadecimal color code

## Example

```ts
const ratio = getContrastRatio("#FFFFFF", "#000000");
console.log(ratio); // Outputs: 21
```

## Defined in

[hacks/hacks.ts:49](https://github.com/Sillybit-io/colorhacks/blob/fb76eb3f8201e2f6e24d5eb200be883dc1c98169/src/features/hacks/hacks.ts#L49)
