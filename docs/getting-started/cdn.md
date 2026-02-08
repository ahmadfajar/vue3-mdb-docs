# Quick Guide with CDN

::: lead
Use CDN resources to use Vue MDBootstrap as web components to build a web page.
:::


## CDN Links


You can get the latest version of Vue MDBootstrap directly from
[unpkg](https://unpkg.com/) or [jsdelivr](https://www.jsdelivr.com/package/npm/vue-mdbootstrap).
As reference, here are our primary CDN links.

| Description | Links |
|-------------|-------|
| Core CSS         | https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/bundle-core.min.css |
| Component Theme  | https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/theme-light.min.css |
| Component Theme  | https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/theme-dark.min.css  |
| Style Decorators | https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/decorator-colors.min.css |
| Web Components (UMD) | https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/vue-mdb.umd.min.js |
| Web Components (ESM) | https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/vue-mdb.esm.min.js |


## Example Page 

Use the js and css files in the `<head>` section of your HTML to get started.

Code below is an example on how to create HTML page using Vue MDBootstrap.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"/>
  <link href="https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/bundle-core.min.css" rel="stylesheet" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/theme-light.min.css" rel="stylesheet" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/vue-mdb.umd.min.js" crossorigin="anonymous"></script>
</head>

<body>
  <div id="app" class="container">
    <h3 class="mt-4">Contextual Buttons</h3>
    <bs-card class="mt-4">
      <bs-card-body>
        <div class="flex flex-wrap md-gap-3">
          <bs-button @click="count++">Click me</bs-button>
          <bs-button color="primary" @click="count++">Click me</bs-button>
          <bs-button color="secondary" @click="count++">Click me</bs-button>
          <bs-button color="success" @click="count++">Click me</bs-button>
          <bs-button color="danger" @click="count++">Click me</bs-button>
          <bs-button color="warning" @click="count++">Click me</bs-button>
          <bs-button color="info" @click="count++">Click me</bs-button>
        </div>
      </bs-card-body>
      <bs-card-footer class="font-weight-semibold">Count: {{ count }}</bs-card-footer>
    </bs-card>
  </div>
  <script>
    const { ref } = Vue;
    const { createVueMdb } = VueMdb;
    const app = createVueMdb({
      setup() {
        const count = ref(0);
        return {count};
      }
    });
    app.mount('#app');
  </script>
</body>
</html>  
```
