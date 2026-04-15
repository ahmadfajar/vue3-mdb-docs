---
description: CSS classes to quickly style the border and border-radius of an element.
---

# Borders

::: lead
CSS classes to quickly style the border and border-radius of an element.
:::

<SmallNote color="teal">Since v2.2.0</SmallNote>


## Border {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| border  | border: 1px solid <span class="code">var(--md-border-color)</span>; |
| border-t | border-top: 1px solid <span class="code">var(--md-border-color)</span>; |
| border-b | border-bottom: 1px solid <span class="code">var(--md-border-color)</span>; |
| border-tb | border-top: 1px solid <span class="code">var(--md-border-color)</span>; <div>border-bottom: 1px solid <span class="code">var(--md-border-color)</span>;</div> |
| border-s | border-left: 1px solid <span class="code">var(--md-border-color)</span>; |
| border-e | border-right: 1px solid <span class="code">var(--md-border-color)</span>; |
| border-se | border-left: 1px solid <span class="code">var(--md-border-color)</span>; <div>border-right: 1px solid <span class="code">var(--md-border-color)</span>;</div> |
| border-0    | border: 0; |
| border-t-0  | border-top: 0; |
| border-b-0  | border-bottom: 0; |
| border-s-0  | border-left: 0; |
| border-e-0  | border-right: 0; |
| border-none | border: none; |
| border-thin | border: thin solid; |

</div>
</div>

## Color {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| border-<span class="code">[color-name]</span> | --md-border-color: <span class="code">[color-value]</span>; |

</div>
</div>

See [applying border colors](/reference/colors#border-color) for more details.

## Radius {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| rounded     | border-radius: <span class="code">var(--md-radius)</span>; |
| rounded-circle | border-radius: 50%; |
| rounded-pill   | border-radius: <span class="code">var(--md-radius-pill)</span>; |
| rounded-0   | border-radius: 0; |
| rounded-t-0 | border-top-left-radius: 0; <div>border-top-right-radius: 0;</div> |
| rounded-b-0 | border-bottom-left-radius: 0; <div>border-bottom-right-radius: 0;</div> |
| rounded-s-0 | border-top-left-radius: 0; <div>border-bottom-left-radius: 0;</div> |
| rounded-e-0 | border-top-right-radius: 0; <div>border-bottom-right-radius: 0;</div> |

</div>
</div> 
