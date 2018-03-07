import IntersectionObserver from 'intersection-observer'
import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import VueClazyLoad from 'vue-clazy-load'

Vue.config.productionTip = false
Vue.use(VueClazyLoad)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
