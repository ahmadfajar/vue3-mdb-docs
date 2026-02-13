# Release Notes


::: lead
All release notes can be found through [GitHub](https://github.com/ahmadfajar/vue-mdbootstrap/releases) 
and can be viewed below for your convenience.
:::


## v2.2.0

Released: February 02, 2026

### Features & Improvements

- Add support for **Bootstrap v5.3** and **TailwindCSS v4.1**.
- Add support for dark theme.
- Add CSS utility classes.
- Create global CSS variables for UI color consistency.
- Convert all `rgb` and `hex` css color to `oklch` and improve scss mixin.
- Improve components CSS rules, utilize css `@layer` and make it compatible with TailwindCSS.
- New components: **BsCloseButton**, **BsSpinLoader**.
- **BsAlert**: 
  - Decouple from Bootstrap alert CSS. 
  - Improve close button.
  - Improve color variants.
- **BsBadge**: 
  - Decouple from Bootstrap badge CSS. 
  - Remove default value from `color` property. 
- **BsBreadcrumb**: 
  - Decouple from Bootstrap breadcrumb CSS. 
  - Small improvement. 
- **BsButton**: 
  - Decouple from Bootstrap button CSS.
  - Add properties: `iconClass` and `pillOff`.
  - Provide `data-*` attributes when rendering HTML.
  - Improve color variants.
  - Improve CSS variables.
- **BsCard**, **BsCardBody**, **BsCardContent**, **BsCardFooter**, **BsCardHeader**: 
  - Decouple from Bootstrap card CSS.
  - Integrate with global CSS variables.
- **BsCardMedia**: 
  - Decouple from Bootstrap card CSS.
  - Add slots: `title` and `subtitle`. 
- **BsCheckbox**, **BsRadio**, **BsSwitch**, **BsNumericField**, **BsTextField**,
  **BsTextArea**: 
  - Provide `data-*` attributes when rendering html.
- **BsCheckboxGroup**, **BsRadioGroup**: 
  - Add property `persistentHelpOff`.
- **BsChip**: 
  - Add property `closeButtonColor`.
  - Provide `data-*` attributes when rendering HTML.
  - Improve close button.
  - Improve color variants.
- **BsChipField**: 
  - Correctly set chips to readonly when the field is in readonly state.
  - Provide `data-*` attributes when rendering HTML.
- **BsChipGroup**: add property `closeButtonColor`.
- **BsColorPicker**: 
  - Add support `oklch` color space.
  - Add `oklch` to toggle button.
  - Mark `containerColor` property as deprecated and remove its default value.
  - Enable change the value via input box.
  - Improve swatch container and buttons.
  - Improve sync between color preview and value.
  - Improve exposed methods.
- **BsCombobox**: 
  - Add property `itemSeparatorDark`.
  - Mark `listboxColor` property as deprecated.
  - Correctly set chips to readonly when the field is in readonly state.
  - Provide `data-*` attributes when rendering HTML.
  - Improve focus and disable state.
  - Integrate with global CSS variables.
- **BsContent**, **BsApp**, **BsAppBar**: 
  - Improve rendering the HTML.
  - Integrate with global CSS variables.
- **BsDatePicker**: 
  - Add properties: `buttonColor`, `selectedColor`, `surfaceClass`.
  - Mark `surfaceColor` property as deprecated and remove its default value.
  - Integrate with global CSS variables.
- **BsDateTimeField**: 
  - Add properties: `pickerButton`, `pickerSelectedColor`, `surfaceCls`.
  - Mark `pickerColor` property as deprecated and remove its default value.
  - Provide `data-*` attributes when rendering HTML.
  - Improve focus state.
  - Integrate with global CSS variables.
- **BsDivider**: adjusts width to fit the container width.
- **BsDropdownMenu**: integrate with global CSS variables.
- **BsIcon**: add property `svgClass`.
- **BsListbox**: 
  - Add property `itemSeparatorDark`.
  - Improve focus and disable state.
  - Integrate with global CSS variables.
- **BsLightbox**: 
  - Add support for video and YouTube.
  - Improve `thumbnailHeight` property implementation.
  - Fixed dropdown-menus didn't display correctly.
- **BsListView**, **BsListTile**, **BsListNav**: 
  - Integrate with global css variables.
- **BsMaskLoader**, **BsProgressBar**: 
  - Decouple from Bootstrap CSS.
  - Small improvement. 
- **BsModal**: 
  - Improve inner body height when `scrollable` and `fullPage` is defined.
  - Fix modal is closed when the modal dialog body is clicked.
  - Integrate with global CSS variables.
- **BsNotification**: improve close button.
- **BsPopover**: 
  - Improve animation transition and scroll event.
  - Integrate with global CSS variables.
- **BsSearchField**: add property `popoverOpen`.
- **BsSvgIcon**: add property `size`.
- **BsSideDrawer**: 
  - Mark `color` property as deprecated.
  - Improve rendering html.
  - Integrate with global CSS variables.
- **BsTabs**: 
  - Decouple from Bootstrap CSS.
  - Add slot `append-header`.
  - Small improvement.
- **BsToggleButton**, **BsToggleField**: 
  - Add properties: `pillOff`, `iconSize`.
  - Provide `data-*` attributes when rendering HTML.
- **BsTooltip**: improve animation, inner padding, border radius and CSS variables.
- **CacheManager**: improve performance using sessionStorage if available

### Breaking Changes

- **BsAlert**: remove deprecated properties: `iconType`, `solidFill`.
- **BsCheckboxGroup**, **BsRadioGroup**, **BsChipField**: 
  - Remove deprecated property `externalValidator`.
- **BsChip**, **BsChipGroup**: remove deprecated property `imgPadding`.
- **BsTextArea**, **BsTextField**, **BsToggleField**: 
  - Remove deprecated property `externalValidator`.
  - Remove `flat` property.
- **BsCombobox**: 
  - Remove deprecated properties: `externalValidator`, `checkOptionColor`, `checkOptionPosition`, `popoverMaxHeight`, `popoverMinHeight`.
- **BsDateTimeField**: 
  - Remove deprecated properties: `transition`, `externalValidator`.
  - Remove `flat` property.
- **BsIconSvg** is deprecated, use **BsSvgIcon** instead.
- **BsIconSpinner** is deprecated, use **BsSpinnerIcon** instead.
- **BsIconFontawesome** is deprecated, use **BsFontawesomeIcon** instead.
- **BsImageHolder**: remove deprecated property `placeHolder`.
- **BsLightbox**: 
  - Remove unused properties: `overlayColor`, `overlayOpacity`.
  - Rename property `imageClass` to `viewerClass`.
  - Rename property `imageStyles` to `viewerStyles`.
- **BsNumericField**: 
  - Remove deprecated property: `externalValidator`.
  - Remove properties: `spinButton`, `spinButtonPlacement`, `flat`.
  - Change the type of `actionButton` property to `string` to accommodate **up/down** and **plus/minus** buttons.
- **BsToggleButton**: remove `flat` property.


## v2.1.7

Released: February 03, 2025

### Bug Fixes

- **BsTextArea**: fixed bug could not determine its height when `auto-grow` and `readonly`
  were enabled and the `model-value` wasn't empty.


## v2.1.6

Released: February 01, 2025

### Improvements

- **BsButton**: 
  - Improve inner element spacing and padding when `dropdown-toggle` is enabled.
  - Improve spacing between icon and caret when `default-slot` is **empty** or
    **undefined** and `dropdown-toggle` is enabled.
- **BsTooltip**: improve show or hide animation timing.

### Bug Fixes

- **BsTab**: fixed bug that caused `v-if` to not work as expected.


## v2.1.5

Released: December 30, 2024

### Improvements

- **BsTooltip**: improve arrow positioning when activator width greater than tooltip width.
- **AxiosPlugin**: 
  - Expose `$http.patch` method. 
  - Detect form object for data provided to the `$http.post`, `$http.patch`, `$http.put` 
    methods and execute appropriate axios method.


## v2.1.4

Released: December 28, 2024

### Improvements

- **BsTooltip**: 
  - Prevent displaying tooltip beyond the screen viewport by shifting its 
    coordinates or reversing its placement. 
  - Automatically adjust arrow positioning. 


## v2.1.3

Released: December 10, 2024

### Features & Improvements

- **BsNotification**: 
  - Add feature to enable hiding the notification icon. 
  - Improves initializing and removes unnecessary html element. 
  - Improves the notification provider in handling and processing notification items. 
  - Improves css variables and classes.


## v2.1.2

Released: December 08, 2024

### Bug Fixes

- **BsAppbarTitle**: fixed bug incorrect left margin when placed as the first child of `<BsAppbar>`.
- **BsBreadcrumb**: fixed css variables.
- **BsCheckboxGroup**, **BsRadioGroup**: fixed column layout bug that did not
  respect the `column` property when its value was set to `1`.
- **BsIconFontawesome**: removed unused property and fixed typescript declaration.


## v2.1.1

Released: December 04, 2024

### Improvements

- **BsColorPicker**: rename property `outlineModeButton` to `modeButtonOutlined`. 
- Rename component **BsFontAwesome** to **BsIconFontawesome** for consistency.
- Improve typescript doc comments.

### Bug Fixes

- **BsTooltip**: fixed bug inconsistent arrow color.


## v2.1.0

Released: December 03, 2024

### Features & Improvements

- Migrate **Google Material Icons** to **[Google Material Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols)**.
  This migration improve icon naming consistency, clarity and reduce the bundle size.
- Migrate scss files from legacy SASS to modern SASS.
- Reduce the number of color variants for each component on main css file
  (comply to [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
  colors with some addition) and put other color variants on different css file. This action
  greatly reduces the size of the main css file.
- New components: **BsFontAwesome**, **BsBreadcrumb** and **BsImageUploader**. 
- **BsIcon**, **BsIconSvg**, **BsToggleIcon**: 
  - Improve `icon` property to better accommodate **_Google Material Symbols_**.
  - Add new property `filled` to better accommodate **_Google Material Symbols_**.
- **BsAlert**, **BsChip**, **BsChipGroup**:
  - Improve `icon` property to better accommodate **_Google Material Symbols_**. 
  - Improve `icon-variant` property to better accommodate **_Google Material Symbols_**.
  - Change the default value of the `icon-variant` property to `outlined`.
- **BsAvatar**, **BsTab**, **BsListTileLeading**, **BsListNavItem**, **BsButton**, **BsToggleButton**, **BsToggleField**:
  - Add new property `icon-variant` to better accommodate **_Google Material Symbols_**.
  - Improve `icon` property to better accommodate **_Google Material Symbols_**.
- **BsChipField**, **BsTextArea**, **BsTextField**, **BsNumericField**, **BsDateTimeField**, **BsCombobox**:
  - Improve properties: `append-icon`, `append-icon-outer`, `prepend-icon`, `prepend-icon-outer`
    and `action-icon-variant` to better accommodate **_Google Material Symbols_**.

