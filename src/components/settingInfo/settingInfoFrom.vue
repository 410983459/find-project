<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 16:55:42
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-25 14:41:42
 * @Description: file content
 * @FilePath: \find-project\src\components\settingInfo\settingInfoFrom.vue
-->
<template>
  <div class="settingInfo mainBox mt-2">
    <el-card class="box-card">
      <el-link type="default" class="mr-2 mb-2" @click="toPersonalInfo">
        <el-icon :size="10"><arrow-left-bold /></el-icon>
        <span>我的主页</span>
      </el-link>
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
            <personalInfo></personalInfo>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import accountSettings from "./accountSettings.vue";
import personalInfo from "./personalInfo.vue";
import { ArrowLeftBold } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { accountSettings, personalInfo, ArrowLeftBold },
  setup() {
    let router = useRouter();
    const state = reactive({
      activeName: "second",
    });
    const onSubmit = () => {
      console.log("submit!");
    };
    const toPersonalInfo = () => {
      router.push("./myPage");
    };
    const handleClick = () => {};
    return { ...state, onSubmit, handleClick,toPersonalInfo };
  },
});
</script>
<style lang="less" scoped>
.settingInfo {
  width: 900px;
  margin: 0 auto;
}
</style>