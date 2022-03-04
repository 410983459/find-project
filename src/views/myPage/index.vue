<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 13:27:36
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 16:27:58
 * @Description: file content
 * @FilePath: \find-project\src\views\myPage\index.vue
-->

<template>
  <div class="myPage mt-2">
    <div class="mainBox">
      <personalInfo />
      <articleInfo />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import personalInfo from "@/components/myPage/personalInfo.vue";
import articleInfo from "@/components/myPage/articleInfo.vue";

export default defineComponent({
  components: { personalInfo, articleInfo },
  setup() {
    return {};
  },
});
</script>