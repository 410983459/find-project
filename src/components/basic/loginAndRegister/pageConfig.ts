/*
 * @Author: ZhouCong
 * @Date: 2022-03-30 11:19:08
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-14 11:59:51
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\loginAndRegister\pageConfig.ts
 */
import { Rules } from '@/interface/loginAndRegister'
export const rules: Rules = {
    account: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'change',
        }
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'change',
        }
    ],
    verifyCode: [
        {
            required: true,
            message: '请输入验证码',
            trigger: 'change',
        }
    ]

}