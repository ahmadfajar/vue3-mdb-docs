---
outline: [2, 3] 
description: Card is a flexible and extensible content container. It includes sub-component for headers, footers, and content with variety background colors, and powerful display options. 
---

# Card


::: lead
**BsCard** is a flexible and extensible content container. It includes sub-component 
for headers, footers, and content with variety background colors, and powerful display options.
:::

<SmallNote color="teal">Updated in v2.2.0</SmallNote>


## Overview

**BsCard** is built with as little markup and styles as possible, but still manage to 
deliver control and customization. Built with flexbox, it offers easy alignment and 
mix well with other components. A card may contains a variety of related information, 
such as photos, texts, and links on a single subject. Cards often used as gateway 
to more detailed and complex information. 

`<bs-card>` has no fixed width to start, so they'll naturally fill the full width 
of its parent element. This is easily customized via styles or css classes. 
The default `div` root tag can be easily changed to any other HTML element by 
specifying the value of `tag` property.

::: BlockVue {title="Card Overview"}

```vue
<template>
  <div class="demo-wrapper mobi-card">
    <bs-card>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content type="subtitle">Some quick subtitle</bs-card-content>
        <bs-card-content class="mt-3">
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
        <bs-card-content>
          <small class="text-subtle">Last updated 3 mins ago</small>
        </bs-card-content>
        <div class="flex md-gap-2">
          <bs-button color="primary">Action 1</bs-button>
          <bs-button color="primary" outlined>Action 2</bs-button>
        </div>
      </bs-card-body>
    </bs-card>
  </div>
</template>

```
:::

