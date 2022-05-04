/*
 * @Author: ZhouCong
 * @Date: 2022-04-19 10:53:32
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 13:08:52
 * @Description: file content
 * @FilePath: \find-project\src\store\interface.ts
 */

import { UserInfoItem } from "@/interface/myPage";
export interface LoginState {
    isLogin: boolean
}
//定义RootState接口，将所有模块类型放入
export interface RootState {
    loginInfo: LoginState,
    personalInfo: PersonalInfo
}
export interface PersonalInfo {
    personalInfo: UserInfoItem
}

