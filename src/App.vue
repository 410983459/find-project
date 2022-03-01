<!--
 * @Author: ZhouCong
 * @Date: 2022-02-24 13:56:03
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-01 18:07:20
 * @Description: file content
 * @FilePath: \find-project\src\App.vue
-->
<template>
  <div class="content">
    <!-- 头部导航 -->
    <el-header><topInfo /></el-header>
    <!-- 侧边导航 -->
    <sideNav />
    <!-- 文章列表 -->
    <!-- <router-view /> -->
    <!-- 登录 -->
    <login v-if="isShowLogin" />
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import topInfo from "./components/basic/top/index.vue";
import login from "@/components/basic/loginAndRegister/index.vue";
import sideNav from "@/components/basic/sideNav/index.vue";

export default defineComponent({
  components: { topInfo, login, sideNav },
  setup() {
    let isShowLogin = ref(false);
    provide("handleLogin", (val: boolean) => {
      isShowLogin.value = val;
    });
    return {
      isShowLogin,
    };
  },
});
</script>

<style lang="less"></style>
