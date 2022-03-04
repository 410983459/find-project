<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 16:55:42
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 17:43:36
 * @Description: file content
 * @FilePath: \find-project\src\components\settingInfo\settingInfoFrom.vue
-->
<template>
  <div class="settingInfo mainBox mt-2">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input
          v-model="formInline.user"
          placeholder="Approved by"
        ></el-input>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="formInline.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const formInline = reactive({
      user: "",
      region: "",
    });
    const onSubmit = () => {
      console.log("submit!");
    };
    return { formInline, onSubmit };
  },
});
</script>
<style lang="less" scoped>
.settingInfo {
  width: 900px;
  margin: 0 auto;
}
</style>