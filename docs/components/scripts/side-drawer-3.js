const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const openSideDrawer3 = ref(true);

    function toggleSideDrawer3(value) {
      openSideDrawer3.value = !value;
    }

    return {
      openSideDrawer3,
      toggleSideDrawer3,
    };
  }
});

app.mount('#app');
