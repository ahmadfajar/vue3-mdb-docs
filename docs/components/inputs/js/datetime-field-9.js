const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField15 = ref();
    
    return { dateField15 };
  },
});

app.mount('#app');
