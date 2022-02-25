/*
 * @Author: ZhouCong
 * @Date: 2022-02-24 13:56:03
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-02-25 13:59:41
 * @Description: file content
 * @FilePath: \find-project\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/reset.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
