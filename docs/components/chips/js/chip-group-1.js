const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const selectedChips1 = ref();
    const chipItems1 = [
      { text: 'Arts' },
      { text: 'Creative Writers' },
      { text: 'Drawers' },
      { text: 'Foods' },
    ];

    return {
      selectedChips1,
      chipItems1
    };
  }
});

app.mount('#app');
