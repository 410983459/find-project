/*
 * @Author: ZhouCong
 * @Date: 2022-03-03 10:40:12
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 10:43:02
 * @Description: file content
 * @FilePath: \find-project\src\router\course.ts
 */
import { RouteRecordRaw } from 'vue-router'
import courseIndex from '@/views/course/index.vue'
export const course: Array<RouteRecordRaw> = [
    {
        path: '/course',
        name: 'course',
        component: courseIndex
    },
]