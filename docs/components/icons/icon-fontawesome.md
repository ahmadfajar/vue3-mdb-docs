# Icon Font Awesome

::: lead
**BsIconFontawesome** is small, and a lightweight component. It can be used inside almost
any component or html element. **BsIconFontawesome** loads free icons from
[Font Awesome](https://fontawesome.com/v6/search?o=r&m=free) dynamically.
:::

<SmallNote color="teal">Added since v2.1.0</SmallNote>


## Overview

The icon's name used by **BsIconFontawesome** is the same as in
[Font Awesome website](https://fontawesome.com/v6/search?o=r&m=free).
**BsIconFontawesome** has three icon variants, namely: _Solid_ (default), _Regular_, and _Light_.

The `size` property is used to set the icon size. And if not set, the default size
will be used.

::: BlockVue {title="Basic Icon FontAwesome Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Solid</h6>
      <div class="d-flex align-items-center">
        <div class="d-inline-flex mx-2"><bs-icon-fontawesome icon="house" size="36" /></div>
        <div class="d-inline-flex mx-2"><bs-icon-fontawesome icon="circle-user" size="36" /></div>
        <div class="d-inline-flex mx-2"><bs-icon-fontawesome icon="envelope" size="36" /></div>
        <div class="d-inline-flex mx-2"><bs-icon-fontawesome icon="gift" size="36" /></div>
        <div class="d-inline-flex mx-2"><bs-icon-fontawesome icon="thumbs-up" size="36" /></div>
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Regular</h6>
      <div class="d-flex align-items-center">
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="house" size="36" variant="regular" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="circle-user" size="36" variant="regular" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="envelope" size="36" variant="regular" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="gift" size="36" variant="regular" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="thumbs-up" size="36" variant="regular" />
        </div>
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Light</h6>
      <div class="d-flex align-items-center">
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="house" size="36" variant="light" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="circle-user" size="36" variant="light" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="envelope" size="36" variant="light" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="gift" size="36" variant="light" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="thumbs-up" size="36" variant="light" />
        </div>
      </div>
    </div>
  </div>
</div>
```
:::


## Styling an Icon

`<bs-icon-fontawesome>` can be styles with css class or inline style.

::: BlockVue {title="Icon FontAwesome Style Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <h6 class="mb-3">Solid</h6>
      <div class="d-flex align-items-center">
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="house" size="36" class="text-purple" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="circle-user" size="36" class="text-purple" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="gear" size="36" class="text-purple" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="trash-can" size="36" class="text-purple" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="cart-shopping" size="36" class="text-purple" />
        </div>
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Regular</h6>
      <div class="d-flex align-items-center">
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="house" size="36" class="text-primary" variant="regular" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome
            icon="circle-user"
            size="36"
            class="text-primary"
            variant="regular"
          />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="gear" size="36" class="text-primary" variant="regular" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome icon="trash-can" size="36" class="text-primary" variant="regular" />
        </div>
        <div class="d-inline-flex mx-2">
          <bs-icon-fontawesome
            icon="cart-shopping"
            size="36"
            class="text-primary"
            variant="regular"
          />
        </div>
      </div>
    </div>
  </div>
</div>
```
:::


## Rotating an Icon

Additionally, you can also rotate the icon to some extent. Use `flip` property or `rotation`
property to rotate the icon, but do not use both property together.

::: BlockVue {title="Rotating Icon FontAwesome Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3 text-center">
    <div class="col">
      <h6 class="mb-3">Flip</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-fontawesome icon="cart-shopping" size="36" flip="horizontal" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-fontawesome icon="cart-shopping" size="36" flip="vertical" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-fontawesome icon="cart-shopping" size="36" flip="both" />
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Rotate</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-fontawesome icon="plane" size="36" rotate="90" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-fontawesome icon="plane" size="36" rotate="180" />
      </div>
      <div class="d-inline-flex mx-2">
        <bs-icon-fontawesome icon="plane" size="36" rotate="270" />
      </div>
    </div>
  </div>
</div>
```
:::

## Animation

`<bs-icon-fontawesome>` also has built-in animations, which are: _Spin_ and _Pulse_.

::: BlockVue {title="Icon FontAwesome Animation Example"}

```html
<div class="w-100 p-3 bg-white rounded-3">
  <div class="row row-cols-1 row-cols-md-2 g-3 text-center">
    <div class="col">
      <h6 class="mb-3">Spin animation</h6>
      <div class="d-inline-flex mx-2">
        <bs-icon-fontawesome icon="compass" size="42" variant="regular" spin />
      </div>
    </div>
    <div class="col">
      <h6 class="mb-3">Pulse animation</h6>
      <div class="d-inline-flex mx-2"><bs-icon-fontawesome icon="gear" size="42" pulse /></div>
    </div>
  </div>
</div>
```
:::


## API Reference

<BsTabs v-model="tabs1active" variant="material" color="grey-700" class="doc-api-reference">
  <BsTab label="Props" url="#api-reference">
    <div class="doc-table-responsive doc-table-props">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| flip     | `String` |         | Flip the icon, valid values are: `horizontal`, `vertical`, `both`. |
| height   | `Number` | `24`    | The icon's height in pixel. |
| icon <Badge type="danger">required</Badge> | `String` |  | The icon's name. Use any valid icon name from [Font Awesome website](https://fontawesome.com/v6/search?o=r&m=free). |
| pulse    | `Boolean`| `false` | Apply **pulse** animation. |
| rotate   | `Number` |         | Rotate the icon, valid values are: `90`, `180`, `270`. |
| size     | `Number` |         | Shortcut to create icon with equal height and width. |
| spin     | `Boolean`| `false` | Apply **spin** animation. |
| variant  | `String` | `'solid'` | Icon style variant, valid values are: `regular`, `solid`, `light`. |
| version  | `String` | `'6.7.1'` | Font Awesome vendor version. |
| width    | `Number` | `24`      | The icon's width in pixel. |

</div>
  </BsTab>
</BsTabs>


<script lang="ts" setup>
import { ref } from 'vue';

const tabs1active = ref(0);
</script>
