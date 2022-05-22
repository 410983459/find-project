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
          <el-menu-item index="2">
            <!-- <el-icon><icon-menu /></el-icon> -->
            全部
          </el-menu-item>
          <el-menu-item index="1">
            <!-- <el-icon><icon-menu /></el-icon> -->
            后端
          </el-menu-item>
          <el-menu-item index="3">
            <!-- <el-icon><document /></el-icon> -->
            前端
          </el-menu-item>
          <el-menu-item index="4">
            <!-- <el-icon><setting /></el-icon> -->
            Android
          </el-menu-item>
          <el-menu-item index="5">
            <!-- <el-icon><setting /></el-icon> -->
            IOS
          </el-menu-item>
          <el-menu-item index="6">
            <!-- <el-icon><setting /></el-icon> -->
            人工智能
          </el-menu-item>
          <el-menu-item index="7">
            <!-- <el-icon><setting /></el-icon> -->
            卡开发工具
          </el-menu-item>
          <el-menu-item index="8">
            <!-- <el-icon><setting /></el-icon> -->
            代码人生
          </el-menu-item>
          <el-menu-item index="9">
            <!-- <el-icon><setting /></el-icon> -->
            阅读
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
import { onMounted } from "vue-demi";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

</script>
<style lang="less">
.tac {
  .el-menu {
    border-right: none;
    li {
      padding: 20px;
      justify-content: center;
    }
  }
  .el-card__body {
    padding: 0;
  }
}
</style>
