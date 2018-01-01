import Vue from 'vue'
import Router from 'vue-router'
import nameList from '@/components/nameList'
import apiFetch from '@/components/apiFetch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nameList',
      component: nameList
    },
    {
      path: '/api',
      name: 'apiFetch',
      component: apiFetch
    }
  ]
})
