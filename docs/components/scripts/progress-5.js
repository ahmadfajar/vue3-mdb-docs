const { onBeforeUnmount, onMounted, ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const progress1 = ref(10);
    const timer = ref();

    onMounted(() => {
      timer.value = window.setInterval(() => {
        progress1.value += 10;
        if (progress1.value > 100) {
          progress1.value = 0;
        }
      }, 1000);
    });

    onBeforeUnmount(() => {
      if (timer.value) {
        clearInterval(timer.value);
      }
    });

    return {
      progress1,
      timer
    };
  }
});

app.mount('#app');
