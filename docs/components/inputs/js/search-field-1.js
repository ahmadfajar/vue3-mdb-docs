const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    function onSearch(term) {
      alert('Search keyword: ' + term);
    }

    return { onSearch };
  },
});

app.mount('#app');
