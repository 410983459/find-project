<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-01 13:17:19
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\index.vue
-->
<template>
  <div class="top d-flex jc-sb ai-c">
    <!-- 菜单 -->
    <div class="left">
      <menuInfo />
    </div>
    <!-- 搜索 -->
    <div class="bottom">
      <search></search>
    </div>
    <!-- 个人信息 -->
    <div class="right ta-r">
      <personalInfo></personalInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import menuInfo from "@/components/basic/top/menu/index.vue";
import personalInfo from "@/components/basic/top/personalInfo/index.vue";
import search from "@/components/basic/top/search/index.vue";

export default defineComponent({
  components: { menuInfo, personalInfo, search },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.top {
  .left {
    width: 40%;
  }
  .bottom {
    width: 30%;
  }
  .right {
    width: 30%;
  }
  /deep/.el-menu--horizontal {
    border-bottom: none;
  }
}
</style>
