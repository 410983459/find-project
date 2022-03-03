/*
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 10:36:09
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\pageConfig.ts
 */
import { MenuItem, IconItem } from "@/interface/basic";
export const menuList: MenuItem[] = [
  {
    label: "首页",
    key: "",
  },
  {
    label: "一角",
    key: "corner",
  },
  {
    label: "新闻",
    key: "news",
  },
  {
    label: "课程",
    key: "course",
  },
];
export const iconList: IconItem[] = [
  {
    label: "qq",
    key: "qq",
    url: require('@/assets/images/qq.png')
  },
  {
    label: "bd",
    key: "bd",
    url: require('@/assets/images/bd.png')
  },
  {
    label: "gb",
    key: "gb",
    url: require('@/assets/images/gb.png')
  },
  {
    label: "hb",
    key: "hb",
    url: require('@/assets/images/hb.png')
  },
  {
    label: "wb",
    key: "wb",
    url: require('@/assets/images/wb.png')
  },
]
