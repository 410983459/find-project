/*
 * @Author: ZhouCong
 * @Date: 2022-04-18 18:15:09
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-19 17:10:34
 * @Description: file content
 * @FilePath: \find-project\src\store\modules\loginInfo.ts
 */
import { Module } from "vuex"
import { RootState, LoginState } from '../interface'
import * as Types from '../types'

export const loginInfo: Module<LoginState, RootState> = {
    namespaced: true,
    state: (): LoginState => ({
        isLogin: false
    }),
    mutations: {
        [Types.SET_LOGIN_INFO](state, tokenState: boolean) {
            state.isLogin = tokenState
        }
    },
    actions: {
        [Types.SET_LOGIN_INFO]({ commit },login_state) {
            commit(Types.SET_LOGIN_INFO, login_state)
        }
    },
}
