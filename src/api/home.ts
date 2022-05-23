/*
 * @Author: ZhouCong
 * @Date: 2022-04-19 19:01:52
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-05-22 15:26:57
 * @Description: file content
 * @FilePath: \find-project\src\api\myPage.ts
 */
import http from '@/utils/request/index'
import { AxiosPromise } from 'axios';
import { comRes } from '@/interface/request'
import {CategoriesListApiParam,ArticleListParam} from '../interface/home'

const URLS = {
    CategoriesListApi: '/post/CategoriesList',//查询分类
    TagListApi: '/post/TagList',//查询分类
    articleList:'/post/PostList',//文章列表
}

//  查询分类
export const getCategoriesList = (params: CategoriesListApiParam): AxiosPromise<comRes> => {
    return http.request<comRes>({
        url: URLS.CategoriesListApi,
        method: 'get',
        params: params
    });
};
//  查询标签
export const getTagList = (params: CategoriesListApiParam): AxiosPromise<comRes> => {
    return http.request<comRes>({
        url: URLS.TagListApi,
        method: 'get',
        params: params
    });
};
//  文章列表
export const getArticleList = (params: ArticleListParam): AxiosPromise<comRes> => {
    return http.request<comRes>({
        url: URLS.articleList,
        method: 'get',
        params: params
    });
};


