const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const newYork = ref(72);
    const sanFransisco = ref(39);
    const sydney = ref(25);
    const singapore = ref(61);

    return {
      newYork,
      sanFransisco,
      sydney,
      singapore,
    };
  },
});

app.mount('#app');
