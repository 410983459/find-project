<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-02-28 18:23:02
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\personalInfo\index.vue
-->
<template>
  <div class="personalInfo">
    <!-- 未登录状态 -->
    <el-button type="primary">创作</el-button>
    <el-button type="primary" plain @click="login(true)">登录/注册</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";

export default defineComponent({
  setup() {
    const login: any = inject("handleLogin");
    return { login };
  },
});
</script>
