const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const lightbox4 = ref();
    const showGalleryItems4 = ref(false);
    const buttons = { download: true, rotate: true, menubar: true, close: true };
    const galleryItems4 = [
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=255',
        sourceUrl: 'https://unsplash.it/1200/768.jpg?image=255',
        title: 'First image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=256',
        sourceUrl: 'https://unsplash.it/1200/768.jpg?image=256',
        title: 'Second image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=257',
        sourceUrl: 'https://unsplash.it/1200/768.jpg?image=257',
        title: 'Third image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=258',
        sourceUrl: 'https://unsplash.it/1200/768.jpg?image=258',
        title: 'Fourth image title',
      },
    ];

    return { lightbox4, buttons, showGalleryItems4, galleryItems4 };
  },
});

app.mount('#app');
