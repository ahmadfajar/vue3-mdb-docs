<script setup lang="ts">
import ListGroup from './ListGroup.vue';
import ListGroupItem from './ListGroupItem.vue';
import ListGroupItemTitle from './ListGroupItemTitle.vue';
import ListGroupItemContent from './ListGroupItemContent.vue';
</script>

<template>
  <ListGroup class="md-shadow mt-4">
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Animations:" />
      <ListGroup>
        <ListGroupItem href="animations/ripple">
          <ListGroupItemTitle title="Ripple" />
          <ListGroupItemContent>
            Small and lightweight component which is used to show ripple animation when click or
            touch event occured.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="animations/transition-effect">
          <ListGroupItemTitle title="Transition Effect" />
          <ListGroupItemContent>
            A Transition animations effect that will make an UI feel great.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Buttons:" />
      <ListGroup>
        <ListGroupItem href="buttons/button">
          <ListGroupItemTitle title="Button" />
          <ListGroupItemContent>
            A component for actions in form, dialog, and more. Includes support for a handful of
            color variations, sizes, states, and more.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="buttons/toggle-button">
          <ListGroupItemTitle title="Toggle Button" />
          <ListGroupItemContent>
            A group of buttons with toggle capabilities. It is primarily used to visualize choices
            with different approaches.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Chips:" />
      <ListGroup>
        <ListGroupItem href="chips/chip">
          <ListGroupItemTitle title="Chip" />
          <ListGroupItemContent>
            A component which is used to convey small pieces of information to create arbitrary
            items, like categories or tags.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="chips/chip-group">
          <ListGroupItemTitle title="Chip Group" />
          <ListGroupItemContent>
            A component which extends the <span class="fw-semibold">BsChip</span>'s component by
            providing groupable functionality. It is used for creating groups of selections using
            chips.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Container:" />
      <ListGroup>
        <ListGroupItem href="container/container">
          <ListGroupItemTitle title="App" />
          <ListGroupItemContent>
            A lightweight components which is used as layout container for your application.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="container/appbar">
          <ListGroupItemTitle title="Appbar" />
          <ListGroupItemContent>
            A lightweight component which is placed at the top of the page as a container for page
            title, logo, menus, and action buttons.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="container/card">
          <ListGroupItemTitle title="Card" />
          <ListGroupItemContent>
            A flexible and extensible content container. It includes sub-component for headers,
            footers, and content with variety background colors, and powerful display options.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="container/side-drawer">
          <ListGroupItemTitle title="Side Drawer" />
          <ListGroupItemContent>
            A lightweight component's container which may contains application navigation, logo and
            others.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Elements:" />
      <ListGroup>
        <ListGroupItem href="elements/alert">
          <ListGroupItemTitle title="Alert" />
          <ListGroupItemContent>
            A component that provides contextual feedback messages for typical user actions with the
            handful of available and flexible alert messages.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="elements/avatar">
          <ListGroupItemTitle title="Avatar" />
          <ListGroupItemContent>
            A component which are typically used to display a user profile as a picture, icon, or
            short text.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="elements/badge">
          <ListGroupItemTitle title="Badge" />
          <ListGroupItemContent>
            A lightweight component which can be used for adaptive tagging such as adding context to
            just about any content.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="elements/breadcrumb">
          <ListGroupItemTitle title="Breadcrumb" badge="v2.1.0" />
          <ListGroupItemContent>
            A component that indicate the current page's location within a navigational hierarchy.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="elements/divider">
          <ListGroupItemTitle title="Divider" />
          <ListGroupItemContent>
            Small and lightweight component which is primarily used to separate content within lists
            or layouts.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="elements/dropdown-menu">
          <ListGroupItemTitle title="Dropdown Menu" />
          <ListGroupItemContent>
            A popup container which are typically used for displaying lists of links and actions in
            a dropdown menu style.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="elements/image-holder">
          <ListGroupItemTitle title="Image Holder" />
          <ListGroupItemContent>
            A lightweight component which is primarily used to create SVG shape to visualize image
            placeholder.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="elements/list-tile">
          <ListGroupItemTitle title="List Tile" />
          <ListGroupItemContent>
            A component used to display information. It can contain an image, content, actions,
            subheaders and much more. BsListTile represents content in such a way which makes it
            easy to identify a specific item in a collection.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="elements/subheader">
          <ListGroupItemTitle title="Subheader" />
          <ListGroupItemContent>
            Small and lightweight component which is used as lists title.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Icons:" />
      <ListGroup>
        <ListGroupItem href="icons/icon">
          <ListGroupItemTitle title="Icon" />
          <ListGroupItemContent>
            Small and lightweight component which can be used inside almost any component or html
            element and the icon is loaded from
            <strong>Google Material Symbols</strong> dynamically.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="icons/icon-fontawesome">
          <ListGroupItemTitle title="Icon Font Awesome" badge="v2.1.0" />
          <ListGroupItemContent>
            Small and lightweight component which can be used inside almost any component or html
            element and the icon is loaded from <strong>Font Awesome</strong> dynamically.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="icons/icon-spinner">
          <ListGroupItemTitle title="Icon Spinner" badge="v2.0.0" />
          <ListGroupItemContent>
            A lightweight component which is used for displaying loading indicator.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="icons/icon-svg">
          <ListGroupItemTitle title="Icon SVG" badge="v2.0.0" />
          <ListGroupItemContent>
            A lightweight component which is primarily used to embed SVG icon inline inside an html
            element and the SVG icon is loaded from
            <strong>Google Material Symbols</strong> dynamically.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="icons/toggle-icon">
          <ListGroupItemTitle title="Toggle Icon" />
          <ListGroupItemContent>
            Small and lightweight component which is used to toggle two different icon. It can be
            used inside almost any component or html element.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Input Controls:" />
      <ListGroup>
        <ListGroupItem href="input/checkbox">
          <ListGroupItemTitle title="Checkbox" />
          <ListGroupItemContent>
            A component that let users select one or more items from a list, or turn an item on or
            off.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/radio">
          <ListGroupItemTitle title="Radio Button" />
          <ListGroupItemContent>
            A component that let users select one option from a set of options.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/switch">
          <ListGroupItemTitle title="Switch" />
          <ListGroupItemContent>
            A component that let users toggle the selection of an item on or off.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/textfield">
          <ListGroupItemTitle title="Text Field" />
          <ListGroupItemContent>
            A component that let users enter text into an UI.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/textarea">
          <ListGroupItemTitle title="TextArea Field" />
          <ListGroupItemContent>
            A component that let users enter a large amounts of text into an UI.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/numeric-field">
          <ListGroupItemTitle title="Numeric Field" />
          <ListGroupItemContent>
            A component that let users enter numeric text into an UI.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/chipfield">
          <ListGroupItemTitle title="Chip Field" />
          <ListGroupItemContent>
            A component that let users enter arbitrary items, like <em>categories</em> or
            <em>tags</em> into an UI to convey a small pieces of information.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/listbox">
          <ListGroupItemTitle title="Listbox" badge="v2.0.0" />
          <ListGroupItemContent>
            A component that let users select one or more items from a displayed list.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/combobox">
          <ListGroupItemTitle title="Combobox" />
          <ListGroupItemContent>
            A component that let users select one or more items from a displayed list.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/datetime-field">
          <ListGroupItemTitle title="DateTime Field" />
          <ListGroupItemContent>
            A fully featured date selection component that let users select a date, time, month,
            year, or datetime.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="input/toggle-field">
          <ListGroupItemTitle title="Toggle Field" />
          <ListGroupItemContent>
            TODO: Toggle Field description.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Navigation:" />
      <ListGroup>
        <ListGroupItem href="navigation/list-nav">
          <ListGroupItemTitle title="List Nav" />
          <ListGroupItemContent>
            A component used for displaying a series of item and mainly used for navigation. It can
            contain an icon, nested items, and provides a consistent styling for organizing the
            items.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="navigation/tabs">
          <ListGroupItemTitle title="Tabs" />
          <ListGroupItemContent>
            A component used for creating a pseudo-navigation for a page.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Overlays:" />
      <ListGroup>
        <ListGroupItem href="overlays/lightbox">
          <ListGroupItemTitle title="Lighbox" />
          <ListGroupItemContent>
            A modal image gallery component that is used to display a collection of images.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="overlays/mask-loader">
          <ListGroupItemTitle title="Mask Loader" />
          <ListGroupItemContent>
            A component which are typically used for displaying a loading progress with backdrop
            overlay.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="overlays/modal">
          <ListGroupItemTitle title="Modal" />
          <ListGroupItemContent>
            A popup dialog component that brings information to the user. It also provides actions
            through the action buttons to prompt the user for input or to ask for a decision.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="overlays/notification">
          <ListGroupItemTitle title="Notification" />
          <ListGroupItemContent>
            TODO: Notification component's description.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="overlays/overlay">
          <ListGroupItemTitle title="Overlay" />
          <ListGroupItemContent>
            A lightweight component for displaying a backdrop overlay.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="overlays/popover">
          <ListGroupItemTitle title="Popover" />
          <ListGroupItemContent>
            A lightweight component which is used as a popup container.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="overlays/tooltip">
          <ListGroupItemTitle title="Tooltip" />
          <ListGroupItemContent>
            A component which is useful for conveying information when user hovers over an
            element.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Pickers:" />
      <ListGroup>
        <ListGroupItem href="pickers/color-picker">
          <ListGroupItemTitle title="Color Picker" badge="v2.0.0" />
          <ListGroupItemContent>
            A component that allow users to select a color using a variety of input methods.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="pickers/date-picker">
          <ListGroupItemTitle title="Date Picker" />
          <ListGroupItemContent>
            A component that generates a calendar style date selection widget.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Progress Control:" />
      <ListGroup>
        <ListGroupItem href="progress-controls/progress">
          <ListGroupItemTitle title="Progresss" />
          <ListGroupItemContent>
            A component which are typically used to visualize the data loading progress.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="progress-controls/progressbar">
          <ListGroupItemTitle title="Progress Bar" badge="v2.0.0" />
          <ListGroupItemContent>
            Bootstrap progress bar's component featuring support for animated background and text
            labels which are typically used for displaying simple progress bar.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  </ListGroup>
</template>
