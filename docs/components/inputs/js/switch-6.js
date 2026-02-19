const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const switch7 = ref();
    const switch8 = ref();
    const switch9 = ref();
    const switch10 = ref('on');

    return { switch7, switch8, switch9, switch10 };
  },
});

app.mount('#app');
