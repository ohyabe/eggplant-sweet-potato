import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: () => import('../views/Activity.vue')
    },
    {
      path: '/fetch',
      name: 'fetch',
      component: () => import('../views/fetch.vue')
    },
    {

      path: '/fetch2',
      name: 'fetch2',
      component: () => import('../views/fetch2.vue')
    },
    {
      path: '/fetch3',
      name: 'fetch3',
      component: () => import('../views/fetch3.vue')
    },
    //   path: '/tainanMap',
    //   name: 'tainanMap',
    //   component: () => import('../views/tainanMap.vue')

    // }
  ]
})

export default router
