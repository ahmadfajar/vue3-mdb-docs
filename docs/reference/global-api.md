---
description: Explains global API provided by the Vue MDBootstrap.
---

# Global API


::: lead
Global API provided by **Vue MDBootstrap**.
:::

<SmallNote color="teal">Since v2.0.0</SmallNote>


## createVueMdb {#create-vue-mdb}

Creates an application instance and register all components, plugins and directives.

```ts
function createVueMdb(rootComponent: Component): App
```

### Example {#create-vue-mdb-example}

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


## useAxiosPlugin {#use-axios-plugin}

**Vue MDBootstrap** provides built-in **axios plugin** to perform HTTP request.
This function retrieve axios plugin instance. Must be called within component or 
within `<script setup>`. 

```ts
function useAxiosPlugin(): AxiosInstance | undefined
```

See [axios library](https://axios-http.com/docs/api_intro) for the instance method details.

### Example {#use-axios-plugin-example class="mb-4"}

```ts
import { useAxiosPlugin } from 'vue-mdbootstrap';

const axios = useAxiosPlugin();
const response = await axios?.get("<api-url>");
```


## useHttpService {#use-http-service}

Retrieve HTTP service plugin instance. This instance will forward all the HTTP request 
task to the axios plugin. Must be called within component or within `<script setup>`. 

```ts
function useHttpService(): IHttpService | undefined
```

### Example {#use-http-service-example class="mb-4"}

```ts
import { useHttpService } from 'vue-mdbootstrap';

const http = useHttpService();
const response = await http?.get("<api-url>");
```

### Instance Method {#use-http-service-methods class="mb-4"}

<div class="doc-api">
<ul>
<li>get() 

```ts
interface IHttpService {
  get(url: string, data?: TRecord, options?: RawAxiosRequestConfig): AxiosPromise; 
}
```

Send _HTTP GET_ to the remote service.

**Details**:
* `url`: the API url
* `data`: the data to be sent <span class="text-subtle">(optional)</span>
* `options`: Additional options <span class="text-subtle">(optional)</span> 

</li>
<li class="mt-4">patch() 

```ts
interface IHttpService {
  patch(url: string, data: TRecord | FormData, options?: RawAxiosRequestConfig): AxiosPromise;
} 
```

Send _HTTP PATCH_ to the remote service. 

**Details**:
* `url`: the API url
* `data`: the data to be sent 
* `options`: Additional options <span class="text-subtle">(optional)</span>

</li>
<li class="mt-4">post() 

```ts
interface IHttpService {
  post(url: string, data: TRecord | FormData, options?: RawAxiosRequestConfig): AxiosPromise;
} 
```

Send _HTTP POST_ to the remote service. 

**Details**:
* `url`: the API url
* `data`: the data to be sent 
* `options`: Additional options <span class="text-subtle">(optional)</span>

</li>
<li class="mt-4">put() 

```ts
interface IHttpService {
  put(url: string, data: TRecord | FormData, options?: RawAxiosRequestConfig): AxiosPromise;
} 
```

Send _HTTP PUT_ to the remote service. 

**Details**:
* `url`: the API url
* `data`: the data to be sent 
* `options`: Additional options <span class="text-subtle">(optional)</span>

</li>
<li class="mt-4">delete() 

```ts
interface IHttpService {
  delete(url: string, data?: TRecord, options?: RawAxiosRequestConfig): AxiosPromise;
} 
```

Send _HTTP DELETE_ to the remote service. 

**Details**:
* `url`: the API url
* `data`: the data to be sent <span class="text-subtle">(optional)</span>
* `options`: Additional options <span class="text-subtle">(optional)</span>

</li>
</ul>
</div>

## useVueMdbService  {#use-vue-mdb-service}

Shortcut to retrieve the VueMdb plugin instance.

```ts
function useVueMdbService(): TVueMdb | undefined 
```

## useVueMdbNotification {#use-vue-mdb-notification}

Shortcut to retrieve the `INotificationProvider` instance. See 
[Notification](/components/overlays/notification) component for more details.

```ts
function useVueMdbNotification(): INotificationProvider | undefined 
```

### Example {#use-vue-mdb-notification-example class="mb-4"}

```ts
import { useVueMdbNotification } from 'vue-mdbootstrap';

const notification = useVueMdbNotification();
notification?.success("Your message");
notification?.warning("Your message", "Message Title");
```

## useBreakpointMax {#use-breakpoint-max}

Simple function to detect whether a device's screen is within allowable maximum 
screen resolution. Returns `true` when the screen resolution is within allowable 
resolution otherwise `false`. Available breakpoints are: `xs`, `sm`, `md`, `lg`, and `xl`. 

```ts
function useBreakpointMax(breakpoint: TBreakpoint | number): boolean 
```

See Bootstrap [Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/) for more details.

### Example {#use-breakpoint-max-example class="mb-4"}

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

## useBreakpointMin {#use-breakpoint-min}

Simple function to detect whether a device's screen is within allowable minimum 
screen resolution. Returns `true` when the screen resolution is within allowable 
resolution otherwise `false`. Available breakpoints are: `xs`, `sm`, `md`, `lg`, and `xl`. 

```ts
function useBreakpointMin(breakpoint: TBreakpoint | number): boolean 
```

See Bootstrap [Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/) for more details.


### Example {#use-breakpoint-min-example class="mb-4"}

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

## useMobileDevice {#use-mobile-device}

Check whether it is using a mobile browser or not. Returns `true` if mobile 
browser is used otherwise `false`.

```ts
function useMobileDevice(): boolean 
```

## useAddResizeListener {#use-add-resize-listener}

Simple function that use [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) 
Web API to detect if an `Element`'s dimension was changed or not. Must be called 
within component or within `<script setup>`.

```ts
function useAddResizeListener(el: IBindingElement, fn: CallableFunction): void 
```

### Example {#use-add-resize-listener-example class="mb-4"}

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

## useRemoveResizeListener {#use-remove-resize-listener}

Remove observer from an element and disconnect [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) 
instance if no more element to observe. Must be called within component or within `<script setup>`.

```ts
function useRemoveResizeListener(el: IBindingElement, fn?: CallableFunction): void 
```

### Example {#use-remove-resize-listener-example class="mb-4"}

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

## useCurrentRoute {#use-current-route}

Get current active route if exists. Returns current route location if 
[Vue Router](https://router.vuejs.org/) instance already loaded.

```ts
function useCurrentRoute(): Ref<RouteLocationNormalizedLoaded> | undefined 
```

## useGenerateId {#use-genereate-id}

Generate component's ID.

```ts
function useGenerateId(): string 

```

## useMergeClass {#use-merge-class}

<SmallNote color="teal">Added in v2.1.0</SmallNote>

Merge one or more CSS classes.

```ts
function useMergeClass(...args: (string | string[])[]): string[]

```
<div class="doc-api">

**Details**:
* `args`: The CSS classes to be merged.

</div>

## useRenderSlot {#use-render-slot}

<SmallNote color="teal">Added in v2.1.0</SmallNote>

Simple function to render a VNode with custom slot. If the custom slot doesn't exist 
or `undefined` then the default `children` will be rendered. 

```ts
function useRenderSlot(
  slots: Slots,
  name: string,
  props: Readonly<TRecord>,
  children?: VNodeArrayChildren | VNode,
  slotArgs?: TRecord
): VNode

```
<div class="doc-api">

**Details**:
* `slots`: The slot instance
* `name`: The slot name
* `props`: VNode property, include slot identifier
* `children`: The default VNode children to replace the slot <span class="text-subtle">(optional)</span> 
* `slotArgs`: The argument for the given slot <span class="text-subtle">(optional)</span> 

</div>

## useRenderSVG {#use-render-svg}

<SmallNote color="teal">Added in v2.1.0</SmallNote>

Function to draw inline SVG xml directly.

```ts
function useRenderSVG(
  data: string,
  width: number,
  height: number,
  clazz: string | string[]
): VNode

```
<div class="doc-api">

**Details**:
* `data`: The SVG xml string
* `width`: The desired [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) width
* `height`: The desired [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) height
* `clazz`: Optional css class name

</div>

## useRenderTransition {#use-render-transition}

<SmallNote color="teal">Added in v2.1.0</SmallNote>

Simple function to render a Transition component.

```ts
function useRenderTransition(
  props: Readonly<TransitionProps>,
  children: VNodeArrayChildren | VNode,
  asBlock?: boolean
): VNode

```
<div class="doc-api">

**Details**:
* `props`: The transition properties
* `children`: The child nodes
* `asBlock`: Render the Transition as block VNode <span class="text-subtle">(optional)</span> 

</div>

## useWrapSlot {#use-wrap-slot}

<SmallNote color="teal">Added in v2.2.0</SmallNote>

Simple function to render a VNode with custom slot and wrap it with the given `wrapperTag` 
and properties. If the custom slot doesn't exist or `undefined` then the default 
`children` will be rendered inside the `wrapperTag`.

```ts
function useWrapSlot(
  slots: Slots,
  name: string,
  key: string,
  wrapperProps: Readonly<TRecord>,
  children?: VNodeArrayChildren | VNode,
  wrapperTag?: string,
  slotArgs?: TRecord
): VNode

```
<div class="doc-api">

**Details**:
* `slots`: The slot instance
* `name`: The slot name
* `key`: Fragment key identifier
* `wrapperProps`: The VNode wrapper properties
* `children`: The default VNode children to replace the slot <span class="text-subtle">(optional)</span> 
* `wrapperTag`: Valid html tag name, default is `div` <span class="text-subtle">(optional)</span> 
* `slotArgs`: The argument for the given slot <span class="text-subtle">(optional)</span> 

</div>

## useWrapSlotDefault {#use-wrap-slot-default}

<SmallNote color="teal">Added in v2.2.0</SmallNote>

Simple function to render an HTML tag as VNode or render default slot and wrap an 
HTML tag around it.

```ts
function useWrapSlotDefault(
  tag: string,
  slots?: Slots,
  classes?: string | string[],
  styles?: TRecord
): VNode

```
<div class="doc-api">

**Details**:
* `tag`: Valid HTML tag name
* `slots`: The slot instance <span class="text-subtle">(optional)</span>
* `classes`: Custom CSS classes to apply <span class="text-subtle">(optional)</span>
* `styles`: Custom inline stylesheet to apply <span class="text-subtle">(optional)</span>

</div>

## useWrapSlotWithCondition {#use-wrap-slot-with-condition}

<SmallNote color="teal">Added in v2.2.0</SmallNote> 

Simple function to render a VNode with custom slot and wrap it with the given `wrapTag` 
and properties. The VNode will be rendered if the given `condition` is matched.

```ts
function useWrapSlotWithCondition(
  slots: Slots,
  name: string,
  condition: boolean,
  wrapProps?: Readonly<TRecord>,
  wrapTag?: string,
  slotArgs?: TRecord
): VNode | undefined

```
<div class="doc-api">

**Details**:
* `slots`: The slot instance
* `name`: The slot name
* `condition`: The given condition
* `wrapProps`: The VNode wrapper properties <span class="text-subtle">(optional)</span>
* `wrapTag`: Valid html tag name, default is `div` <span class="text-subtle">(optional)</span> 
* `slotArgs`: The argument for the given slot <span class="text-subtle">(optional)</span> 

</div>
