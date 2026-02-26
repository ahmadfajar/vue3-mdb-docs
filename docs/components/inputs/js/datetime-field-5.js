const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField11 = ref();
    
    return { dateField11 };
  },
});

app.mount('#app');
