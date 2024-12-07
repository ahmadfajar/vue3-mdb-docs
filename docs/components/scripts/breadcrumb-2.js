const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const items2 = [
      { label: 'Home', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Breadcrumb', href: '#' },
    ];

    return { items2 };
  },
});

app.mount('#app');
