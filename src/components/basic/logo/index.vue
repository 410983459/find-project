<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 10:18:21
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 10:56:42
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\logo\index.vue
-->
<template>
  <div class="logo">
    <img src="../../../assets/images/logo.png" alt="" @click="toIndex" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  setup() {
    const router = useRouter();
    const toIndex = () => {
      router.push("/"
      );
    };
    return {
      toIndex,
    };
  },
});
</script>
<style lang="less" scoped>
.logo img {
  width: 55px;
  height: 55px;
  cursor: pointer;
}
</style>