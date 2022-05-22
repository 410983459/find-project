/*
 * @Author: ZhouCong
 * @Date: 2022-03-30 11:20:15
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-18 17:34:19
 * @Description: file content
 * @FilePath: \find-project\src\interface\loginAndRegister.ts
 */
export interface RulesItem {
    required: boolean,
    message: string,
    trigger: string,
}
export interface Rules {
    account: RulesItem[],
    password: RulesItem[],
    verifyCode: RulesItem[],
}
export interface verifyCodeParam{
    captcha:string
}
export interface RegisterAndLogin{
    account:string,
    password:string
}
