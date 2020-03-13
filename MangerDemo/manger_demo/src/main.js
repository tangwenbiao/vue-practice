import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import "@/style/variables.scss"
import "@/style/sidebar.scss"
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
