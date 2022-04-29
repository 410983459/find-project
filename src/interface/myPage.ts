/*
 * @Author: ZhouCong
 * @Date: 2022-04-19 19:04:36
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 15:16:39
 * @Description: file content
 * @FilePath: \find-project\src\interface\myPage.ts
 */
import { comRes } from './request'
export interface UserInfoItem {
    Address: string,
    AvatarUrl: string,
    Company: string,
    CreatedAt?: string,
    Network: string,
    NickName: string,
    School: string,
    Score?: number
    Signature: string,
    UpdatedAt?: string,
    _id?: string,
}
export type UserInfoRes = comRes<UserInfoItem[]>