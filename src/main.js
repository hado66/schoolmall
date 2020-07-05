import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
import router from "./router";


// const originalPush = Router.prototype.replace
// Router.prototype.replace = function replace(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

// const originalReplace = VueRouter.prototype.replace;
// VueRouter.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err);
// }


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
