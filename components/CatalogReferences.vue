<script setup lang="ts">
import ListGroup from './ListGroup.vue';
import ListGroupItem from './ListGroupItem.vue';
import ListGroupItemTitle from './ListGroupItemTitle.vue';
import ListGroupItemContent from './ListGroupItemContent.vue';
</script>

<template>
  <ListGroup class="shadow-sm mt-4">
    <ListGroupItem href="global-api">
      <ListGroupItemTitle title="Global API" />
      <ListGroupItemContent>
        Functional API provided by the Vue MDBootstrap.
      </ListGroupItemContent>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Data API:" />
      <ListGroup>
        <ListGroupItem href="data/model">
          <ListGroupItemTitle title="BsModel" />
          <ListGroupItemContent>
            A built-in data model class for working with entity object and remote API.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="data/store">
          <ListGroupItemTitle title="BsStore" />
          <ListGroupItemContent>
            A built-in data store class for working with collection of entity objects and remote API.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="data/array-store">
          <ListGroupItemTitle title="BsArrayStore" />
          <ListGroupItemContent>
            A built-in data store class for working with collection of entity objects locally.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Utility Classes:" />
      <ListGroup>
        <ListGroupItem href="classes/color">
          <ListGroupItemTitle title="Color" />
          <ListGroupItemContent>
            Static utility helper class for working with colors.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="classes/helper">
          <ListGroupItemTitle title="Helper" />
          <ListGroupItemContent>
            Static utility helper class for commonly used functions.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="classes/stringhelper">
          <ListGroupItemTitle title="StringHelper" />
          <ListGroupItemContent>
            Static utility helper class for working with strings.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="classes/cachemanager">
          <ListGroupItemTitle title="CacheManager" badge="v2.2.0" />
          <ListGroupItemContent>
            A singleton instance that caches data objects in the sessionStorage 
            if available, otherwise memory is used.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="classes/popupmanager">
          <ListGroupItemTitle title="PopupManager" />
          <ListGroupItemContent>
            A singleton instance that help manage the popup elements.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
    <ListGroupItem href="colors">
      <ListGroupItemTitle title="Colors" />
      <ListGroupItemContent>
        Various color variants and their CSS classes provided by Vue MDBootstrap.
      </ListGroupItemContent>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="CSS Utilities:" />
      <ListGroup>
        <ListGroupItem href="css-utils/borders">
          <ListGroupItemTitle title="Borders" badge="v2.2.0" />
          <ListGroupItemContent>
            CSS classes to quickly style the border and border-radius of an element.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/display">
          <ListGroupItemTitle title="Display" badge="v2.2.0" />
          <ListGroupItemContent>
            CSS classes for controlling the display value of an element.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/flex">
          <ListGroupItemTitle title="Flex" badge="v2.2.0" />
          <ListGroupItemContent>
            CSS classes for controlling the flex items.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/grid">
          <ListGroupItemTitle title="Grid" badge="v2.2.0" />
          <ListGroupItemContent>
            CSS classes to build flexbox grid layout with twelve column system 
            and six default responsive tiers.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/position">
          <ListGroupItemTitle title="Position" badge="v2.2.0" />
          <ListGroupItemContent>
            CSS classes for controlling the element position.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/shadows">
          <ListGroupItemTitle title="Shadows"/>
          <ListGroupItemContent>
            Add or remove shadows to elements with box-shadow utilities.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/size">
          <ListGroupItemTitle title="Size" badge="v2.2.0" />
          <ListGroupItemContent>
            CSS classes for controlling the element size.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/spacing">
          <ListGroupItemTitle title="Spacing" badge="v2.2.0" />
          <ListGroupItemContent>
            CSS classes to quickly control the margin and padding of an element.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/text">
          <ListGroupItemTitle title="Text" badge="v2.2.0" />
          <ListGroupItemContent>
            CSS classes to quickly style the text color, font-size and font-weight of an element.
          </ListGroupItemContent>
        </ListGroupItem>
        <ListGroupItem href="css-utils/others">
          <ListGroupItemTitle title="Others" badge="v2.2.0" />
          <ListGroupItemContent>
            Unclassified CSS classes to quickly style an element.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  </ListGroup>
</template>
