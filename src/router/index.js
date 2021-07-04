import Vue from 'vue'
import Router from 'vue-router'
import RandomCat from '@/components/RandomCat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RandomCat',
      component: RandomCat
    }
  ]
})
