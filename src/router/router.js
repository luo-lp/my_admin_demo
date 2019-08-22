import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login.vue'
import Home from '@/views/home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'defalut',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'Home',
      path: '/Home',
      component: Home
    }
  ]
})
