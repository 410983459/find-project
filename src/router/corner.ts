/*
 * @Author: ZhouCong
 * @Date: 2022-03-03 10:25:16
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 10:29:51
 * @Description: file content
 * @FilePath: \find-project\src\router\corner.ts
 */
import { RouteRecordRaw } from 'vue-router'
import cornerIndex from '@/views/corner/index.vue'
export const corner: Array<RouteRecordRaw> = [
    {
        path: '/corner',
        name: 'corner',
        component: cornerIndex
    },
]