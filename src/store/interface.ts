/*
 * @Author: ZhouCong
 * @Date: 2022-04-19 10:53:32
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-19 10:55:54
 * @Description: file content
 * @FilePath: \find-project\src\store\interface.ts
 */

export interface LoginState {
    isLogin: boolean
}
//定义RootState接口，将所有模块类型放入
export interface RootState {
    loginInfo: LoginState
  }
  