---
prev:
  text: 'Release Notes'
  link: '/release-notes'

next:
  text: 'Alert'
  link: '/components/alert'
---

# Component Catalog

Vue MDBootstrap is a collection of UI components that can help you build beautiful apps faster.


The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
