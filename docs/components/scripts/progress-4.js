const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const spinner1 = ref(70);

    return {
      spinner1
    };
  }
});

app.mount('#app');
