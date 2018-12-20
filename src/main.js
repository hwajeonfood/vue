import Vue from 'vue';
import axios from 'axios';
import VueCookie from 'vue-cookie';

import MaterialKit from './plugins/material-kit';
import router from './router';
import myMixin from './mixin';
import EventBus from "./EventBus";
import i18n from './i18n';

import App from './App.vue';

Vue.use(MaterialKit);
Vue.use(VueCookie);
Vue.mixin(myMixin);
Vue.prototype.$http = axios;
Vue.prototype.$bus = EventBus;

const app = new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(App)
});
