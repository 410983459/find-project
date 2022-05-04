/*
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-28 19:46:58
 * @Description: file content
 * @FilePath: \find-project\src\interface\basic.ts
 */
export interface commInterface {
  label: String;
  key: String;
}
export type MenuItem = commInterface
export interface IconItem extends commInterface {
  url: String
}
// export interface InfoDropdownitem extends commInterface {
//   icon: String
// }

export type InfoDropdownitem = commInterface
export interface ListInfo extends commInterface {
  subtitle?: String,
  operate: String
  init?: String
}
export interface PersonalInfo extends commInterface {
  limit?: Number
}
