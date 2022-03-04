/*
 * @Author: ZhouCong
 * @Date: 2022-03-04 13:30:13
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 17:02:09
 * @Description: file content
 * @FilePath: \find-project\src\router\myPage.ts
 */
import { RouteRecordRaw } from 'vue-router'
import myPageIndex from '@/views/myPage/index.vue'
export const myPage: Array<RouteRecordRaw> = [
    {
        path: '/myPage',
        name: 'myPage',
        component: myPageIndex
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/settingInfo/index.vue')
    },
]