---
description: Explains global API provided by the library.
---

# Global API


::: lead
Global API provided by **Vue MDBootstrap**.
:::

<SmallNote color="teal">Since v2.0.0</SmallNote>


## createVueMdb

Creates an application instance and register all components, plugins and directives.

```ts
function createVueMdb(rootComponent: Component): App
```

### Example {#createvuemdb-example}

With inline root component:

```ts
import { createVueMdb } from 'vue-mdbootstrap';

const app = createVueMdb({
  /* root component options */
});
app.mount('#app');
```

With imported component:

```ts
import { createVueMdb } from 'vue-mdbootstrap';
import App from './App.vue';

const app = createVueMdb(App);
app.mount('#app');
```

Standalone web page:

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


## useAxiosPlugin 

**Vue MDBootstrap** provides built-in **axios plugin** to perform HTTP request.
This function retrieve axios plugin instance. Must be called within component or 
within `<script setup>`. 

```ts
function useAxiosPlugin(): AxiosInstance | undefined
```

See [axios library](https://axios-http.com/docs/api_intro) for the instance method details.

### Example {#useaxiosplugin-example class="mb-4"}

```ts
import { useAxiosPlugin } from 'vue-mdbootstrap';

const axios = useAxiosPlugin();
const response = await axios?.get("<api-url>");
```


## useHttpService 

Retrieve HTTP service plugin instance. This instance will forward all the HTTP request 
task to the axios plugin. Must be called within component or within `<script setup>`. 

```ts
function useHttpService(): IHttpService | undefined
```

### Example {#usehttpservice-example class="mb-4"}

```ts
import { useHttpService } from 'vue-mdbootstrap';

const http = useHttpService();
const response = await http?.get("<api-url>");
```

### Instance Method {#usehttpservice-methods class="mb-4"}

<ul>
<li>get() 

```ts
interface IHttpService {
  get(url: string, data?: TRecord, options?: RawAxiosRequestConfig): AxiosPromise; 
}
```

Send _HTTP GET_ to the remote server. 
* `url`: the API url
* `data`: the data to be sent <span class="text-muted">(optional)</span>
* `options`: Additional options <span class="text-muted">(optional)</span> 

</li>
<li class="mt-4">patch() 

```ts
interface IHttpService {
  patch(url: string, data: TRecord | FormData, options?: RawAxiosRequestConfig): AxiosPromise;
} 
```

Send _HTTP PATCH_ to the remote server. 
* `url`: the API url
* `data`: the data to be sent 
* `options`: Additional options <span class="text-muted">(optional)</span>

</li>
<li class="mt-4">post() 

```ts
interface IHttpService {
  post(url: string, data: TRecord | FormData, options?: RawAxiosRequestConfig): AxiosPromise;
} 
```

Send _HTTP POST_ to the remote server. 
* `url`: the API url
* `data`: the data to be sent 
* `options`: Additional options <span class="text-muted">(optional)</span>

</li>
<li class="mt-4">put() 

```ts
interface IHttpService {
  put(url: string, data: TRecord | FormData, options?: RawAxiosRequestConfig): AxiosPromise;
} 
```

Send _HTTP PUT_ to the remote server. 
* `url`: the API url
* `data`: the data to be sent 
* `options`: Additional options <span class="text-muted">(optional)</span>

</li>
<li class="mt-4">delete() 

```ts
interface IHttpService {
  delete(url: string, data?: TRecord, options?: RawAxiosRequestConfig): AxiosPromise;
} 
```

Send _HTTP DELETE_ to the remote server. 
* `url`: the API url
* `data`: the data to be sent <span class="text-muted">(optional)</span>
* `options`: Additional options <span class="text-muted">(optional)</span>

</li>
</ul>

## useVueMdbService 

Shortcut to retrieve the VueMdb plugin instance.

```ts
function useVueMdbService(): TVueMdb | undefined 
```

## useVueMdbNotification 

Shortcut to retrieve the `INotificationProvider` instance. See 
[Notification](/components/overlays/notification) component for more details.

```ts
function useVueMdbNotification(): INotificationProvider | undefined 
```

### Example {#usevuemdbnotification-example class="mb-4"}

```ts
import { useVueMdbNotification } from 'vue-mdbootstrap';

const notification = useVueMdbNotification();
notification?.success("Your message");
notification?.warning("Your message", "Message Title");
```

## useCurrentRoute 

Get current active route if exists. Returns current route location if 
[Vue Router](https://router.vuejs.org/) instance already loaded.

```ts
function useCurrentRoute(): Ref<RouteLocationNormalizedLoaded> | undefined 
```

## useBreakpointMax 

Simple function to detect whether a device's screen is within allowable maximum 
screen resolution. Returns `true` when the screen resolution is within allowable 
resolution otherwise `false`. Available breakpoints are: `xs`, `sm`, `md`, `lg`, and `xl`. 

```ts
function useBreakpointMax(breakpoint: TBreakpoint | number): boolean 
```

See Bootstrap [Breakpoints](https://getbootstrap.com/docs/5.2/layout/breakpoints/) for more details.

### Example {#usebreakpointmax-example class="mb-4"}

```ts
import { ref } from 'vue';
import { useBreakpointMax } from 'vue-mdbootstrap';

const appCpanel = ref({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  sideDrawerOpen: !useBreakpointMax('lg'),
});

if (useBreakpointMax('lg')) {
  appCpanel.value.sideDrawerOpen = false;
  appCpanel.value.isTablet = true;
  appCpanel.value.isMobile = false;
  appCpanel.value.isDesktop = false;
}

```

## useBreakpointMin 

Simple function to detect whether a device's screen is within allowable minimum 
screen resolution. Returns `true` when the screen resolution is within allowable 
resolution otherwise `false`. Available breakpoints are: `xs`, `sm`, `md`, `lg`, and `xl`. 

```ts
function useBreakpointMin(breakpoint: TBreakpoint | number): boolean 
```

See Bootstrap [Breakpoints](https://getbootstrap.com/docs/5.2/layout/breakpoints/) for more details.


### Example {#usebreakpointmin-example class="mb-4"}

```ts
import { ref } from 'vue';
import { useBreakpointMin } from 'vue-mdbootstrap';

const appCpanel = ref({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
});

if (useBreakpointMin('xl')) {
  appCpanel.value.isMobile = false;
  appCpanel.value.isTablet = false;
  appCpanel.value.isDesktop = true;
}

```

## useMobileDevice 

Check whether it is using a mobile browser or not. Returns `true` if mobile 
browser is used otherwise `false`.

```ts
function useMobileDevice(): boolean 
```

## useAddResizeListener 

Simple function that use [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) 
Web API to detect if an `Element`'s dimension was changed or not. Must be called 
within component or within `<script setup>`.

```ts
function useAddResizeListener(el: IBindingElement, fn: CallableFunction): void 
```

### Example {#useaddresizelistener-example class="mb-4"}

```ts
import { useAddResizeListener } from 'vue-mdbootstrap';

const divElem = document.querySelector("body > div");

function onResize(): void {
  // Do some task here 
}

onMounted(() => {
  useAddResizeListener(divElem as IBindingElement, onResize);  
});

```

## useRemoveResizeListener 

Remove observer from an element and disconnect [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) 
instance if no more element to observe. Must be called within component or within `<script setup>`.

```ts
function useRemoveResizeListener(el: IBindingElement, fn?: CallableFunction): void 
```

### Example {#useremoveresizelistener-example class="mb-4"}

```ts
import { useAddResizeListener, useRemoveResizeListener } from 'vue-mdbootstrap';

const divElem = document.querySelector("body > div");

function onResize(): void {
  // Do some task here 
}

onMounted(() => {
  useAddResizeListener(divElem as IBindingElement, onResize);  
});

onBeforeUnmount(() => {
  useRemoveResizeListener(divElem as IBindingElement, onResize);  
});

```
