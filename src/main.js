import Vue from 'vue';
import axios from 'axios';

import MaterialKit from './plugins/material-kit';
import router from './router';
import myMixin from './mixin';

import App from './App.vue';

Vue.use(MaterialKit);
Vue.mixin(myMixin);
Vue.prototype.$http = axios;

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
