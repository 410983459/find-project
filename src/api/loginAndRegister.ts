/*
 * @Author: ZhouCong
 * @Date: 2022-03-30 13:59:30
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-13 18:32:14
 * @Description: file content
 * @FilePath: \find-project\src\api\loginAndRegister.ts
 */
import http from '@/utils/request/index'
import { AxiosPromise } from 'axios';
import { comRes } from '@/interface/request'
import { verifyCodeParam } from '@/interface/loginAndRegister'

const URLS = {
    verifyCodeApi: '/captcha/CaptchaImg',//获取验证码
    checkVerifyCodeApi: '/captcha/CheckCaptcha',//校验验证码
}

//  获取验证码
export const getVerifyCode = (): any => {
    return http.request<any>({
        url: URLS.verifyCodeApi,
        method: 'get'
    });
};
//  校验验证码
export const checkCode = (params: verifyCodeParam): AxiosPromise<comRes> => {
    return http.request<comRes>({
        url: URLS.checkVerifyCodeApi,
        method: 'get',
        params: params
    });
};
//  注册
export const registerApi = (params: verifyCodeParam): AxiosPromise<comRes> => {
    return http.request<comRes>({
        url: URLS.checkVerifyCodeApi,
        method: 'get',
        params: params
    });
};

