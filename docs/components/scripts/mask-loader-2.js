const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';
    const showLinear1 = ref(false);
    const showLinear2 = ref(false);
    const showSpinner = ref(false);
    const showGrow = ref(false);

    return {
      loremIpsum,
      showLinear1,
      showLinear2,
      showSpinner,
      showGrow
    };
  }
});

app.mount('#app');
