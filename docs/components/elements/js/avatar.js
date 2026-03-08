const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const isSpin = ref(false);
    const isPulse = ref(false);

    return {
      isSpin,
      isPulse
    };
  }
});

app.mount('#app');
