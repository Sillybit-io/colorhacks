# checkAccessibility()

```ts
function checkAccessibility(backgroundColor, textColor): boolean
```

Checks if the contrast ratio between two colors meets the WCAG AA standard for normal text

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `backgroundColor` | \`#$\{string\}\` | The background color in hexadecimal format |
| `textColor` | \`#$\{string\}\` | The text color in hexadecimal format |

## Returns

`boolean`

- True if the contrast ratio is greater than or equal to 4.5, false otherwise

## Throws

If either backgroundColor or textColor is not a valid hexadecimal color code

## Example

```ts
const isAccessible = checkAccessibility("#FFFFFF", "#000000");
console.log(isAccessible); // Outputs: true
```

## Defined in

[hacks/hacks.ts:128](https://github.com/Sillybit-io/colorhacks/blob/9a1a410a2ab3d0d5aa1082a1583a18ba63dd35e8/src/features/hacks/hacks.ts#L128)
