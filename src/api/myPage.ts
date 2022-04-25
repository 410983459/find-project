/*
 * @Author: ZhouCong
 * @Date: 2022-04-19 19:01:52
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-24 16:55:16
 * @Description: file content
 * @FilePath: \find-project\src\api\myPage.ts
 */
import http from '@/utils/request/index'
import { AxiosPromise } from 'axios';
import { UserInfoRes } from '@/interface/myPage'

const URLS = {
    userApi: '/users/UserInformation',//用户信息
}

//  用户信息
export const getUserInfo = (): AxiosPromise<UserInfoRes> => {
    return http.request<UserInfoRes>({
        url: URLS.userApi,
        method: 'post',
    });
};
