const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedMultiple1 = ref([]);
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
      selectedMultiple1,
      chipItems2
    };
  }
});

app.mount('#app');
