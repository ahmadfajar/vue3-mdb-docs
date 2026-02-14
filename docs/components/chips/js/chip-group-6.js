const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedMultiple2 = ref([]);
    const chipItems2 = [
      { text: 'Arts' },
      { text: 'Creative Writers' },
      { text: 'Drawers' },
      { text: 'Foods' },
      { text: 'Home' },
      { text: 'Shopping' },
      { text: 'Tech' },
      { text: 'Vacation' },
      { text: 'Work' }
    ];

    return {
      selectedMultiple2,
      chipItems2
    };
  }
});

app.mount('#app');
