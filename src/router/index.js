import Vue from 'vue'
import Router from 'vue-router'
import nameList from '@/components/nameList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nameList',
      component: nameList
    },
    {
      path: '/',
      name: 'apiFetch',
      component: apiFetch
    }
  ]
})
