/*
 * @Author: ZhouCong
 * @Date: 2022-03-30 11:20:15
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-18 17:34:19
 * @Description: file content
 * @FilePath: \find-project\src\interface\loginAndRegister.ts
 */
export interface RulesItem {
    required: Boolean,
    message: String,
    trigger: String,
}
export interface Rules {
    account: RulesItem[],
    password: RulesItem[],
    verifyCode: RulesItem[],
}
export interface verifyCodeParam{
    captcha:String
}
export interface RegisterAndLogin{
    account:String,
    password:String
}
