<!--
 * @Author: ZhouCong
 * @Date: 2022-03-02 11:13:54
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 10:03:39
 * @Description: file content
 * @FilePath: \find-project\src\views\home\index.vue
-->
<template>
  <div class="container">
    <div class="content d-flex">
      <!-- 侧边导航 -->
      <sideNav />
      <!-- 文章列表 -->
      <router-view />
    </div>
    <!-- 登录 -->
    <login v-if="isShowLogin" />
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import login from "@/components/basic/loginAndRegister/index.vue";
import sideNav from "@/components/basic/sideNav/index.vue";

export default defineComponent({
  components: { login, sideNav },
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
.container {
  .content {
    width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>
