const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField19 = ref();
    
    return { dateField19 };
  },
});

app.mount('#app');
