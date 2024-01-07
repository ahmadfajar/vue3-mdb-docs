const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const progress4 = ref(50);
    const progress5 = ref(65);
    const progress6 = ref(80);

    return {
      progress4,
      progress5,
      progress6
    };
  }
});

app.mount('#app');
