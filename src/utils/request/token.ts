/*
 * @Author: ZhouCong
 * @Date: 2022-02-24 18:18:00
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-02-25 10:35:42
 * @Description: token存储方法
 * @FilePath: \find-project\src\utils\request\token.ts
 */
let tokenKey = 'token'

export function getToken() {
    return localStorage.getItem(tokenKey)
}
export function getTokenKey() {
    return tokenKey
}
export function setToken(token: string) {
    return localStorage.setItem(tokenKey, token)
}
export function removeToken() {
    localStorage.removeItem(tokenKey)
}