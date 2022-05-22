<!--
 * @Author: ZhouCong
 * @Date: 2022-03-01 17:59:04
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-02 16:32:26
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\sideNav\index.vue
-->
<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-card class="box-card pa-0">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item
            :index="index"
            v-for="(item, index) in CategoriesList"
            :key="item.id"
          >
            <!-- <el-icon><icon-menu /></el-icon> -->
            {{ item.Name }}
          </el-menu-item>
        </el-menu>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
import { inject } from "vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
// 获取父组件传过来的分类数据
let CategoriesList = inject("CategoriesList");
</script>
<style lang="less">
.tac {
  .el-menu {
    border-right: none;
    li {
      padding: 10px 50px !important;
      justify-content: center;
    }
  }
  .el-card__body {
    padding: 0;
  }
}
</style>
