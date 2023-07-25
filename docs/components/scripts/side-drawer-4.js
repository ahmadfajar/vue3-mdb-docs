const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const openSideDrawer4 = ref(true);

    function toggleSideDrawer4(value) {
      openSideDrawer4.value = !value;
    }

    return {
      openSideDrawer4,
      toggleSideDrawer4,
    };
  }
});

app.mount('#app');
