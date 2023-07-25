const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const openSideDrawer1 = ref(true);

    function toggleSideDrawer1(value) {
      openSideDrawer1.value = !value;
    }

    return {
      openSideDrawer1,
      toggleSideDrawer1,
    };
  }
});

app.mount('#app');
