import Vue from 'vue'
import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
//import TestApp from './test/TestApp.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const StoreModal = {
  template: `
<div class="text-center my-3">
  <b-btn 
    v-b-tooltip.hover 
    @click="$router.push('/')"
    :title="'This will be modal for store : '+$route.params.id"> choice : {{$route.params.id}}, reset to click </b-btn>
</div>
` }

const router = new VueRouter({
  routes: [
    { path: '/store/:id', component: StoreModal }
  ]
});

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
