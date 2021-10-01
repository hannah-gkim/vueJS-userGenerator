const app = Vue.createApp({
  //   template: "<h1>{{firstName}}</h1>",
  data() {
    return {
      firstName: "Hannah",
      lastName: "Kim",
      email: "hannah@email.com",
      gender: "female",
      picture: "http://randomuser.me/api/portraits/women/3.jpg",
    };
  },
  methods:{
    getUser(){}
  }
});

app.mount("#app");
