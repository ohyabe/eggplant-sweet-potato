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
      path: '/Test',
      name: 'Test',
      component: () => import('../views/Test.vue')
    },
    {
      path: '/fetch',
      name: 'fetch',
      component: () => import('../views/fetch.vue')
    },
    {
<<<<<<< HEAD
      path: '/fetch2',
      name: 'fetch2',
      component: () => import('../views/fetch2.vue')
    },
    {
      path: '/fetch3',
      name: 'fetch3',
      component: () => import('../views/fetch3.vue')
=======
      path: '/tainanMap',
      name: 'tainanMap',
      component: () => import('../views/tainanMap.vue')
>>>>>>> c4931c6d80b1e7022c8e9aa76bf25b3c0c7c42ff
    }
  ]
})

export default router
