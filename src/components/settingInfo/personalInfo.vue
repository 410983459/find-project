<!--
 * @Author: ZhouCong
 * @Date: 2022-03-28 17:12:34
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 16:04:20
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
            <img
              :src="IMG_BASE_URL + person?.AvatarUrl"
              class="cp"
              width="90"
              height="90"
              alt=""
            />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-button plain :disabled="!state.isDisabled" @click="toEdit"
          >编辑资料</el-button
        >
        <p class="c-999 fs-12 mt-2">只能上传png、jpeg文件，且大小不超过2M</p>
      </el-col>
    </el-row>
    <el-form class="personalInfoFrom d-flex" :model="formInline">
      <!-- 个人信息 -->
      <el-form-item v-for="item in state.personalInfo" :key="item.key">
        <el-input
          v-model="person[item.key]"
          :placeholder="item.label"
          show-word-limit
          :disabled="state.isDisabled"
          :maxlength="item.limit"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="btn ta-c mt-4">
      <el-button
        type="primary"
        :disabled="state.isDisabled"
        style="width: 100px"
        @click="onSubmit"
        >保存</el-button
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive } from "vue";
import { personalInfo } from "@/views/settingInfo/pageConfig";
import { UserFilled } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { editUserInfo } from "@/api/myPage";
import { UserInfoItem } from "@/interface/myPage";
import { ElMessage } from "element-plus";

const state = reactive({
  formData: {},
  personalInfo,
  isDisabled: true,
});
const store = useStore();
// 从store中获取个人信息
const IMG_BASE_URL = process.env.VUE_APP_IMGURL;
const person = computed(() => store.state.personalInfo.personalInfo);
// 编辑
const toEdit = () => {
  state.isDisabled = !state.isDisabled;
};
// 保存
const onSubmit = async () => {
  const res = await editUserInfo(person.value);
  console.log(res);
  if (res.data.code !== 200) {
    ElMessage.error(res.data.data);
    return;
  }
  ElMessage.success(res.data.data);
  state.isDisabled = !state.isDisabled;
};
</script>
<style lang="scss">
.personalInfo {
  .personalInfoFrom {
    flex-wrap: wrap;
    justify-content: space-between;
    .el-form-item {
      width: 48%;
      display: inline-block;
    }
    .el-input.is-disabled .el-input__inner {
      background-color: #fff;
      color: #6b6c6e;
    }
  }
}
</style>
