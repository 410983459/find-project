<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-01 13:19:09
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\search\index.vue
-->
<template>
  <div class="search">
    <el-input v-model="inputVal" placeholder="搜索..." :suffix-icon="Search" />
  </div>
</template>


<script lang="ts">
import { Search } from "@element-plus/icons-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let inputVal = ref("");
    return {
      inputVal,
      Search,
    };
  },
});
</script>

