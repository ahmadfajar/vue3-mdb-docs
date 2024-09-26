const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const lightbox2 = ref();
    const showGalleryItems2 = ref(false);
    const buttons = { download: true, rotate: true, menubar: true, close: true };
    const galleryItems2 = [
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=255',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=255',
        title: 'First image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=256',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=256',
        title: 'Second image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=257',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=257',
        title: 'Third image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=258',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=258',
        title: 'Fourth image title',
      },
    ];

    const openGallery2At = (index) => {
      if (index != null && index > -1) {
        lightbox2.value?.openAt(index);
      } else {
        showGalleryItems2.value = true;
      }
    };

    return { lightbox2, buttons, showGalleryItems2, galleryItems2, openGallery2At };
  },
});

app.mount('#app');
