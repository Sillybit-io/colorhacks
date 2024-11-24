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

[hacks/hacks.ts:128](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/hacks/hacks.ts#L128)
