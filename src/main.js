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
  },
  methods: {
    addClass(el, className) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += " " + className;
      }
    },
    removeClass(el, className) {
      if (el.classList) el.classList.remove(className);
      else
        el.className = el.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
    },
    hasClass(el, className) {
      if (el.classList)
        return el.classList.contains(className);
      else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }
});

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
