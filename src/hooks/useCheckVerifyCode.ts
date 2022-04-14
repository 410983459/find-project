/*
 * @Author: ZhouCong
 * @Date: 2022-04-14 10:24:19
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-14 11:05:11
 * @Description: file content
 * @FilePath: \find-project\src\hooks\useCheckVerifyCode.ts
 */

import { ElMessage } from "element-plus";
import { verifyCodeParam } from "@/interface/loginAndRegister";
import { checkCode } from "@/api/loginAndRegister";

// 校验验证码
export const useCheckVerifyCode = async (verifyCode: string) => {
    let param: verifyCodeParam = {
        captcha: verifyCode,
    };
    const res = await checkCode(param);
    if (res.data.code === 200) return true;
    ElMessage.error(res.data.data as string);
    return false;
}
