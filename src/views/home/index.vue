<!--
 * @Author: ZhouCong
 * @Date: 2022-03-02 11:13:54
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 14:07:17
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
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sideNav from "@/components/basic/sideNav/index.vue";

export default defineComponent({
  components: { sideNav },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.container {
  .content {
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
  }
}
</style>
