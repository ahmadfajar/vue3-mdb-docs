const { onUnmounted, ref } = Vue;
const { BsArrayStore, createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const employee15 = ref();
    const peopleSrc2 = {
      proxy: new BsArrayStore(
        [
          {
            id: 1,
            name: 'Sandra Adams',
            avatar: 'https://ahmadfajar.github.io/img/1.jpg',
          },
          {
            id: 2,
            name: 'Ali Connors',
            avatar: 'https://ahmadfajar.github.io/img/2.jpg',
          },
          {
            id: 3,
            name: 'Trevor Hansen',
            avatar: 'https://ahmadfajar.github.io/img/3.jpg',
          },
          {
            id: 4,
            name: 'Tucker Smith',
            avatar: 'https://ahmadfajar.github.io/img/4.jpg',
          },
          {
            id: 5,
            name: 'Britta Holt',
            avatar: 'https://ahmadfajar.github.io/img/5.jpg',
          },
          {
            id: 6,
            name: 'Jane Smith',
            avatar: 'https://ahmadfajar.github.io/img/3.jpg',
          },
          {
            id: 7,
            name: 'John Smith',
            avatar: 'https://ahmadfajar.github.io/img/2.jpg',
          },
          {
            id: 8,
            name: 'Sandra Williams',
            avatar: 'https://ahmadfajar.github.io/img/4.jpg',
          },
        ],
        {
          idProperty: 'id',
        }
      ),
      schema: { displayField: 'name', valueField: 'id', imageField: 'avatar' },
    };

    onUnmounted(() => {
      peopleSrc2.proxy.destroy();
    });

    return { employee15, peopleSrc2 };
  },
});

app.mount('#app');
