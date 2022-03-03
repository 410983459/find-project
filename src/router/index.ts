import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'
// 不同类型的文章相关路由
import { articleCategories } from './articleCategories'
// 一角
import { corner } from './corner'
// 新闻
import { news } from './news'
// 课程
import { course } from './course'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/comprehensive',
    children: [
      ...articleCategories
    ]
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('@/views/notFound/index.vue')
  },
  ...corner,
  ...news,
  ...course
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