::: info <BsIcon icon="info_outlined" /><span class="ms-2 h6 mb-0">INFO</span>
**BsCard** originally used [Bootstrap CSS](https://getbootstrap.com/docs/5.2/components/card/) 
classes. However, since v2.2.0, **BsCard** no longer uses Bootstrap CSS. This improvement 
allows **BsCard** to work seamlessly with both TailwindCSS and Bootstrap CSS frameworks.
:::


## Header and Footer

Additionally, you can add header or footer inside `<bs-card>` using `<bs-card-header>` or 
`<bs-card-footer>` component.

::: BlockVue {title="Card Header and Footer"}

```vue
<template>
  <div class="demo-wrapper mobi-card">
    <bs-card>
      <bs-card-header>Card Header</bs-card-header>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
        <bs-card-content>
          <small class="text-subtle">
            Last updated 3 mins ago
          </small>
        </bs-card-content>
      </bs-card-body>
      <bs-card-footer>Card Footer</bs-card-footer>
    </bs-card>
  </div>
</template>

```
:::


## Images

The `img-top-src` property places image at the top of the card, and `img-bottom-src` 
property places image at the bottom of the card. Use `img-top-alt` or `img-bottom-alt` 
property to specify a text for the image's `alt` attribute. 

::: BlockVue {title="Card with Image"}

```vue
<template>
  <div class="demo-wrapper mobi-card">
    <bs-card 
      class="mb-4"
      img-top-src="https://picsum.photos/id/29/600/300.jpg" 
      img-top-alt="Image Top" 
      shadow
    >
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
    </bs-card>
    <bs-card 
      img-bottom-src="https://picsum.photos/id/425/600/300.jpg" 
      img-bottom-alt="Image Bottom" 
      shadow
    >
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
    </bs-card>
  </div>
</template>

```
:::

### Positioning an image {#images-positioning class="mt-lg-5"}

`.card-img-start` places an image at the left side of the card and `.card-img-end` 
places an image at the right side of the card.


::: BlockVue {title="Card with Image - Positioning an image"}

```vue
<template>
  <div class="demo-wrapper mobi-card">
    <bs-card class="mb-4" shadow>
      <div class="row g-0">
        <div class="col-4">
          <bs-image-holder
            class="card-img-start fs-2"
            placeholder-text="Image"
            y-pos="55%"
          />
        </div>
        <div class="col-8">
          <bs-card-body>
            <bs-card-content type="title">Content Title</bs-card-content>
            <bs-card-content>
              Some quick example text to build on the card title and make up the bulk 
              of the card's content.
            </bs-card-content>
          </bs-card-body>
        </div>
      </div>
    </bs-card>
    <bs-card shadow>
      <div class="row g-0">
        <div class="col-8">
          <bs-card-body>
            <bs-card-content type="title">Content Title</bs-card-content>
            <bs-card-content>
              Some quick example text to build on the card title and make up the bulk 
              of the card's content.
            </bs-card-content>
          </bs-card-body>
        </div>
        <div class="col-4">
          <bs-image-holder
            class="card-img-end fs-2"
            placeholder-text="Image"
            y-pos="55%"
          />
        </div>
      </div>
    </bs-card>
  </div>
</template>

```
:::

### Image with description {#images-with-description class="mt-lg-5"}

Additionally, use `<bs-card-media>`to add description to the image with *title/subtitle*.
Place `<bs-card-media>` after opening the `<bs-card>`'s tag to place the image at the top 
of the card, or place it before closing the `<bs-card>`'s tag to place the image at the 
bottom of the card.

::: BlockVue {title="Card with Image - Image Description"}

```vue
<template>
  <div class="demo-wrapper mobi-card">
    <bs-card class="bg-unique text-white mb-4" border-off>
      <bs-card-media title="Image Title" subtitle="Image Subtitle">
        <img src="https://picsum.photos/id/25/600/300.jpg" alt="image">        
      </bs-card-media>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
    </bs-card>
    <bs-card class="bg-stylish-color text-white" border-off>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
      <bs-card-media title="Image Title" subtitle="Image Subtitle">
        <img src="https://picsum.photos/id/225/600/300.jpg" alt="image">        
      </bs-card-media>
    </bs-card>
  </div>
</template>

```
:::


## Styles

### Background and color 

`<bs-card>` include various options for customizing its background and color.
See [Reference - Color Variants](/reference/colors) for more information.

::: BlockVue {title="Card Styles - Background and Color"}

```vue
<template>
  <div class="demo-wrapper mobi-card">
    <bs-card class="bg-primary text-white mb-4" shadow>
      <bs-card-header>With bg-primary</bs-card-header>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
      <bs-card-footer>Card Footer</bs-card-footer>
    </bs-card>
    <bs-card class="bg-secondary text-white mb-4" shadow>
      <bs-card-header>With bg-secondary</bs-card-header>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
      <bs-card-footer>Card Footer</bs-card-footer>
    </bs-card>
    <bs-card class="bg-success text-white mb-4" shadow>
      <bs-card-header>With bg-success</bs-card-header>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
      <bs-card-footer>Card Footer</bs-card-footer>
    </bs-card>
    <bs-card class="bg-danger text-white" shadow>
      <bs-card-header>With bg-danger</bs-card-header>
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
      <bs-card-footer>Card Footer</bs-card-footer>
    </bs-card>
  </div>
</template>

```
:::

### Border {class="mt-lg-5"}

Use [border utilities](/reference/colors#border-color) to change 
the `border-color` of a card. Additionally you can also put `.text-{color}` 
classes on the `<bs-card>` or child component as shown below.

::: BlockVue {title="Card Styles - Border Color"}

```vue
<template>
  <div class="demo-wrapper mobi-card">
    <bs-card class="border border-blue mb-4">
      <bs-card-header>Card Header</bs-card-header>
      <bs-card-body class="text-primary">
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
    </bs-card>
    <bs-card class="border border-danger mb-4">
      <bs-card-header>Card Header</bs-card-header>
      <bs-card-body class="text-danger">
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
    </bs-card>
    <bs-card class="border border-purple">
      <bs-card-header>Card Header</bs-card-header>
      <bs-card-body class="text-default">
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          Some quick example text to build on the card title and make up the bulk 
          of the card's content.
        </bs-card-content>
      </bs-card-body>
    </bs-card>
  </div>
</template>

```
:::


## Layout

In addition to styling the content within cards, **Vue MDBootstrap**
provides css utilities for laying out series of cards.

### Card groups {#layout-card-groups}

Use `.card-group` to render multiple `<bs-card>` as a single attached element 
with equal width and height columns. Card groups start off stacked and use 
`display: flex` to become attached with uniform dimensions starting at the 
`sm` breakpoint.

::: BlockVue {title="Card Layout - Card Groups"}

```vue
<template>
  <div class="demo-wrapper">
    <div class="card-group">
      <bs-card img-top-src="https://picsum.photos/id/425/600/300.jpg">
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content>
            This is a wider card with supporting text below as a natural lead-in 
            to additional content. This content is a little bit longer.
          </bs-card-content>
          <bs-card-content>
            <small class="text-subtle">Last updated 3 mins ago</small>
          </bs-card-content>
        </bs-card-body>
      </bs-card>
      <bs-card img-top-src="https://picsum.photos/id/225/600/300.jpg">
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content>
            This card has supporting text below as a natural lead-in to additional content.
          </bs-card-content>
          <bs-card-content>
            <small class="text-subtle">Last updated 3 mins ago</small>
          </bs-card-content>
        </bs-card-body>
      </bs-card>
    </div>
  </div>
</template>

```
:::

### Card grids {#layout-card-grids class="mt-lg-5"}

Use `.row-cols` classes to control how many grid columns (wrapped around the 
`<bs-card>`) to show per row. For example, here’s `.row-cols-1` laying out the 
cards on one column, and `.row-cols-sm-2` splitting four cards to equal width 
across multiple rows, from the small breakpoint up. And when you need equal 
height, add `.h-full` to the cards.

::: BlockVue {title="Card Layout - Card Grids"}

```vue
<template>
  <div class="demo-wrapper">
    <div class="row row-cols-1 row-cols-sm-2 g-4">
      <div class="col">
        <bs-card img-top-src="https://picsum.photos/id/425/600/300.jpg">
          <bs-card-body>
            <bs-card-content type="title">Content Title</bs-card-content>
            <bs-card-content>
              This is a wider card with supporting text below as a natural lead-in 
              to additional content. This content is a little bit longer.
            </bs-card-content>
            <bs-card-content>
              <small class="text-subtle">Last updated 3 mins ago</small>
            </bs-card-content>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col">
        <bs-card img-top-src="https://picsum.photos/id/225/600/300.jpg" class="h-full">
          <bs-card-body>
            <bs-card-content type="title">Content Title</bs-card-content>
            <bs-card-content>
              This card has supporting text below as a natural lead-in to additional content.
            </bs-card-content>
            <bs-card-content>
              <small class="text-subtle">Last updated 3 mins ago</small>
            </bs-card-content>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col">
        <bs-card img-top-src="https://picsum.photos/id/29/600/300.jpg">
          <bs-card-body>
            <bs-card-content type="title">Content Title</bs-card-content>
            <bs-card-content>
              This is a wider card with supporting text below as a natural lead-in 
              to additional content. This content is a little bit longer.
            </bs-card-content>
            <bs-card-content>
              <small class="text-subtle">Last updated 3 mins ago</small>
            </bs-card-content>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col">
        <bs-card img-top-src="https://picsum.photos/id/25/600/300.jpg" class="h-full">
          <bs-card-body>
            <bs-card-content type="title">Content Title</bs-card-content>
            <bs-card-content>
              This card has supporting text below as a natural lead-in to additional content.
            </bs-card-content>
            <bs-card-content>
              <small class="text-subtle">Last updated 3 mins ago</small>
            </bs-card-content>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </div>
</template>

```
:::


## CSS Variables

As CSS technology evolves, Vue MDBootstrap introduces local CSS variables on 
`.md-card` for better customization.

<SmallNote color="teal">Updated in v2.2.0</SmallNote>

```scss
.md-card {
  --md-card-bg: var(--background-secondary);
  --md-card-color: var(--foreground-secondary);
  --md-card-border-color: #{vars.$card-border-color};
  --md-card-border-radius: #{vars.$card-border-radius};
  --md-card-border-width: #{vars.$card-border-width};
  --md-card-inner-border-radius: calc(var(--md-card-border-radius) - 1px);
  --md-card-title-spacer-y: #{vars.$card-title-spacer-y};
  --md-card-spacer-y: #{vars.$card-spacer-y};
  --md-card-spacer-x: #{vars.$card-spacer-x};
  --md-card-group-margin: #{vars.$spacing * 0.75};
  --md-card-cap-bg: #{vars.$card-cap-bg};
  --md-card-cap-color: ;
  --md-card-cap-padding-x: #{vars.$card-cap-padding-x};
  --md-card-cap-padding-y: #{vars.$card-cap-padding-y};
}    

```

### BsCardMedia {#css-variables-card-media class="mt-lg-5"}

<SmallNote color="teal" class="mt-4">Updated in v2.2.0</SmallNote>

```scss
.md-card {
  --md-card-media-bg: oklch(0 0 0 / 0.54);
  --md-card-media-color: oklch(1 0 89.876 / 0.8);
  --md-card-media-padding-x: #{vars.$padding-md};
  --md-card-media-padding-y: #{vars.$padding-md};
  --md-card-media-title-font-size: 1.5em;
  --md-card-media-title-font-weight: var(--font-weight-medium);
  --md-card-media-subtitle-font-weight: var(--font-weight-light);
  --md-card-media-subtitle-font-size: 1.125em;
}    

```

## API Reference

### BsCard {#api-reference-card}

<BsTabs v-model="tabs1active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property       | Type      | Default | Description |
|----------------|-----------|---------|-------------|
| border-off     | `Boolean` | `false` | Sets to `true` to remove the side border of the component. <MdBadge color="info">v2.0.3</MdBadge> |
| img-bottom-alt | `String`  |     | Sets the image `alt` attribute.  |
| img-bottom-src | `String`  |     | The image URL for image placed at the bottom of the card. |
| img-top-alt    | `String`  |     | Sets the image `alt` attribute. |
| img-top-src    | `String`  |     | The image URL for image placed at the top of the card. |
| rounded-off    | `Boolean` | `false` | Sets to `true` to remove the rounded corner of the component. <MdBadge color="info">v2.0.3</MdBadge> |
| shadow         | `Boolean` | `false` | Apply shadow effect to the component. |
| tag            | `String`  | `'div'` | The html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsCardHeader {#api-reference-card-header class="mt-lg-5"}

The component for displaying card header.

<BsTabs v-model="tabs2active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| tag      | `String`  | `'div'` | The html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsCardFooter {#api-reference-card-footer class="mt-lg-5"}

The component for displaying card footer.

<BsTabs v-model="tabs3active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| tag      | `String`  | `'div'` | The html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsCardMedia {#api-reference-card-media class="mt-lg-5"}

The component for displaying image with description inside a card. 

<BsTabs v-model="tabs4active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| overlay-top | `Boolean` | `false` | Placed text overlay at the top. |
| subtitle    | `String`  |         | Text for image subtitle. |
| title <Badge type="danger">required</Badge> | `String` |  | Text for image title. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name     | Description  |
|----------|--------------|
| default  | The outlet slot used to place the image. |
| title    | The outlet slot used to place custom title for the image. <MdBadge color="info">v2.2.0</MdBadge> |
| subtitle | The outlet slot used to place custom subtitle for the image. <MdBadge color="info">v2.2.0</MdBadge> |

</div>
  </BsTab>
</BsTabs>

### BsCardBody {#api-reference-card-body class="mt-lg-5"}

The container for card contents.

<BsTabs v-model="tabs5active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| tag      | `String`  | `'div'` | The html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsCardContent {#api-reference-card-content class="mt-lg-5"}

The component for displaying text inside a card content. This component helps style consistency of text.

<BsTabs v-model="tabs6active" variant="md3" class="doc-api-reference" style="margin-top: 2rem">
  <BsTab label="Props">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| tag      | `String` |   | Override html tag generated by `type` property. |
| type     | `String` | `'text'` | Card content variations. Valid values are: `title`, `subtitle`, `text`. |

</div>
  </BsTab>
  <BsTab label="Slots">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
const tabs2active = ref(0);
const tabs3active = ref(0);
const tabs4active = ref(0);
const tabs5active = ref(0);
const tabs6active = ref(0);
</script>
