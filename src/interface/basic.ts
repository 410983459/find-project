/*
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-28 19:46:58
 * @Description: file content
 * @FilePath: \find-project\src\interface\basic.ts
 */
export interface commInterface {
  label: string;
  key: string;
}
export type MenuItem = commInterface
export interface IconItem extends commInterface {
  url: string
}
// export interface InfoDropdownitem extends commInterface {
//   icon: string
// }

export type InfoDropdownitem = commInterface
export interface ListInfo extends commInterface {
  subtitle?: string,
  operate: string
  init?: string
}
export interface PersonalInfo extends commInterface {
  limit?: number
}
