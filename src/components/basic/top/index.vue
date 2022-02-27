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
import menuInfo from "@/components/basic/menu/index.vue";
import personalInfo from "@/components/basic/personalInfo/index.vue";
import search from "@/components/basic/search/index.vue";

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
