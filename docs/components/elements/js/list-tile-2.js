const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const listItems1 = [
      {
        avatar: 'https://ahmadfajar.github.io/img/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: "<b>Ali Connors</b> &#8212; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        avatar: 'https://ahmadfajar.github.io/img/2.jpg',
        title: 'Summer BBQ',
        subtitle: "<b>to Alex, Scott, Jennifer</b> &mdash; Wish I could come, but I'm out of town this weekend."
      },
      {
        avatar: 'https://ahmadfajar.github.io/img/3.jpg',
        title: 'Oui oui',
        subtitle: '<b>Sandra Adams</b> &mdash; Do you have Paris recommendations? Have you ever been?'
      },
      {
        avatar: 'https://ahmadfajar.github.io/img/4.jpg',
        title: 'Birthday gift',
        subtitle: '<b>Trevor Hansen</b> &mdash; Have any ideas about what we should get Heidi for her birthday?'
      }
    ];
    const content = 'Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua consequat id aliqua.';

    return {
      content,
      listItems1,
    };
  }
});

app.mount('#app');
