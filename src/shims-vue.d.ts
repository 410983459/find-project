/*
 * @Author: ZhouCong
 * @Date: 2022-02-25 17:48:38
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-29 20:33:03
 * @Description: file content
 * @FilePath: \find-project\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "*.js"
declare module 'prismjs'
declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/preview'
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'