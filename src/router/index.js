import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home/index'
import loading from '@/components/loading/index'
import account from '@/components/loading/account.vue'

import calculate from '@/components/home/registerInfo/calculate.vue'
import baseInfo from '@/components/home/registerInfo/baseInfo.vue'

import IDUpload from '@/components/home/identifyInfo/IDUpload.vue'
import IDInfo from '@/components/home/identifyInfo/IDInfo.vue'
import faceInfo from '@/components/home/identifyInfo/faceInfo.vue'

import bindInfo from '@/components/home/bindInfo/bindInfo.vue'
import bindDetail from '@/components/home/bindInfo/bindDetail.vue'
import showDetail from '@/components/home/bindInfo/showDetail.vue'
import authorization from '@/components/home/bindInfo/authorization.vue'


import signContract from '@/components/home/signContract/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home/registerInfo/calculate',
    },
    {
      path: '/home',
      component: index,
      children: [
        {
          path: 'registerInfo/calculate',
          component: calculate,
        },
        {
          path: 'registerInfo/baseInfo',
          component: baseInfo,
        },
        {
          path: 'identifyInfo/IDUpload',
          component: IDUpload,
        },
        {
          path: 'identifyInfo/IDInfo',
          component: IDInfo,
        },
        {
          path: 'identifyInfo/faceInfo',
          component: faceInfo,
        },
        {
          path: 'bindInfo/index',
          component: bindInfo,
        },
        {
          path: 'bindInfo/detail',
          component: bindDetail,
        },
        {
          path: 'bindInfo/showDetail',
          component: showDetail,
        },
        {
          path: 'bindInfo/authorization',
          component: authorization,
        },
        {
          path: 'signContract',
          component: signContract,
        }
      ] 
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
