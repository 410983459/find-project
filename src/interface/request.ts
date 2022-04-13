/*
 * @Author: ZhouCong
 * @Date: 2022-02-24 16:36:00
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-31 17:13:38
 * @Description: file content
 * @FilePath: \find-project\src\interface\request.ts
 */
interface R {
	methods: string;
	url: string;
	data: string;
	param: string;
}

export interface comRes {
	code: Number,
	data: String

}
