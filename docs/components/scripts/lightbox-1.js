const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const lightbox1 = ref();
    const showGalleryItems1 = ref(false);
    const galleryItems1 = [
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=251',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
        title: 'First image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=252',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=252',
        title: 'Second image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=253',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=253',
        title: 'Third image title',
      },
      {
        thumbnail: 'https://unsplash.it/200.jpg?image=254',
        imageSrc: 'https://unsplash.it/1200/768.jpg?image=254',
        title: 'Fourth image title',
      },
    ];

    const openGallery1At = (index) => {
      if (index != null && index > -1) {
        lightbox1.value?.openAt(index);
      } else {
        showGalleryItems1.value = true;
      }
    }

    return { lightbox1, showGalleryItems1, galleryItems1, openGallery1At };
  },
});

app.mount('#app');
