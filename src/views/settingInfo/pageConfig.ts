/*
 * @Author: ZhouCong
 * @Date: 2022-03-28 16:28:33
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-28 17:02:51
 * @Description: file content
 * @FilePath: \find-project\src\views\settingInfo\pageConfig.ts
 */
import { ListInfo } from '@/interface/basic'
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