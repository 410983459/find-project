<!--
 * @Author: ZhouCong
 * @Date: 2022-03-03 13:56:43
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 10:53:45
 * @Description: file content
 * @FilePath: \find-project\src\views\create\index.vue
-->
<template>
  <div class="create">
    <div class="d-flex jc-sb">
      <logo />
      <div class="d-flex jc-fe ai-c">
        <el-button type="info" plain @click="toSave">
          <el-icon><notebook /></el-icon>存草稿
        </el-button>
        <el-button type="primary" @click="toRelease">
          <el-icon><promotion /></el-icon>发布
        </el-button>
        <avatar></avatar>
      </div>
    </div>
    <el-divider style="border-top: 1px solid #f1eeee; margin: 0"></el-divider>
    <el-input
      class="titleClass"
      v-model="title"
      placeholder="标题..."
      clearable
    />
    <v-md-editor
      v-model="content"
      placeholder="内容..."
      height="400px"
    ></v-md-editor>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import avatar from "@/components/basic/top/personalInfo/avatar.vue";
import { Promotion, Notebook } from "@element-plus/icons-vue";
import logo from "@/components/basic/logo/index.vue";
export default defineComponent({
  components: { avatar, Promotion, Notebook, logo },
  setup() {
    const state = reactive({
      title: "",
      content: "",
    });
    const toRelease = () => {};
    const toSave = () => {};
    return {
      toRelease,
      toSave,
      ...toRefs(state),
    };
  },
});
</script>
<style lang="less" scoped>
.create {
  padding: 0 20px 20px 20px;
  .titleClass {
    /deep/.el-input__inner {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border: none;
    }
  }
}
</style>