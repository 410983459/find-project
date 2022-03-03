<!--
 * @Author: ZhouCong
 * @Date: 2022-03-03 15:19:25
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 16:10:20
 * @Description: file content
 * @FilePath: \find-project\src\views\home\home.vue
-->
<template>
  <div class="container">
    <!-- 头部导航 -->
    <el-header><topInfo /></el-header>
    <!-- 登录 -->
    <login v-if="isShowLogin" />
    <router-view />
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import login from "@/components/basic/loginAndRegister/index.vue";
import topInfo from "@/components/basic/top/index.vue";

export default defineComponent({
  components: { topInfo, login },
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

<style lang="less">
</style>