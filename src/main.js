import Vue from 'vue'
import './antd'
import Router from './routes/router'
import App from './App.vue'
import './assets/css/animate.min.css'

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
