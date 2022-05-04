<!--
 * @Author: ZhouCong
 * @Date: 2022-02-24 13:56:03
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 17:01:46
 * @Description: file content
 * @FilePath: \find-project\src\App.vue
-->
<template>
  <suspense>
    <div>
      <router-view />
      <el-backtop :right="40" />
    </div>
  </suspense>
</template>
<script lang="ts" setup>
</script>

<style lang="less"></style>
