/*
 * @Author: ZhouCong
 * @Date: 2022-04-19 19:01:22
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-24 19:20:30
 * @Description: file 
 * 
 *  content
 * 
 * @FilePath: \find-project\src\hooks\useGetUserInfo.ts
 */




import { getUserInfo } from '@/api/myPage'
// import { reactive } from 'vue';
export const useGetUserInfo = async () => {
    const res = await getUserInfo();
    if (res.data.code !== 200) return false;
    return res.data.data[0]
}
