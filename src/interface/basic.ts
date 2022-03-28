/*
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-28 17:01:44
 * @Description: file content
 * @FilePath: \find-project\src\interface\basic.ts
 */
export interface MenuItem {
  label: String;
  key: String;
}
export interface IconItem extends MenuItem {
  url: String
}
// export interface InfoDropdownitem extends MenuItem {
//   icon: String
// }

export type InfoDropdownitem = MenuItem
export interface ListInfo extends MenuItem {
  subtitle?: String,
  operate:String
  init?:String
}
