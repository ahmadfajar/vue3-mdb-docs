const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const progress2 = ref(25);
    const buffer1 = ref(50);

    return {
      progress2,
      buffer1
    };
  }
});

app.mount('#app');
