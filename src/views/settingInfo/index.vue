<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 16:55:16
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 17:00:48
 * @Description: file content
 * @FilePath: \find-project\src\views\settingInfo\index.vue
-->
<template>
  <div class="settingInfo">
    <settingInfo></settingInfo>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import settingInfo from "@/components/settingInfo/settingInfoFrom.vue";

export default defineComponent({
  components: { settingInfo },
  setup() {
    return {};
  },
});
</script>