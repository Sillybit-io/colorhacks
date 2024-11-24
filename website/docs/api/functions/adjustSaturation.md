# adjustSaturation()

```ts
function adjustSaturation(
   lightness, 
   baseSaturation, 
   isLightBase, 
   saturationFactor): number
```

Adjusts the saturation based on the lightness and whether the base color is light or dark.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `lightness` | `number` | `undefined` | The lightness value of the color (0-100) |
| `baseSaturation` | `number` | `undefined` | The original saturation of the base color (0-100) |
| `isLightBase` | `boolean` | `undefined` | Whether the base color is considered light |
| `saturationFactor` | `number` | `0.3` | The factor by which to adjust the saturation (default is 0.3) |

## Returns

`number`

The adjusted saturation value (0-100)

## Example

```ts
const adjustedSaturation = adjustSaturation(50, 50, true);
console.log(adjustedSaturation); // Outputs: 35
```

## Defined in

[hacks/hacks.ts:105](https://github.com/Sillybit-io/colorhacks/blob/45b74b39d6ded2b71f4a5f8bced67fd323e8e403/src/features/hacks/hacks.ts#L105)
