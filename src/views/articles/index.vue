<!--
 * @Author: ZhouCong
 * @Date: 2022-03-02 13:19:36
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 10:16:22
 * @Description: file content
 * @FilePath: \find-project\src\views\articles\index.vue
-->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-button class="button" type="text">Operation button</el-button>
      </div>
    </template>
    <articleInfo />
  </el-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import articleInfo from "@/components/article/articleItem.vue";

export default defineComponent({
  components: { articleInfo },
  setup() {},
});
</script>
<style lang='less' scoped>
.box-card {
  width: 100%;
}
</style>
