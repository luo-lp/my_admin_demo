// 这个模块主要实现路由封装
// 1.引入vue
import Vue from 'vue'
// 2.引入vue-router
import VueRouter from 'vue-router'

// 引入组件
import father from '@/components/father.vue'
import index from '@/components/index.vue'

// 3.use：让vue使用vue-router进行路由管理
Vue.use(VueRouter)

// 4.创建路由对象：实现路由和组件的映射
export default new VueRouter({
  // 5.添加路由配置，通过routes可以实现路由配置
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'father' }
    },
    {
      name: 'father',
      path: '/father',
      component: father
    },
    {
      name: 'index',
      path: '/index',
      component: index
    }
  ]
})
