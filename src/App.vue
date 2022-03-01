<!--
 * @Author: ZhouCong
 * @Date: 2022-02-24 13:56:03
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-01 13:23:32
 * @Description: file content
 * @FilePath: \find-project\src\App.vue
-->
<template>
  <div class="content">
    <el-header><topInfo /></el-header>
    <!-- 登录 -->
    <login v-if="isShowLogin" />
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import topInfo from "./components/basic/top/index.vue";
import login from "@/components/basic/loginAndRegister/index.vue";

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

<style lang="less"></style>
