const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const picker8 = ref();

    return { picker8 };
  },
});

app.mount('#app');
