const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const openSideDrawer2 = ref(true);

    function toggleSideDrawer2(value) {
      openSideDrawer2.value = !value;
    }

    return {
      openSideDrawer2,
      toggleSideDrawer2,
    };
  }
});

app.mount('#app');
