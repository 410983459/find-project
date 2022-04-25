<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 15:07:10
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-25 14:12:02
 * @Description: file content
 * @FilePath: \find-project\src\components\myPage\articleInfo.vue
-->
<template>
  <div class="articleInfo">
    <el-card class="box-card">
      <el-tabs
        v-model="activeName"
        type="card"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane label="动态" name="first">
          <articleItem />
        </el-tab-pane>
        <el-tab-pane label="文章" name="second">
          <articleItem />
        </el-tab-pane>
        <el-tab-pane label="一角" name="third">
          <articleItem />
        </el-tab-pane>
        <el-tab-pane label="赞" name="fourth">
          <articleItem />
        </el-tab-pane>
        <el-tab-pane label="收藏" name="fifth">
          <articleItem />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import articleItem from "@/components/article/articleItem.vue";

export default defineComponent({
  components: { articleItem },
  setup() {
    const activeName = ref("first");

    const handleClick = (tab: string, event: Event) => {
      console.log(tab, event);
    };
    return {
      activeName,
      handleClick,
    };
  },
});
</script>
<style lang="less" scoped>
.articleInfo {
}
</style>