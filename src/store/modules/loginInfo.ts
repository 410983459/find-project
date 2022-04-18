/*
 * @Author: ZhouCong
 * @Date: 2022-04-18 18:15:09
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-18 19:28:42
 * @Description: file content
 * @FilePath: \find-project\src\store\modules\loginInfo.ts
 */
import { Module } from "vuex"
import { RootState } from '../index'

//定义类型
export interface LoginState {
    isLogin: boolean
}

export const loginInfo: Module<LoginState, RootState> = {
    namespaced: true,
    state: (): LoginState => ({
        isLogin: false
    }),
    mutations: {

    },
    actions: {
    },
}
