/*
 * @Author: ZhouCong
 * @Date: 2022-04-19 19:04:36
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-24 17:20:06
 * @Description: file content
 * @FilePath: \find-project\src\interface\myPage.ts
 */
import { comRes } from './request'
export interface UserInfoItem {
    AvatarUrl: string,
    CreatedAt: string,
    Nickname: string,
    Role: number,
    Score: number,
    UpdatedAt: string,
    _id: string,
}
export type UserInfoRes = comRes<UserInfoItem[]>