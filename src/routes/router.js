import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './login'
import Home from './home'
import Goods from './goods'

Vue.use(VueRouter)

export const RouterConfig = [
  ...Login,
  ...Home,
  ...Goods
]

const Router = new VueRouter({
  routes: RouterConfig
})

export default Router