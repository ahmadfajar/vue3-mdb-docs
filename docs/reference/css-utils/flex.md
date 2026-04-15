---
description: CSS classes for controlling the flex items.
---

# Flex

::: lead
CSS classes for controlling the flex items.
:::

<SmallNote color="teal">Since v2.2.0</SmallNote>


## Flex {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| flex-fill        | flex: 1 1; |
| flex-row         | flex-direction: row; |
| flex-row-reverse | flex-direction: row-reverse; |
| flex-col         | flex-direction: column; |
| flex-col-reverse | flex-direction: column-reverse; |
| flex-grow     | flex-grow: 1; |
| flex-grow-0   | flex-grow: 0; | 
| flex-shrink   | flex-shrink: 1; |
| flex-shrink-0 | flex-shrink: 0; |
| flex-nowrap   | flex-wrap: nowrap; |
| flex-wrap     | flex-wrap: wrap; |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-basis-0      | flex-basis: 0; |
| flex-basis-auto   | flex-basis: auto; |
| flex-basis-full   | flex-basis: 100%; |

</div>
</div>

## Justify content {class="mb-3"}

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| justify-start   | justify-content: flex-start; |
| justify-end     | justify-content: flex-end; |
| justify-center  | justify-content: center; |
| justify-between | justify-content: space-between; |
| justify-around  | justify-content: space-around; |
| justify-evenly  | justify-content: space-evenly; |

</div>
</div>

## Alignment {class="mb-3"} 

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles |
|---------|--------|
| items-start    | align-items: flex-start; |
| items-end      | align-items: flex-end; |
| items-center   | align-items: center; |
| items-baseline | align-items: baseline; |
| items-stretch  | align-items: stretch; |
| content-start   | align-content: flex-start; |
| content-end     | align-content: flex-end; |
| content-center  | align-content: center; |
| content-between | align-content: space-between; |
| content-around  | align-content: space-around; |
| content-stretch | align-content: stretch; |
| self-auto     | align-self: auto; |
| self-start    | align-self: flex-start; |
| self-end      | align-self: flex-end; |
| self-center   | align-self: center; |
| self-baseline | align-self: baseline; |
| self-stretch  | align-self: stretch; |

</div>
</div>

## Gap {class="mb-3"} 

<div class="doc-api-reference mt-3">
<div class="doc-table-responsive doc-table-3cols table:font-mono:col-2 table:code:col-2">

| Class   | Styles | Notes |
|---------|--------|-------|
| md-gap-<span class="code">[number]</span> | gap: <span class="code">[result]</span>; | <div class="code">[result] = 0.25rem * [number]</div> <div class="text-subtle">The [number] is ranged from 1 to 12 </div> |
| md-gap-x-<span class="code">[number]</span> | column-gap: <span class="code">[result]</span>; | <div class="code">[result] = 0.25rem * [number]</div> <div class="text-subtle">The [number] is ranged from 1 to 12 </div> |
| md-gap-y-<span class="code">[number]</span> | row-gap: <span class="code">[result]</span>; | <div class="code">[result] = 0.25rem * [number]</div> <div class="text-subtle">The [number] is ranged from 1 to 12 </div> |

</div>
</div>