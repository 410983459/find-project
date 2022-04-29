/*
 * @Author: ZhouCong
 * @Date: 2022-04-29 11:18:15
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 13:20:59
 * @Description: file content
 * @FilePath: \find-project\src\store\modules\personalInfo.ts
 */
import { Module } from "vuex"
import { RootState, PersonalInfo } from '../interface'
import * as Types from '../types'
import { UserInfoItem } from "@/interface/myPage";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";

export const personalInfo: Module<PersonalInfo, RootState> = {
    namespaced: true,
    state: (): PersonalInfo => ({
        personalInfo: {
            Address: '',
            AvatarUrl: '',
            Company: '',
            Network: '',
            Nickname: '',
            School: '',
            Score: 0,
            Signature: '',
        }
    }),
    mutations: {
        [Types.SET_PERSONAL_INFO](state, info: UserInfoItem) {
            state.personalInfo = info
        }
    },
    actions: {
        async [Types.SET_PERSONAL_INFO]({ commit }) {
            const res = await useGetUserInfo()
            console.log(res);
            commit(Types.SET_PERSONAL_INFO, res)
        }
    },
}