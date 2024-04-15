const { ref } = Vue;
const { createVueMdb, Helper } = VueMdb;

const app = createVueMdb({
  setup() {
    const loading = ref(false);
    const switch13 = ref();
    const switch14 = ref();
    const switch15 = ref();

    function submit(notification) {
      loading.value = true;

      Helper.defer(() => {
        loading.value = false;
        notification.success('Configuration has been saved.', 'Success');
      }, 1000);
    }

    return { loading, switch13, switch14, switch15, submit };
  },
});

app.mount('#app');
