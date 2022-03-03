<!--
 * @Author: ZhouCong
 * @Date: 2022-02-24 13:56:03
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 10:38:30
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\menu\index.vue
-->
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item in menu"
      :key="item.key"
      :index="item.key"
      @click="menuClick(item.key)"
      >{{ item.label }}</el-menu-item
    >
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { menuList } from "../../pageConfig";
import { MenuItem } from "@/interface/basic";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const activeIndex = ref("");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    let menu: MenuItem[] = menuList;
    const router = useRouter();
    // 菜单点击方法
    const menuClick = (key: String) => {
      router.push(`/${key}`);
    };
    return {
      activeIndex,
      handleSelect,
      menu,
      menuClick,
    };
  },
});
</script>
