# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box, and `code text`.
:::

::: tip
This is a tip, and `code text`.
:::

::: warning
This is a warning, and `code text`.
:::

::: danger
This is a dangerous warning, and `code text`.
:::

::: details
This is a details block, and `code text`.
:::
```

**Output**

::: info
This is an info box, and `code text`.
:::

::: tip
This is a tip, and `code text`.
:::

::: warning
This is a warning, and `code text`.
:::

::: danger
This is a dangerous warning, and `code text`.
:::

::: details
This is a details block, and `code text`.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
