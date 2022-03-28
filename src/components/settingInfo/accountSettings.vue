<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 16:55:42
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-28 17:35:47
 * @Description: 账号设置
 * @FilePath: \find-project\src\components\settingInfo\accountSettings.vue
-->
<template>
  <div class="accountSetting">
    <template v-for="item in listInfo" :key="item.key">
      <el-row class="pa-2 fs-12" style="color: #ccc" v-if="item.subtitle">
        <el-col :span="12">{{ item.subtitle }}</el-col>
        <el-divider />
      </el-row>
      <el-row class="pa-2">
        <el-col :span="6">{{ item.label }}</el-col>
        <el-col :span="10">{{ item.init }}</el-col>
        <el-col :span="8" class="ta-r cp" style="color: orange">{{
          item.operate
        }}</el-col>
      </el-row>
    </template>
  </div>
</template>
<script lang="ts">
import { listInfo } from "@/views/settingInfo/pageConfig";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const state = reactive({
      listInfo,
    });
    return { ...state };
  },
});
</script>
<style lang="less">
.accountSetting {
  .el-divider--horizontal {
    margin-bottom: 0;
  }
}
</style>