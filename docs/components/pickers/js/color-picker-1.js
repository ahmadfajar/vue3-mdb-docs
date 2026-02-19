const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const color1 = ref('#1669de');
    const mode1 = ref();

    return { color1, mode1 };
  },
});

app.mount('#app');
