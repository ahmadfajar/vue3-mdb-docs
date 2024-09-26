const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const noOverlayVisible = ref(false);

    return { noOverlayVisible };
  },
});

app.mount('#app');
