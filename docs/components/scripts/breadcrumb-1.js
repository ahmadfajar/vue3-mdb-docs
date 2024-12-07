const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const items1 = [
      { label: 'Home', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Breadcrumb', href: '#' },
    ];

    return { items1 };
  },
});

app.mount('#app');
