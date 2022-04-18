/*
 * @Author: ZhouCong
 * @Date: 2022-02-25 17:48:38
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-18 19:16:11
 * @Description: file content
 * @FilePath: \find-project\src\store\index.ts
 */
import { createStore } from 'vuex'
import { loginInfo, LoginState } from './modules/loginInfo'


//定义RootState接口，将所有模块类型放入
export interface RootState {
  loginInfo: LoginState
}

export default createStore<RootState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    loginInfo
  }
})
