/*
 * @Author: ZhouCong
 * @Date: 2022-03-03 10:40:12
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 10:43:22
 * @Description: file content
 * @FilePath: \find-project\src\router\news.ts
 */
import { RouteRecordRaw } from 'vue-router'
import newsIndex from '@/views/news/index.vue'
export const news: Array<RouteRecordRaw> = [
    {
        path: '/news',
        name: 'news',
        component: newsIndex
    },
]