---
outline: [2, 3] 
description: A flexible and extensible content container. It includes sub-component for headers, footers, and content with variety background colors, and powerful display options. 
---

# Card


::: lead
**BsCard** is a flexible and extensible content container. It includes sub-component 
for headers, footers, and content with variety background colors, and powerful display options.
:::


## Overview

**BsCard** uses [Boostrap CSS](https://getbootstrap.com/docs/5.2/components/card/) 
classes and built with as little markup and styles as possible, but still manage to 
deliver control and customization. Built with flexbox, it offers easy alignment and 
mix well with other components. A card may contains a variety of related information, 
such as photos, texts, and links on a single subject. Cards often used as gateway 
to more detailed and complex information. 

`<bs-card>` has no fixed width to start, so they'll naturally fill the full width 
of its parent element. This is easily customized via styles or css classes. 
The default `div` root tag can be easily changed to any other HTML element by 
specifying the value of `tag` property.

::: BlockVue {title="Basic Card Example"}

```html
<div class="my-demo-wrapper" style="max-width: 450px">
  <bs-card>
    <bs-card-body>
      <bs-card-content type="title">Content Title</bs-card-content>
      <bs-card-content type="subtitle">Some quick subtitle</bs-card-content>
      <bs-card-content class="mt-3">
        Some quick example text to build on the card title and make up the bulk 
        of the card's content.
      </bs-card-content>
      <bs-card-content>
        <small class="text-muted">Last updated 3 mins ago</small>
      </bs-card-content>
      <bs-button color="primary">Action 1</bs-button>
      <bs-button color="primary" outlined>Action 2</bs-button>
    </bs-card-body>
  </bs-card>
</div>
```
:::


## Header and Footer

Additionally, you can add header or footer inside `<bs-card>` using `<bs-card-header>` or 
`<bs-card-footer>` component.

::: BlockVue {title="Card Header and Footer Example"}

```html
<div class="my-demo-wrapper" style="max-width: 450px">
  <bs-card>
    <bs-card-header>Card Header</bs-card-header>
    <bs-card-body>
      <bs-card-content type="title">Content Title</bs-card-content>
      <bs-card-content>
        Some quick example text to build on the card title and make up the bulk 
        of the card's content.
      </bs-card-content>
      <bs-card-content>
        <small class="text-muted">
          Last updated 3 mins ago
        </small>
      </bs-card-content>
    </bs-card-body>
    <bs-card-footer>Card Footer</bs-card-footer>
  </bs-card>
</div>
```
:::


## Images

The `img-top-src` property places image at the top of the card, and `img-bottom-src` 
property places image at the bottom of the card. Use `img-top-alt` or `img-bottom-alt` 
property to specify a text for the image's `alt` attribute. 

::: BlockVue {title="Image Inside Card Example"}

```html
<div class="my-demo-wrapper" style="max-width: 450px">
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
```
:::

### Positioning an image {class="mt-lg-5"}

`.card-img-start` places an image at the left side of the card and `.card-img-end` 
places an image at the right side of the card.


::: BlockVue {title="Image Inside Card Example"}

```html
<div class="my-demo-wrapper" style="max-width: 450px">
  <bs-card class="mb-4" shadow>
    <div class="row g-0">
      <div class="col-4">
        <bs-image-holder
          class="card-img-start fs-2 md-fw-light"
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
          class="card-img-end fs-2 md-fw-light"
          placeholder-text="Image"
          y-pos="55%"
        />
      </div>
    </div>
  </bs-card>
</div>
```
:::

### Image with description {class="mt-lg-5"}

Additionally, use `<bs-card-media>`to add description to the image with *title/subtitle*.
Place `<bs-card-media>` after opening the `<bs-card>`'s tag to place the image at the top 
of the card, or place it before closing the `<bs-card>`'s tag to place the image at the 
bottom of the card.

::: BlockVue {title="Image with description inside Card"}

```html
<div class="my-demo-wrapper" style="max-width: 450px">
  <bs-card class="bg-unique text-white mb-4" shadow>
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
  <bs-card class="bg-stylish-color text-white" shadow>
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
```
:::


## Styles

### Background and color 

`<bs-card>` include various options for customizing its background and color.
See [Reference - Color Variants](/reference/color-variants) for more information.

::: BlockVue {title="Card background color example"}

```html
<div class="my-demo-wrapper" style="max-width: 450px">
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
```
:::

### Border {class="mt-lg-5"}

Use [border utilities](/reference/color-variants#border-color-variants) to change 
just the `border-color` of a card. Additionally you can also put `.text-{color}` 
classes on the `<bs-card>` or child component as shown below.

::: BlockVue {title="Card border color example"}

```html
<div class="my-demo-wrapper" style="max-width: 450px">
  <bs-card class="border-blue mb-4">
    <bs-card-header>Card Header</bs-card-header>
    <bs-card-body class="text-primary">
      <bs-card-content type="title">Content Title</bs-card-content>
      <bs-card-content>
        Some quick example text to build on the card title and make up the bulk 
        of the card's content.
      </bs-card-content>
    </bs-card-body>
  </bs-card>
  <bs-card class="border-danger mb-4">
    <bs-card-header>Card Header</bs-card-header>
    <bs-card-body class="text-danger">
      <bs-card-content type="title">Content Title</bs-card-content>
      <bs-card-content>
        Some quick example text to build on the card title and make up the bulk 
        of the card's content.
      </bs-card-content>
    </bs-card-body>
  </bs-card>
  <bs-card class="border-purple">
    <bs-card-header>Card Header</bs-card-header>
    <bs-card-body class="text-default-color">
      <bs-card-content type="title">Content Title</bs-card-content>
      <bs-card-content>
        Some quick example text to build on the card title and make up the bulk 
        of the card's content.
      </bs-card-content>
    </bs-card-body>
  </bs-card>
</div>
```
:::


## Layout

In addition to styling the content within cards, [Bootstrap](https://getbootstrap.com/docs/5.2/components/card/#card-layout) 
includes a few options for laying out series of cards.

### Card groups

Use `.card-group` to render multiple `<bs-card>` as a single attached element 
with equal width and height columns. Card groups start off stacked and use 
`display: flex` to become attached with uniform dimensions starting at the 
`sm` breakpoint.

::: BlockVue {title="Cards Group Example"}

```html
<div class="my-demo-wrapper">
  <div class="card-group">
    <bs-card img-top-src="https://picsum.photos/id/425/600/300.jpg">
      <bs-card-body>
        <bs-card-content type="title">Content Title</bs-card-content>
        <bs-card-content>
          This is a wider card with supporting text below as a natural lead-in 
          to additional content. This content is a little bit longer.
        </bs-card-content>
        <bs-card-content>
          <small class="text-muted">Last updated 3 mins ago</small>
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
          <small class="text-muted">Last updated 3 mins ago</small>
        </bs-card-content>
      </bs-card-body>
    </bs-card>
  </div>
</div>
```
:::

### Card grids {class="mt-lg-5"}

Use the Bootstrap grid system and its 
[.row-cols classes](https://getbootstrap.com/docs/5.2/layout/grid/#row-columns) 
to control how many grid columns (wrapped around the `<bs-card>`) to show 
per row. For example, here’s `.row-cols-1` laying out the cards on one column, 
and `.row-cols-sm-2` splitting four cards to equal width across multiple rows, 
from the small breakpoint up. And when you need equal height, add `.h-100` 
to the cards.

::: BlockVue {title="Cards Grid Example"}

```html
<div class="my-demo-wrapper">
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
            <small class="text-muted">Last updated 3 mins ago</small>
          </bs-card-content>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card img-top-src="https://picsum.photos/id/225/600/300.jpg" class="h-100">
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content>
            This card has supporting text below as a natural lead-in to additional content.
          </bs-card-content>
          <bs-card-content>
            <small class="text-muted">Last updated 3 mins ago</small>
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
            <small class="text-muted">Last updated 3 mins ago</small>
          </bs-card-content>
        </bs-card-body>
      </bs-card>
    </div>
    <div class="col">
      <bs-card img-top-src="https://picsum.photos/id/25/600/300.jpg" class="h-100">
        <bs-card-body>
          <bs-card-content type="title">Content Title</bs-card-content>
          <bs-card-content>
            This card has supporting text below as a natural lead-in to additional content.
          </bs-card-content>
          <bs-card-content>
            <small class="text-muted">Last updated 3 mins ago</small>
          </bs-card-content>
        </bs-card-body>
      </bs-card>
    </div>
  </div>
</div>
```
:::


## CSS Variables

The component css variables inherited from 
[Bootstrap cards](https://getbootstrap.com/docs/5.2/components/card/#css) css variables.

<SmallNote color="teal">Added since v2.0.0</SmallNote>

```scss
--bs-card-spacer-y: 1rem;
--bs-card-spacer-x: 1rem;
--bs-card-title-spacer-y: 0.5rem;
--bs-card-border-width: 1px;
--bs-card-border-color: var(--bs-border-color-translucent);
--bs-card-border-radius: 0.75rem;
--bs-card-inner-border-radius: calc(0.75rem - 1px);
--bs-card-cap-padding-y: 0.5rem;
--bs-card-cap-padding-x: 1rem;
--bs-card-cap-bg: rgba(0, 0, 0, 0.03);
--bs-card-bg: #fff;
--bs-card-img-overlay-padding: 1rem;
--bs-card-group-margin: 0.75rem;

```

### BsCardMedia {#css-card-media class="mt-lg-5"}

<p class="pt-2"><SmallNote color="teal">Added since v2.0.4</SmallNote></p>

```scss
--bs-card-media-bg: rgba(0, 0, 0, .54);
--bs-card-media-color: rgba(255, 255, 255, .8);
--bs-card-media-title-font-size: 1.5rem;
--bs-card-media-title-font-weight: 500;
--bs-card-media-subtitle-font-size: 1.125rem;
--bs-card-media-subtitle-font-weight: 300;

```

## API Reference

### BsCard {#bs-card}

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property       | Type      | Default | Description |
|----------------|-----------|---------|-------------|
| border-off     | `Boolean` | `false` | Sets to `true` to remove the side border of the component. <BsBadge color="info">v2.0.3</BsBadge> |
| img-bottom-alt | `String`  |     | Sets the image `alt` attribute.  |
| img-bottom-src | `String`  |     | The image URL for image placed at the bottom of the card. |
| img-top-alt    | `String`  |     | Sets the image `alt` attribute. |
| img-top-src    | `String`  |     | The image URL for image placed at the top of the card. |
| rounded-off    | `Boolean` | `false` | Sets to `true` to remove the rounded corner of the component. <BsBadge color="info">v2.0.3</BsBadge> |
| shadow         | `Boolean` | `false` | Apply shadow effect to the component. |
| tag            | `String`  | `'div'` | The html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#api-reference">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>


### BsCardHeader {#bs-card-header class="mt-lg-5"}

The component for displaying card header.

<BsTabs v-model="tabs2active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#bs-card-header">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| tag      | `String`  | `'div'` | The html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#bs-card-header">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsCardFooter {#bs-card-footer class="mt-lg-5"}

The component for displaying card footer.

<BsTabs v-model="tabs3active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#bs-card-footer">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| tag      | `String`  | `'div'` | The html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#bs-card-footer">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsCardMedia {#bs-card-media class="mt-lg-5"}

The component for displaying image with description inside a card. 

<BsTabs v-model="tabs4active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#bs-card-media">
    <div class="doc-table-responsive doc-table-props">

| Property    | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| overlay-top | `Boolean` | `false` | Placed text overlay at the top. |
| subtitle    | `String`  |         | Text for image subtitle. |
| title <Badge type="danger">required</Badge> | `String` |  | Text for image title. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#bs-card-media">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the image. |

</div>
  </BsTab>
</BsTabs>

### BsCardBody {#bs-card-body class="mt-lg-5"}

The container for card contents.

<BsTabs v-model="tabs5active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#bs-card-body">
    <div class="doc-table-responsive doc-table-props">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| tag      | `String`  | `'div'` | The html tag used to render the component. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#bs-card-body">
    <div class="doc-table-responsive doc-table-2cols">

| Name    | Description  |
|---------|--------------|
| default | The outlet slot used to place the main content. |

</div>
  </BsTab>
</BsTabs>

### BsCardContent {#bs-card-content class="mt-lg-5"}

The component for displaying text inside a card content. This component helps style consistency of text.

<BsTabs v-model="tabs6active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#bs-card-content">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| tag      | `String` |   | Override html tag generated by `type` property. |
| type     | `String` | `'text'` | Card content variations. Valid values are: `title`, `subtitle`, `text`. |

</div>
  </BsTab>
  <BsTab label="Slots" url="#bs-card-content">
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
