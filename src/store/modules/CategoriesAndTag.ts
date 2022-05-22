/*
 * @Author: ZhouCong
 * @Date: 2022-04-18 18:15:09
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-19 17:10:34
 * @Description: file content
 * @FilePath: \find-project\src\store\modules\loginInfo.ts
 */
import { Module } from "vuex";
import { RootState } from "../interface";
import * as Types from "../types";
import { getCategoriesList,getTagList } from "@/api/home";
import {
  CategoriesListApiParam,
  ICategoriesItem,
} from "@/interface/home";
interface CategoriesAndTagInter {
  categories: ICategoriesItem[];
  tag: any;
}
export const CategoriesAndTag: Module<CategoriesAndTagInter, RootState> = {
  namespaced: true,
  state: (): CategoriesAndTagInter => ({
    categories: [],
    tag: [],
  }),
  mutations: {
    [Types.GET_CATEGORIES](state, res: ICategoriesItem[]) {
      state.categories = res;
    },
    [Types.GET_TAG](state, res: ICategoriesItem[]) {
      state.tag = res;
    },
  },
  actions: {
    async [Types.GET_CATEGORIES]({ commit }, param) {
      const res = await getCategoriesList(param);
      commit(Types.GET_CATEGORIES, res.data.data);
    },

    async [Types.GET_TAG]({ commit }, param) {
      const res = await getTagList(param);
      commit(Types.GET_TAG, res.data.data);
    },
  },
};
