import Vue from 'vue';
import axios from 'axios';
import VueCookie from 'vue-cookie';

import MaterialKit from './plugins/material-kit';
import router from './router';
import myMixin from './mixin';
import EventBus from "./EventBus";

import App from './App.vue';

Vue.use(MaterialKit);
Vue.use(VueCookie);
Vue.mixin(myMixin);
Vue.prototype.$http = axios;
Vue.prototype.$bus = EventBus;

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
