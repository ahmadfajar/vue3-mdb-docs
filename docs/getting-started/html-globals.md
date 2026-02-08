# Important HTML Globals

::: lead
**Bootstrap** and **TailwindCSS** employs a handful of important global styles and 
settings that you'll need to be aware of when using it, all of which are almost 
exclusively geared towards the normalization of cross browser styles. Refer to 
the following sub-sections for details.
:::


## HTML5 doctype

Bootstrap and TailwindCSS requires the use of the `HTML5` doctype. Without it, you 
*may see some funky incomplete styling*, but including it shouldn't cause any 
considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

## Responsive meta tag

Bootstrap and TailwindCSS developed for mobile first, a strategy in which code 
optimized for mobile devices first and then scale the components as necessary 
using CSS media queries. To ensure proper rendering and touch zooming for all 
devices, add the responsive viewport meta in the `<head>` section of your HTML.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
