---
description: CSS classes to quickly style the text color, font-size and font-weight of an element.
---

# Text

::: lead
CSS classes to quickly style the text color, font-size and font-weight of an element.
:::

<SmallNote color="teal">Since v2.2.0</SmallNote>

## Alignment {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| text-start | text-align: start; |
| text-center | text-align: center; |
| text-end | text-align: end; |
| text-justify | text-align: justify; |

</div>
</div>

## Color {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles | Notes |
|---------|--------|-------|
| text-bg-surface | background-color: <span class="code">var(--background)</span>; <div>color: <span class="code">var(--foreground)</span>;</div> | |
| text-bg-surface-secondary | background-color: <span class="code">var(--background-secondary)</span>; <div>color: <span class="code">var(--foreground-secondary)</span>;</div> | |
| text-bg-surface-tertiary | background-color: <span class="code">var(--background-tertiary)</span>; <div>color: <span class="code">var(--foreground-tertiary)</span>;</div> | |
| text-subtle | color: <span class="code">var(--foreground-subtle)</span>; | |
| text-subtle-secondary | color: <span class="code">var(--foreground-subtle-secondary)</span>; | |
| text-subtle-tertiary | color: <span class="code">var(--foreground-subtle-tertiary)</span>; | |
| text-<span class="code">[color-name]</span> | color: <span class="code">[color-value]</span>; | See [applying text colors](/reference/colors#text-color) for more details. |
| text-bg-<span class="code">[color-name]</span> | color: <span class="code">[color-value]</span>; | Valid color names are: `default`, `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light` and `dark`. |

</div>
</div>

## Font Size {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| h1 | font-size: calc(1.375rem + 1.5vw); |
| h2 | font-size: calc(1.325rem + 0.9vw); |
| h3 | font-size: calc(1.3rem + 0.6vw); |
| h4 | font-size: calc(1.275rem + 0.3vw); |
| h5 | font-size: 1.25rem; |

</div>
</div>

## Font Weight {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| font-weight-light | font-weight: 300; |
| font-weight-normal | font-weight: 400; |
| font-weight-medium | font-weight: 500; |
| font-weight-semibold | font-weight: 600; |
| font-weight-bold | font-weight: 700; |
| font-weight-bolder | font-weight: 900; |

</div>
</div>
