const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const miniSideDrawer1 = ref(true);

    return {
      miniSideDrawer1,
    };
  }
});

app.mount('#app');
