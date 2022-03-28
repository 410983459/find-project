<!--
 * @Author: ZhouCong
 * @Date: 2022-03-28 17:12:34
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-28 20:27:53
 * @Description: 个人设置
 * @FilePath: \find-project\src\components\settingInfo\personalInfo.vue
-->
<template>
  <div class="personalInfo">
    <!-- 头像 -->
    <el-row class="pb-6 pa-2 d-flex ai-c">
      <el-col :span="4">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="80" :icon="UserFilled"></el-avatar>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-button plain>编辑资料</el-button>
        <p class="c-999 fs-12 mt-2">只能上传png、jpeg文件，且大小不超过2M</p>
      </el-col>
    </el-row>
    <el-form class="personalInfoFrom d-flex" :model="formInline">
      <!-- 个人信息 -->
      <el-form-item v-for="item in personalInfo" :key="item.key">
        <el-input
          v-model="formData[item.key]"
          :placeholder="item.label"
          show-word-limit
          :maxlength="item.limit"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="btn ta-c mt-4">
      <el-button type="primary" style="width:100px" @click="onSubmit">保存</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { personalInfo } from "@/views/settingInfo/pageConfig";
import { UserFilled } from "@element-plus/icons-vue";

export default defineComponent({
  components: {},
  setup() {
    const state = reactive({
      formData: {},
      personalInfo,
      activeName: "first",
    });
    return { ...state, UserFilled };
  },
});
</script>
<style lang="less">
.personalInfo {
  .personalInfoFrom {
    flex-wrap: wrap;
    justify-content: space-between;
    .el-form-item {
      width: 48%;
      display: inline-block;
    }
  }
}
</style>
