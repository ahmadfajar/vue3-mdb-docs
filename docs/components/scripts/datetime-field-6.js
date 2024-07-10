const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField12 = ref();
    
    return { dateField12 };
  },
});

app.mount('#app');
