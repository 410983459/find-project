<!--
 * @Author: ZhouCong
 * @Date: 2022-03-03 15:19:25
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-19 18:12:46
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
import { defineComponent, ref, provide, onMounted } from "vue";
import login from "@/components/basic/loginAndRegister/index.vue";
import topInfo from "@/components/basic/top/index.vue";
import { useStore } from "vuex";
import { RootState } from "@/store/interface";
import * as Types from "@/store/types";
import { getToken } from "@/utils/request/token";

export default defineComponent({
  components: { topInfo, login },
  setup() {
    let isShowLogin = ref(false);
    provide("handleLogin", (val: boolean) => {
      isShowLogin.value = val;
    });
    // store
    let store = useStore<RootState>();
    onMounted(() => {
      // 判断是否是登录状态
      if (!getToken()) return;
        store.dispatch(`loginInfo/${Types.SET_LOGIN_INFO}`, true);
    });
    return {
      isShowLogin,
    };
  },
});
</script>

<style lang="less">
</style>