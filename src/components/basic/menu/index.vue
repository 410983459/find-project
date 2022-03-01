<!--
 * @Author: ZhouCong
 * @Date: 2022-02-24 13:56:03
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-02-25 16:37:06
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\menu\index.vue
-->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item v-for="item in menu" :key="item.key" :index="item.key">{{
      item.label
    }}</el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { menuList } from "../pageConfig";
import { MenuItem } from "@/interface/basic";

export default defineComponent({
  setup() {
    const activeIndex = ref("index");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    let menu: MenuItem[] = menuList;
    return {
      activeIndex,
      handleSelect,
      menu,
    };
  },
});
</script>
