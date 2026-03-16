const { ref } = Vue;
const { createVueMdb } = VueMdb;

const app = createVueMdb({
  setup() {
    const demoTabs5 = ref(0);
    const homeTab = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
    const profileTab = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.";
    const storyTab = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.";
    const loremTab = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Vulputate ut pharetra sit amet. Lobortis scelerisque fermentum dui faucibus. Arcu non odio euismod lacinia at quis risus sed. Non enim praesent elementum facilisis leo. Egestas diam in arcu cursus euismod. Netus et malesuada fames ac turpis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue quisque egestas diam in arcu cursus euismod. Turpis massa tincidunt dui ut ornare. Arcu ac tortor dignissim convallis aenean et tortor at risus. Egestas purus viverra accumsan in nisl nisi scelerisque. Mi ipsum faucibus vitae aliquet nec ullamcorper.';

    return { demoTabs5, homeTab, profileTab, storyTab, loremTab };
  },
});

app.mount('#app');
