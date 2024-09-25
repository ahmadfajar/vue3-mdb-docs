const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const showOverlay = ref(false);

    function hideOverlay() {
      showOverlay.value = false;
    }

    return {
      showOverlay,
      hideOverlay,
    };
  },
});

app.mount('#app');
