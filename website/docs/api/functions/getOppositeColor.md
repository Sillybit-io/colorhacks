# getOppositeColor()

```ts
function getOppositeColor(
   hexCode, 
   darkColor, 
   lightColor): string
```

Get the opposite color for text based on the background color

## Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `hexCode` | `string` | `undefined` |
| `darkColor` | `string` | `'#000000'` |
| `lightColor` | `string` | `'#FFFFFF'` |

## Returns

`string`

Opposite color for text in hex format

## Throws

If the provided hexCode is invalid

## Example

```ts
const oppositeColor = getOppositeColor({ hexCode: "#FFFFFF" });
console.log(oppositeColor); // Outputs: "#000000"
```

## Defined in

hacks/hacks.ts:19