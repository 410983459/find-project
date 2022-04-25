/*
 * @Author: ZhouCong
 * @Date: 2022-02-24 16:36:00
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-24 17:17:19
 * @Description: file content
 * @FilePath: \find-project\src\interface\request.ts
 */
interface R {
	methods: string;
	url: string;
	data: string;
	param: string;
}

export interface comRes<T = any> {
	code: number,
	data: string | T

}
export interface RegisterRes extends comRes {
	token?: string
}