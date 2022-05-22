/*
 * @Author: ZhouCong
 * @Date: 2022-02-25 17:48:38
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 13:22:03
 * @Description: file content 
 * @FilePath: \find-project\src\store\index.ts
 */
import { createStore } from 'vuex'

import { loginInfo } from './modules/loginInfo'
import { personalInfo } from './modules/personalInfo'
import { RootState } from './interface'
import {CategoriesAndTag} from './modules/CategoriesAndTag'

export default createStore<RootState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    loginInfo,
    personalInfo,
    CategoriesAndTag
  }
})
