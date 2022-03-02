/*
 * @Author: ZhouCong
 * @Date: 2022-03-02 13:31:20
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-02 16:16:27
 * @Description: file content
 * @FilePath: \find-project\src\router\articleCategories.ts
 */
import { RouteRecordRaw } from 'vue-router'
import article from '@/views/articles/index.vue'
export const articleCategories: Array<RouteRecordRaw> = [
    {
        path: 'comprehensive',
        name: 'comprehensive',
        component: article
    },
]