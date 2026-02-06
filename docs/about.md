---
outline: [2,3]
---


# Introduction 

::: lead
**Vue MDBootstrap** is a collection of **Vue.js** UI components and was built from the ground up 
to be easy to learn and use. Our collection of UI components maintain a consistent style throughout 
your application with enough customization options to meet any use-case.
:::


<h3>It’s free</h3>

Vue MDBootstrap is an Open Source project available for free under the BSD-3-Clause license. 
Additionally, the source code is available on [GitHub](https://github.com/ahmadfajar/vue-mdbootstrap), 
allowing developers to modify and contribute to its development if they choose to do so.


## Flexible components

Every component in Vue MDBootstrap is built according to the [Google Material Design 3](https://m3.material.io/) 
specifications and comes with many customization options suitable for most style or design; 
even though it’s not Material Design. Our UI components leverage the world's most popular css 
framework - *Bootstrap v5*, which can help you build responsive apps faster and mobile friendly.


## Documentation Sections

The online documentation consists of the following sections:

- [Components](/components/) - Visual component library documentation
- [Reference](/reference/) - Additional resources documentation


## Additional Information

Before getting started with **Vue MDBootstrap**, you should have general familiarity with 
**Vue 3** functionality and Bootstrap v5 CSS. If you are unfamiliar with Vue.js and/or 
Bootstrap, some good starting points would be:

- [Vue Guide](https://vuejs.org/guide/) 
- [Vue API](https://vuejs.org/api/) 
- [Bootstrap documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/) 

  
## Important HTML Globals

Bootstrap CSS employs a handful of important global styles and settings that you'll need
to be aware of when using it, all of which are almost exclusively geared towards
the normalization of cross browser styles. Refer to the following sub-sections for details.

### HTML5 doctype

Bootstrap requires the use of the `HTML5` doctype. Without it, you *may see some funky incomplete
styling*, but including it shouldn't cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

Bootstrap developed for mobile first, a strategy in which code optimized for mobile devices
first and then scale the components as necessary using CSS media queries. To ensure proper rendering
and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

## Browser Support

All major modern browsers.
