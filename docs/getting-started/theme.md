# Theme Customization 

::: lead 
Vue MDBootstrap comes with standard support for light and dark variants. And can easily
customize your application’s default text colors, surfaces, and more. 
::: 

## Global CSS Variables 

Since **version 2.2.0**, Vue MDBootstrap has introduced unified global CSS variables to 
maintain UI color consistency and can be easily modified to suit your needs. Furthermore, 
it uses a CSS layer that's compatible with TailwindCSS.

::: code-group

```css [dist/bundle-core.css]
@layer base {
  :root {
    --font-sans-serif: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --font-size-default: 1rem;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --line-height: 1.5;
  }
}

@layer theme {
  :root {
    --md-field-primary-indicator: oklch(0.458 0.23 304.441);
    --md-field-accent-indicator: oklch(0.743 0.102 303.276);
    --md-field-active-indicator: var(--md-field-primary-indicator);
    --md-field-button-active-bg: oklch(0.154 0 89.876 / 0.25);
    --md-field-button-hover-bg: oklch(0.431 0 89.876 / 0.2);
    --md-field-button-hover-color: oklch(0.209 0 89.876);
    --md-field-button-color: currentColor;
    --md-field-disabled-opacity: 0.4;
    --md-field-readonly-opacity: 0.55;

    --md-dropdown-border-color: transparent;
    --md-dropdown-border-width: 0;
    --md-caret-size: 5px;
    --md-radius: 0.5rem;
    --md-radius-pill: 50rem;
  }
}

``` 

```css [dist/theme-light.css]
@layer theme {
  :root {
    --background: oklch(100% 0 0deg);
    --foreground: oklch(20.5% 0 0deg);
    --background-secondary: oklch(100% 0 0deg);
    --foreground-secondary: oklch(20.5% 0 0deg);
    --background-tertiary: oklch(100% 0 0deg);
    --foreground-tertiary: oklch(20.5% 0 0deg);
    --foreground-subtle: oklch(43.9% 0 0deg);
    --foreground-subtle-secondary: oklch(55.6% 0 89.876deg);
    --foreground-subtle-tertiary: oklch(75.58% 0 0deg);
    --border-translucent: oklch(0.88 0.001 17.18 / 0.75);

    --appbar-background: var(--background);
    --appbar-foreground: var(--foreground);

    --sidedrawer-background: oklch(0.969 0.005 247.877);
    --sidedrawer-foreground: var(--foreground);
    --sidedrawer-item-foreground: var(--foreground);
    --sidedrawer-item-foreground-secondary: var(--foreground-subtle);
    --sidedrawer-item-foreground-subtle: var(--foreground-subtle-secondary);
    --sidedrawer-item-active-background: oklch(0.65 0.13 294.86 / 0.3);
    --sidedrawer-item-active-foreground: oklch(42.17% 0.12 293.75deg);
    --sidedrawer-item-active-foreground-secondary: oklch(42.17% 0.12 293.75deg / 0.75);
    --sidedrawer-item-hover-background: oklch(46.85% 0.12 293.75deg / 0.1);
    --sidedrawer-item-hover-foreground: var(--foreground);
    --sidedrawer-item-border-indicator: var(--md-field-active-indicator);
    --sidedrawer-item-divider-color: var(--border-translucent);
    --sidedrawer-item-expanded-background: oklch(0 0 0 / 0.03);
    
    --navigation-background: var(--background-secondary);
    --navigation-item-foreground: var(--foreground);
    --navigation-item-foreground-secondary: var(--foreground-subtle);
    --navigation-item-foreground-subtle: var(--foreground-subtle-secondary);
    --navigation-item-active-background: oklch(46.85% 0.12 293.75deg / 0.2);
    --navigation-item-active-foreground: oklch(42.17% 0.12 293.75deg);
    --navigation-item-active-foreground-secondary: oklch(42.17% 0.12 293.75deg / 0.75);
    --navigation-item-hover-background: oklch(46.85% 0.12 293.75deg / 0.1);
    --navigation-item-hover-foreground: var(--foreground);
    --navigation-item-hover-foreground-secondary: oklch(55.8% 0.016 244.893deg);
    --navigation-item-expanded-background: oklch(0 0 0 / 0.025);
    --navigation-item-border-indicator: var(--md-field-active-indicator);
  }
}

``` 

```css [dist/theme-dark.css] 
@layer theme {
  .dark {
    --background: oklch(0.213 0 89.876);
    --foreground: oklch(0.8 0 0);
    --background-secondary: oklch(0.25 0 0);
    --foreground-secondary: oklch(0.85 0 0);
    --background-tertiary: oklch(0.3 0 0);
    --foreground-tertiary: oklch(0.85 0 0);
    --foreground-subtle: oklch(0.65 0 0);
    --foreground-subtle-tertiary: oklch(43.9% 0 0deg);
    --border-translucent: oklch(0.967 0.003 264.542 / 0.08);

    --appbar-background: oklch(0.22 0 89.876);
    --appbar-foreground: var(--foreground);

    --sidedrawer-background: oklch(0.182 0 89.876);
    --sidedrawer-foreground: var(--foreground);
    --sidedrawer-item-active-background: oklch(0.4 0.04 284.73);
    --sidedrawer-item-active-foreground: oklch(0.95 0.03 298.65);
    --sidedrawer-item-active-foreground-secondary: oklch(0.796 0.062 295.364 / 0.75);
    --sidedrawer-item-hover-background: oklch(0.535 0.005 271.325 / 0.15);

    --navigation-item-active-foreground: oklch(0.88 0.07 297.73);
    --navigation-item-active-foreground-secondary: oklch(0.796 0.062 295.364 / 0.75);
    --navigation-item-hover-background: oklch(0.535 0.005 271.325 / 0.15);

    --md-dropdown-border-color: var(--border-translucent);
    --md-dropdown-border-width: thin;
    --md-field-active-indicator: var(--md-field-accent-indicator);
    --md-field-button-hover-color: oklch(75.58% 0 0deg);
  }
}

```
::: 


## Theme Utilities 

Vue MDBootstrap also provide scss utilities that can be used to generate component theme 
for light and dark variants. 

Here is an example of how to create a component theme. 

::: code-group

```scss [example-light.scss]
@use 'vue-mdbootstrap/scss/mixins/theme-maker' as themer;
@use 'vue-mdbootstrap/scss/color_vars' as colors; 

// example to create light theme variants
@include themer.make-theme-light(colors.$context-colors);

```

```scss [example-dark.scss]
@use 'vue-mdbootstrap/scss/mixins/theme-maker' as themer;
@use 'vue-mdbootstrap/scss/color_vars' as colors; 

// example to create dark theme variants
@include themer.make-theme-dark(colors.$context-colors);

```
::: 


For a complete understanding, please read the source code in the distributed files: 
`scss/main/theme-light.scss` and `scss/main/theme-dark.scss`. 
