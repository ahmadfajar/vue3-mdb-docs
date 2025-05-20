---
description: Static utility helper class for working with colors.
---

# Color Class

::: lead
Static utility helper class for working with colors. 
:::

<SmallNote color="teal">Since v2.0.0</SmallNote>

**Example**

```ts
import { Color } from 'vue-mdbootstrap';

const result = Color.rgbaToString({r: 102, g: 132, b: 145, a: 0.45});
// result: rgba(102, 132, 145, 0.45)
```

## hslaToHsva

```ts
class Color {
  static hslaToHsva(color: HSLA): HSVA; 
}
``` 

Convert HSLA to HSVA and returns HSVA color value.
* `color`: The HSLA color value

## hslaToString 

```ts
class Color {
  static hslaToString(color: HSLA): string; 
}
```

Convert HSL/HSLA color to string and returns CSS color string.
* `color`: The HSLA color value

## hsvaToHsla 

```ts
class Color {
  static hsvaToHsla(color: HSVA): HSLA; 
}
```

Convert HSVA to HSLA and returns HSLA color value.
* `color`: The HSVA color value

## hsvaToRgba 

```ts
class Color {
  static hsvaToRgba(color: HSVA): RGBA; 
}
```

Convert HSVA to RGBA and returns RGBA color value.
* `color`: The HSVA color value

## hexToRgba 

```ts
class Color {
  static hexToRgba(color: string): RGBA; 
}
```

Convert CSS HEX color to RGBA color and returns RGBA color value.
* `color`: The css HEX color value

## rgbaToHex 

```ts
class Color {
  static rgbaToHex(color: RGBA): string; 
}
```

Convert RGB/RGBA color to CSS HEX color format and returns CSS HEX color value.
* `color`: The RGB/RGBA color value

## rgbaToHsva 

```ts
class Color {
  static rgbaToHsva(color: RGBA): HSVA; 
}
```

Convert RGBA to HSVA and returns HSVA color value.
* `color`: The RGBA color value

## rgbaToString 

```ts
class Color {
  static rgbaToString(color: RGBA): string; 
}
```

Convert RGB/RGBA color to string and returns CSS color string.
* `color`: The RGB/RGBA color value

## rgbaFromString 

```ts
class Color {
  static rgbaFromString(canvasCtx: CanvasRenderingContext2D, source: string): RGBA; 
}
```

Parse a string to RGBA and returns RGBA color value.
* `canvasCtx`: The canvas rendering context
* `source`: String representing a color.

## brightnessLevel  

```ts
class Color {
  static brightnessLevel(color: RGBA): number; 
}
```

Get brightness level from RGBA color and returns brightness level.
* `color`: The RGB/RGBA color value

## shadeColor  

```ts
class Color {
  static shadeColor(color: string | RGBA, lightness: number): string; 
}
```

Darken or lighten the input color. Use negative `lightness` value to darken the 
input color or otherwise to lighten the input color. Returns color result in CSS 
HEX color format. 

* `color`: The color to darken or lighten
* `lightness`: The lightness level
