<!--
 * @Author: ZhouCong
 * @Date: 2022-02-24 13:56:03
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 10:03:04
 * @Description: file content
 * @FilePath: \find-project\src\App.vue
-->
<template>
  <div class="all">
    <!-- 头部导航 -->
    <el-header><topInfo /></el-header>
  </div>
  <router-view />
</template>
<script lang="ts" setup>
import topInfo from "@/components/basic/top/index.vue";
</script>

<style lang="less"></style>
