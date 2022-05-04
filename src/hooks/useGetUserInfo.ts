/*
 * @Author: ZhouCong
 * @Date: 2022-04-19 19:01:22
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 11:13:10
 * @Description: file 
 * 
 *  content
 * 
 * @FilePath: \find-project\src\hooks\useGetUserInfo.ts
 */

import { getUserInfo } from '@/api/myPage'
export const useGetUserInfo = async () => {
    const res = await getUserInfo();
    if (res.data.code !== 200) return false;
    return res.data.data
}
