const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const dateField8 = ref();
    const dateField9 = ref();
    const dateField10 = ref();
    
    return { dateField8, dateField9, dateField10 };
  },
});

app.mount('#app');
