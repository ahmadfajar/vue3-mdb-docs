const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida in fermentum et sollicitudin.';
    const showLoader1 = ref(false);
    const showLoader2 = ref(false);
    const showSpinnerLoader = ref(false);
    const showGrowLoader = ref(false);
    
    return {
      loremIpsum,
      showLoader1,
      showLoader2,
      showSpinnerLoader,
      showGrowLoader
    };
  }
});

app.mount('#app');
