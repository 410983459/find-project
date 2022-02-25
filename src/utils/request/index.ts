/*
 * @Author: ZhouCong
 * @Date: 2022-02-24 16:36:11
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-02-25 13:29:11
 * @Description: file content
 * @FilePath: \find-project\src\utils\request\index.ts
 */
import axios from 'axios'
import { getToken, setToken, getTokenKey, removeToken } from '@/utils/request/token'
import { ElMessage } from 'element-plus'

const http = axios.create({
    baseURL: process.env.VITE_BASE_API,
    timeout: 10000 // request timeout
})

// 发起请求之前的拦截器
http.interceptors.request.use(
    (config: any) => {
        // 判断一下是否有token 如果有的话则把token放入请求头中
        if (getToken()) {
            config.headers[getTokenKey()] = getToken();
            // config.headers[getRefreshTokenKey()] = getRefreshToken();
        }
        return config;
    },
    (error: any) => Promise.reject(error)
)

// 响应拦截器
http.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.code === 200) {
            return res;
        } else {
            ElMessage.error(res.msg)
            return;
        }
    },
    (error) => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    ElMessage.error('数据请求异常！')
                    break;
                case 404:
                    ElMessage.error('您访问的资源不存在！')
                    break;
                case 401:
                    ElMessage.error('登录已过期，请重新登录！')
                    removeToken();
                    break;
                case 500:
                    ElMessage.error('服务器异常！')
                    break;

                default:
                    break;
            }
        }
        return Promise.reject(error.response.data);
    }
);

export default http