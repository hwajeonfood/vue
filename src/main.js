import Vue from 'vue'
import MaterialKit from "./plugins/material-kit";

import App from './App.vue'
import router from "./router";
//import TestApp from './test/TestApp.vue'

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
