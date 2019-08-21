import Vue from 'vue'
import '@/styles/animate.css'

// 引入路由模块
import router from '@/router/index.js'

import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 设置当前是开发阶段
Vue.config.productionTip = false

new Vue({
  // 注入路由：让当前应用使用我们所配置好的路由
  router,
  // el: '#app',
  // 渲染组件到页面
  render: h => h(App)
}).$mount('#app')
