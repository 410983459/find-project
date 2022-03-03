/*
 * @Author: ZhouCong
 * @Date: 2022-03-03 14:06:14
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 16:07:27
 * @Description: file content
 * @FilePath: \find-project\src\router\home.ts
 */
import { RouteRecordRaw } from 'vue-router'
import article from '@/views/articles/index.vue'
export const homePage: Array<RouteRecordRaw> = [
    {
        path: 'home',
        name: 'home',
        redirect: '/home/comprehensive',
        component: () => import('@/views/home/index.vue'),
        children: [
            {
                path: 'comprehensive',
                name: 'comprehensive',
                component: article
            },
        ]
    },
]