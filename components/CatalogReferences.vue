<script setup lang="ts">
import ListGroup from './ListGroup.vue';
import ListGroupItem from './ListGroupItem.vue';
import ListGroupItemTitle from './ListGroupItemTitle.vue';
import ListGroupItemContent from './ListGroupItemContent.vue';
</script>

<template>
  <ListGroup class="md-shadow mt-4">
    <ListGroupItem href="global-api">
      <ListGroupItemTitle title="Global API" />
      <ListGroupItemContent>
        Global API provided by the Vue MDBootstrap.
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
    <ListGroupItem href="color-variants">
      <ListGroupItemTitle title="Color Variants" />
      <ListGroupItemContent>
        Various color classes and variants provided by Vue MDBootstrap.
      </ListGroupItemContent>
    </ListGroupItem>
    <ListGroupItem href="shadows">
      <ListGroupItemTitle title="Shadows" />
      <ListGroupItemContent>
        Add or remove shadows to elements with box-shadow utilities.
      </ListGroupItemContent>
    </ListGroupItem>
    <ListGroupItem>
      <ListGroupItemTitle tag="div" class="h5 mb-4" title="Utility Classes:" />
      <ListGroup>
        <ListGroupItem href="classes/model">
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
        <ListGroupItem href="classes/popupmanager">
          <ListGroupItemTitle title="PopupManager" />
          <ListGroupItemContent>
            Singleton instance that help manage the popup elements.
          </ListGroupItemContent>
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  </ListGroup>
</template>
