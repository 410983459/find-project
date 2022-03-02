import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
import { articleCategories } from './articleCategories'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      ...articleCategories
    ]
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('@/views/notFound/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
