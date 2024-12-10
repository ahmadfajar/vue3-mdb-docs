const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    function showWithProgressBar(notification, title, variant) {
      let options = {
        message: 'Hello, this is a notification message.',
        title: title,
        variant: variant,
        progressBar: true,
      };

      notification.add(options);
    }

    return { showWithProgressBar };
  },
});

app.mount('#app');
