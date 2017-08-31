import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import loading from '@/components/loading/index'
import account from '@/components/loading/account.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/account',
      name: 'account',
      component: account
    }
  ]
})
