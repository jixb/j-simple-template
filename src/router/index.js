import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../views/index'], resolve)
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
