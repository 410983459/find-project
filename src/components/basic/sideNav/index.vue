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
      <el-card class="box-card">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-card>
    </el-col>
  </el-row>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";

export default defineComponent({
  components: { Location, Document, IconMenu, Setting },
  setup() {
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
});
</script>
<style lang="less" scoped>
.tac {
  .el-menu {
    border-right: none;
    li{
        padding-left: 0 !important;
    }
  }
}
</style>
