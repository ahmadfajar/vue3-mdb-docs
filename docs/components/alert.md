---
outline: [2, 3]
---

# Alert


::: lead
**BsAlert** is a component that provides contextual feedback messages for typical user actions with the
handful of available and flexible alert messages. With the right use of colors, they add some emotional
weight of information, ranging from a simple warning to critical system failure or from an operation
success to neutral information.
:::


## Overview

By default, `<bs-alert>` is set to primary color. You can use `color` property to change its color and
add some emotional weight. Any of [MDBootstrap Colors](/reference/color-variants#mdbootstrap-colors) variants can be 
applied to the `color` property.


::: BlockVue {title="Alert Example"}

```html
<div class="w-100 pt-4 px-4 pb-2">
  <bs-alert>Simple alert with primary color</bs-alert>
</div>
```
:::
