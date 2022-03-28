<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 16:55:42
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-28 16:23:51
 * @Description: file content
 * @FilePath: \find-project\src\components\settingInfo\settingInfoFrom.vue
-->
<template>
  <div class="settingInfo mainBox mt-2">
    <el-card class="box-card">
      <div class="card-header">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="账号设置" name="first">
            <accountSettings></accountSettings>
          </el-tab-pane>
          <el-tab-pane label="个人资料" name="second">
            <el-form
              :inline="true"
              :model="formInline"
              class="demo-form-inline"
            >
              <el-form-item label="Approved by">
                <el-input
                  v-model="formInline.user"
                  placeholder="Approved by"
                ></el-input>
              </el-form-item>
              <el-form-item label="Activity zone">
                <el-select
                  v-model="formInline.region"
                  placeholder="Activity zone"
                >
                  <el-option label="Zone one" value="shanghai"></el-option>
                  <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import accountSettings from "./accountSettings.vue";

export default defineComponent({
  components: { accountSettings },
  setup() {
    const state = reactive({
      activeName: "first",
      formInline: {
        user: "",
        region: "",
        activeName: "first",
      },
    });
    const onSubmit = () => {
      console.log("submit!");
    };
    const handleClick = () => {};
    return { ...state, onSubmit, handleClick };
  },
});
</script>
<style lang="less" scoped>
.settingInfo {
  width: 900px;
  margin: 0 auto;
}
</style>