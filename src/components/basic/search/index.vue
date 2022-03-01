<template>
  <div class="search">
    <el-input v-model="inputVal" placeholder="搜索..." :suffix-icon="Search" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
let inputVal = ref("");
</script>
