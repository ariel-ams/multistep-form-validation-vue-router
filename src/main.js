import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import VueRouter from 'vue-router';
import { routes } from './routes.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
