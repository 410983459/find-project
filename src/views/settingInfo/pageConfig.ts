/*
 * @Author: ZhouCong
 * @Date: 2022-03-28 16:28:33
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 18:45:07
 * @Description: file content
 * @FilePath: \find-project\src\views\settingInfo\pageConfig.ts
 */
import { ListInfo, PersonalInfo } from '@/interface/basic'

import { UserInfoItem } from "@/interface/myPage";
export const listInfo: ListInfo[] = [
    {
        label: '账号_ID',
        key: 'id',
        operate: '复制',
        init: 'FJIWNVLLREIBVMRNV'
    },
    {
        label: '手机',
        key: 'phone',
        operate: '绑定',
        init: '未绑定'
    },
    {
        label: '微博',
        key: 'wb',
        subtitle: '账号关联',
        operate: '关联',
        init: '未绑定'
    },
    {
        label: 'Github',
        key: 'git',
        operate: '关联',
        init: '未绑定'
    },
    {
        label: 'qq',
        key: 'qq',
        operate: '关联',
        init: '未绑定'
    },
    {
        label: '微信',
        key: 'wx',
        operate: '关联',
        init: '未绑定'
    },
    {
        label: '关闭账户',
        key: 'wx',
        subtitle: '账号变更',
        operate: '关闭账户',
        init: '系统将会删除个人资料、解绑手机号以及关联账号'
    },
]
export const personalInfo: PersonalInfo[] = [
    {
        label: '昵称',
        key: 'NickName',
    },
    {
        label: '位置',
        key: 'Address',
    },
    {
        label: '公司',
        key: 'Company',
    },
    {
        label: '学校',
        key: 'School',
    },
    {
        label: '个人网站',
        key: 'Network',
    },
    {
        label: '个人简介',
        key: 'Signature',
        limit:100
    },
]

export let defaultPersonData:UserInfoItem={
    Address: '',
    AvatarUrl: '',
    Company: '',
    Network: '',
    NickName: '',
    School: '',
    Signature: '',
}
