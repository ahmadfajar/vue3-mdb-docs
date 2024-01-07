const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const progress1 = ref(25);

    return {
        progress1
    };
  }
});

app.mount('#app');
