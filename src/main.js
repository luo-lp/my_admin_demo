import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import '@/styles/icon.less'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router/router.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  let mytoken = localStorage.getItem('itcast_manager_35_token')
  if (mytoken || to.path === '/login') {
    next()
  } else {
    next({ path: '/login' })
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
