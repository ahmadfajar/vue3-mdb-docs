const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const showSingleItem = ref(false);
    const galleryItems3 = [
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=259',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=259',
        title: 'Your image title',
      },
    ];

    return { showSingleItem, galleryItems3 };
  },
});

app.mount('#app');
