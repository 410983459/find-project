<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-01 17:13:49
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\personalInfo\index.vue
-->
<template>
  <div class="personalInfo">
    <!-- 未登录状态 -->
    <el-button type="primary"
      ><el-icon><edit-pen /></el-icon>创作</el-button
    >
    <el-button type="primary" plain @click="login(true)">登录/注册</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { EditPen } from "@element-plus/icons-vue";

export default defineComponent({
  components: { EditPen },
  setup() {
    const login: any = inject("handleLogin");
    return { login };
  },
});
</script>
