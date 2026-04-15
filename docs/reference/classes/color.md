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

<div class="doc-api">

## hslaToHsva

```ts
class Color {
  static hslaToHsva(color: HSLA): HSVA; 
}
``` 

Convert HSL color space to HSV color space and returns HSVA color value.

**Details**:
* `color`: The HSLA color value. **Hue** as degrees [0..360], **Saturation** and **Lightness** as number in range [0..1].

## hslaToRgba

```ts
class Color {
  static hslaToRgba(color: HSLA): RGBA; 
}
``` 
<SmallNote color="teal">Added in v2.2.0</SmallNote> 

Convert HSL color space to sRGB color space and returns RGBA color value. 
**Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

**Details**:
* `color`: The HSLA color value. **Hue** as degrees [0..360], **Saturation** and **Lightness** as number in range [0..1].

## hslaToString 

```ts
class Color {
  static hslaToString(color: HSLA): string; 
}
```

Convert HSL/HSLA color value to string and returns CSS color string.

**Details**:
* `color`: The HSLA color value. **Hue** as degrees [0..360], **Saturation** and **Lightness** as number in range [0..1].

## hsvaToHsla 

```ts
class Color {
  static hsvaToHsla(color: HSVA): HSLA; 
}
```

Convert HSV color space to HSL color space and returns HSLA color value.
**Hue** as degrees [0..360], **Saturation** and **Lightness** as number in range [0..100].

**Details**:
* `color`: The HSVA color value

## hsvaToRgba 

```ts
class Color {
  static hsvaToRgba(color: HSVA): RGBA; 
}
```

Convert HSV color space to sRGB color space and returns RGBA color value. 
**Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

**Details**:
* `color`: The HSVA color value

## hexToRgba 

```ts
class Color {
  static hexToRgba(color: string): RGBA; 
}
```

Convert CSS HEX color format to sRGB color space and returns RGBA color value. 
**Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

**Details**:
* `color`: The css HEX color value

## oklchToRgba 

```ts
class Color {
  static oklchToRgba(color: LCHA): RGBA; 
}
```

<SmallNote color="teal">Added in v2.2.0</SmallNote> 

Convert OKLCH color space to sRGB color space and returns RGBA color value. 
**Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

**Details**:
* `color`: The OKLCH color value

## oklchToString 

```ts
class Color {
  static oklchToString(color: LCHA): string; 
}
```

<SmallNote color="teal">Added in v2.2.0</SmallNote> 

Convert OKLCH color space to string and returns CSS color string. 

**Details**:
* `color`: The OKLCH value. **Lightness**, **Chroma** as number in range [0..1] and **Hue** as degrees [0..360].

## oklchFromString 

```ts
class Color {
  static oklchFromString(source: string): LCHA; 
}
```

<SmallNote color="teal">Added in v2.2.0</SmallNote> 

Parse a string that represent `oklch` color formatted string and returns LCHA color value. 

**Details**:
* `source`: The `oklch` color formatted string.

## rgbaToHex 

```ts
class Color {
  static rgbaToHex(color: RGBA): string; 
}
```

Convert RGB/RGBA color value to CSS HEX color format and returns CSS HEX color value.

**Details**:
* `color`: The RGB/RGBA color value. **Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

## rgbaToHsla 

```ts
class Color {
  static rgbaToHsla(color: RGBA): HSLA; 
}
```

<SmallNote color="teal">Added in v2.2.0</SmallNote> 

Convert sRGB color space to HSL color space and returns HSLA color value. 
**Hue** as degrees [0..360], **Saturation** and **Lightness** as number in range [0..100].

**Details**:
* `color`: The RGBA color value. **Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

## rgbaToHsva 

```ts
class Color {
  static rgbaToHsva(color: RGBA): HSVA; 
}
```

Convert sRGB color space to HSV color space and returns HSVA color value.

**Details**:
* `color`: The RGBA color value. **Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

## rgbaToOklch 

```ts
class Color {
  static rgbaToOklch(color: RGBA): LCHA; 
}
```

<SmallNote color="teal">Added in v2.2.0</SmallNote> 

Convert sRGB color space to OKLCH color space and returns LCHA color value. 
**Lightness**, **Chroma** as number in range [0..1] and **Hue** as degrees [0..360].

**Details**:
* `color`: The RGBA color value. **Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

## rgbaToString 

```ts
class Color {
  static rgbaToString(color: RGBA): string; 
}
```

Convert RGB/RGBA color value to string and returns CSS color string.

**Details**:
* `color`: The RGB/RGBA color value. **Red**, **Green**, **Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

## rgbaFromString 

```ts
class Color {
  static rgbaFromString(canvasCtx: CanvasRenderingContext2D, source: string): RGBA; 
}
```

Parse a string to RGBA and returns RGBA color value. **Red**, **Green**, 
**Blue** as number in range [0..255], and **Alpha** as number in range [0..1].

**Details**:
* `canvasCtx`: The canvas rendering context
* `source`: String representing a color.

## brightnessLevel  

```ts
class Color {
  static brightnessLevel(color: string | RGBA): number; 
}
```

Get brightness level from RGBA color and returns brightness level in range [1..255].

**Details**:
* `color`: The RGBA color value or HEX color formatted string

## lightnessLevel  

```ts
class Color {
  static lightnessLevel(color: RGBA | HSLA | LCHA): number; 
}
```

<SmallNote color="teal">Added in v2.2.0</SmallNote> 

Get Lightness level from `RGBA`, `HSLA` or `OKLCH` color object and returns lightness 
level in range [1..100].

**Details**:
* `color`: The `RGBA`, `HSLA` or `LCHA` color value

## shadeColor  

```ts
class Color {
  static shadeColor(color: string | RGBA, lightness: number): string; 
}
```

Darken or lighten the input color. Use negative `lightness` value to darken the 
input color or otherwise to lighten the input color. Returns color result in CSS 
HEX color format. 

**Details**:
* `color`: The color to darken or lighten
* `lightness`: The lightness level

</div>