const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const openSideDrawer = ref(true);

    function toggleSideDrawer(value) {
      openSideDrawer.value = !value;
    }

    return {
      openSideDrawer,
      toggleSideDrawer
    };
  }
});

app.mount('#app');
