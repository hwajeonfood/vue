import Vue from 'vue';
import axios from 'axios';

import MaterialKit from './plugins/material-kit';
import router from './router';
import myMixin from './mixin';
import EventBus from "./EventBus";

import App from './App.vue';

Vue.use(MaterialKit);
Vue.mixin(myMixin);
Vue.prototype.$http = axios;
Vue.prototype.$bus = EventBus; // 필요시 사용 용도

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
