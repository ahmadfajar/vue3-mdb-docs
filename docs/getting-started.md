---
outline: [2,3]
---


# Getting Started 

::: lead
**Vue MDBootstrap** can be used to built Single Page Application (SPA) by using module 
bundler or built common web page by using resources from the CDN.
:::


## Requirements
 
<div class="pt-2"></div>

- [Vue.js](https://vuejs.org) `v3.3` is required, `v3.3.4` is recommended
- [Bootstrap](https://getbootstrap.com) `v5.2` is required, `v5.2.3` is recommended
- [Vue Router](https://router.vuejs.org/) `v4.x` is optional, and is required for building SPA using module bundler 
- [Pinia](https://pinia.vuejs.org/) is optional, and is required for building SPA using module bundler 
- [Vuelidate](https://vuelidate-next.netlify.app/) is optional, and is required for forms validation 


## Setup Project

### Using Module Bundler

If you are building a Single Page Application, then you can use module bundler such as 
[Vite](https://vitejs.dev/), [Vue Cli](https://cli.vuejs.org/) or [Webpack](https://webpack.js.org/) 
to build and jump-start your project. And use `yarn` or `npm` to get the latest version of **Vue.js** 
and **Vue MDBootstrap**. We assume you have created your project using 
[Vite + Vue](https://vuejs.org/guide/quick-start.html#creating-a-vue-application). 
If not, please read the 
[manual](https://vuejs.org/guide/quick-start.html#creating-a-vue-application) first.


```bash
# With npm
npm install vue-mdbootstrap@next --save

# With yarn
yarn add vue-mdbootstrap@next
```

Create Vue application and mount at `#app` entry point.

```js
// file: main.js

// import global function to register the components and create Vue application
import { createVueMdb } from 'vue-mdbootstrap';

// Import main component or page layout
import App from '@/App.vue';

// Import router navigation, 
// read vue-router manual on how to setup the navigation
import router from '@/router'; 

// import components css stylesheet 
import 'vue-mdbootstrap/styles';

// main code start here...
const app = createVueMdb(App);
app.use(router).mount('#app');
```

Now, everything is registered and you are ready to go. Please note, 
this component still requires css from **Bootstrap 5**. 
Use code below at the HTML `<head>` section to load the Bootstrap css framework.

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"/>
```


### Using resources from the CDN

You can get the latest version of Vue MDBootstrap directly from 
[unpkg](https://unpkg.com/) or [jsdelivr](https://www.jsdelivr.com/package/npm/vue-mdbootstrap).
Then use the js and css files on your html `<head>` section to get started. 

Code below is an example on how to create HTML page using Vue MDBootstrap.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous"/>
  <link href="https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/bundle.min.css" rel="stylesheet" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue-mdbootstrap@2/dist/vue-mdb.umd.min.js" crossorigin="anonymous"></script>
</head>

<body>
  <div id="app" class="container">
    <h3 class="mt-4">Contextual Buttons</h3>
    <bs-card class="bg-grey-200 border-0 mt-3">
      <bs-card-body>
        <div class="d-flex justify-content-center">
          <bs-button @click="count++">Click me</bs-button>
          <bs-button color="primary" @click="count++">Click me</bs-button>
          <bs-button color="secondary" @click="count++">Click me</bs-button>
          <bs-button color="success" @click="count++">Click me</bs-button>
          <bs-button color="danger" @click="count++">Click me</bs-button>
          <bs-button color="warning" @click="count++">Click me</bs-button>
          <bs-button color="info" @click="count++">Click me</bs-button>
        </div>
        <div class="mt-3 text-center md-fw-semibold">Count: {{ count }}</div>
      </bs-card-body>
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

## Starter Kit and Demo

You can clone the starter kit and demo from the GitHub repository and run it yourself to see it in action.

1. [vue3-mdb-starter](https://github.com/ahmadfajar/vue3-mdb-starter) - Vue MDBootstrap v2.0 
   starter kit project template.
2. [vue3-mdb-example](https://github.com/ahmadfajar/vue3-mdb-example) - Vue MDBootstrap v2.0 
   component demos.
