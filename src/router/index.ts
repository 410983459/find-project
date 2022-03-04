import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/home.vue'
import create from '@/views/create/index.vue'
// 首页
import { homePage } from './home'
// 一角
import { corner } from './corner'
// 新闻
import { news } from './news'
// 课程
import { course } from './course'
// 个人中心
import { myPage } from './myPage'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/home',
    children: [
      ...homePage,
      ...corner,
      ...news,
      ...course,
      ...myPage
    ]
  },
  {
    path: '/create',
    name: 'create',
    component: create
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
