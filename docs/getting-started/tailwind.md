# Quick Guide with TailwindCSS 

::: lead 
Get started with Vue MDBootstrap by including it into your project using **NPM/YARN** 
and leverage **TailwindCSS v4** CSS framework to build responsive and mobile-friendly 
apps faster. 
::: 

<SmallNote color="teal">Added in v2.2.0</SmallNote>

## Install Components

In this section we will introduce how to install and configure the components on 
your Vue application. We assume you have created your project using 
[Vite + Vue](https://vuejs.org/guide/quick-start.html#creating-a-vue-application). 
Please read the [manual](https://vuejs.org/guide/quick-start.html#creating-a-vue-application) 
on the official website to understand in depth how to set up a project.


::: code-group

```bash [NPM]
npm install vue-mdbootstrap tailwindcss @tailwindcss/vite --save

```

```bash [YARN]
yarn add vue-mdbootstrap tailwindcss @tailwindcss/vite
```
:::


## Configure Vite Plugin

::: code-group

```ts [vite.config.ts]
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});

```
:::


## Configure Main HTML

::: code-group

```html [index.html]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Your Page Title</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>

```
:::

## Import Tailwind CSS

::: code-group

```css [src/main.css]
@import 'tailwindcss';
```
:::


## Component Bundle 

### Setup application bootstrap {class="mb-4"}

::: code-group

```ts [src/main.ts]
// Import global function to register the components and create Vue application
import { createVueMdb } from 'vue-mdbootstrap';

// Import main component or page layout
import App from '@/App.vue';

// Import router navigation.
// Read [vue-router manual](https://router.vuejs.org/) on how to setup the navigation
import router from '@/router'; 

// Import core css stylesheet
import 'vue-mdbootstrap/styles';

// Import theme css stylesheet
import 'vue-mdbootstrap/theme-light';

// Import application css stylesheet
import '@/main.css';

// Main code start here...
const app = createVueMdb(App);
app.use(router).mount('#app');

```
::: 


## Individual Component 

### Register a component plugin 

There are cases in your project that you only need some components of ***Vue MDBootstrap***
and for this you can add them as follows:

::: code-group

```ts [src/main.ts]
import { createApp } from 'vue';

// Import Button component plugins
import { BsButtonPlugin } from 'vue-mdbootstrap';

// Import main component or page layout
import App from '@/App.vue';

// Import router navigation.
// Read [vue-router manual](https://router.vuejs.org/) on how to setup the navigation
import router from '@/router'; 

// Import core css stylesheet
import 'vue-mdbootstrap/styles';

// Import theme css stylesheet
import 'vue-mdbootstrap/theme-light';

// Import application css stylesheet
import '@/main.css';

// Your main code
const app = createApp(App);

// Registers the Button component plugin
app.use(BsButtonPlugin);

app.mount('#app');
```
:::


### Register component plugins manually {class="my-lg-5"}

::: code-group

```ts [src/main.ts]
import { createApp } from 'vue';

// Import all UI component plugins
import * as _plugins from 'vue-mdbootstrap';

// Import main component or page layout
import App from '@/App.vue';

// Import router navigation.
// Read [vue-router manual](https://router.vuejs.org/) on how to setup the navigation
import router from '@/router'; 

// Import core components css stylesheet
import 'vue-mdbootstrap/styles';

// Import theme css stylesheet
import 'vue-mdbootstrap/theme-light';

// Import application css stylesheet
import '@/main.css';

// Your main code
const app = createApp(App);

// Registers all the UI component plugins
for (const key of Object.keys(_plugins)) {
  if (key.startsWith('Bs') && key.endsWith('Plugin')) {
    app.use(_plugins[key]);
  }
}

app.mount('#app');
``` 
::: 
