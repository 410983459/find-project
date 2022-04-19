/*
 * @Author: ZhouCong
 * @Date: 2022-02-25 17:48:38
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-19 14:51:09
 * @Description: file content 
 * @FilePath: \find-project\src\store\index.ts
 */
import { createStore } from 'vuex'

import { loginInfo } from './modules/loginInfo'
import { RootState } from './interface'

export default createStore<RootState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    loginInfo
  }
})
