const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const showLoader = ref(false);

    return {
      showLoader
    };
  }
});

app.mount('#app');
