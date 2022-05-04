<!--
 * @Author: ZhouCong
 * @Date: 2022-03-28 17:12:34
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 19:42:47
 * @Description: 个人设置
 * @FilePath: \find-project\src\components\settingInfo\personalInfo.vue
-->
<template>
  <div class="personalInfo">
    <!-- 头像 -->
    <el-row class="pb-6 pa-2 d-flex ai-c">
      <el-col :span="3" class="mr-4">
        <div class="block ta-c">
          <el-upload
            class="avatar-uploader"
            :action="`${VUE_APP_URL}/post/UploadFile`"
            :show-file-list="false"
            accept=".png,.PNG,.jpg,.jpeg,.JPG,JPEG"
            :on-success="onSuccess"
            :on-error="onError"
            :headers="{ token: token }"
            :on-change="handleExceed"
            :on-progress="onProgress"
            v-loading="loading"
            :disabled="state.isDisabled"
          >
            <el-icon color="#fff" v-if="!state.isDisabled" :size="40" class="uploadIcon">
              <plus />
            </el-icon>
            <img
              :src="personAvatarUrl"
              class="cp"
              width="90"
              height="90"
              alt=""
            />
            <!-- <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
          </el-upload>
        </div>
      </el-col>
      <el-col :span="8">
        <el-button plain :disabled="!state.isDisabled" @click="toEdit"
          >编辑资料</el-button
        >
        <p class="c-999 fs-12 mt-2">只能上传png、jpeg文件，且大小不超过2M</p>
      </el-col>
    </el-row>
    <el-form class="personalInfoFrom d-flex">
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
import { computed, reactive, ref } from "vue";
import { personalInfo } from "@/views/settingInfo/pageConfig";
import { UserFilled, Plus } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { editUserInfo } from "@/api/myPage";
import { ElMessage } from "element-plus";
import { getToken } from "@/utils/request/token";
import * as Types from "@/store/types";
import { UserInfoItem } from "@/interface/myPage";
import { defaultPersonData } from "@/views/settingInfo/pageConfig";
const state = reactive({
  formData: {},
  personalInfo,
  isDisabled: true,
});
const store = useStore();
// 从store中获取个人信息
const IMG_BASE_URL = process.env.VUE_APP_IMGURL;
// const person = computed(() => store.state.personalInfo.personalInfo);
// const personAvatarUrl = ref(IMG_BASE_URL + person.value.AvatarUrl);
let personAvatarUrl = ref("");

const person: any = computed({
  get() {
    personAvatarUrl.value =
      IMG_BASE_URL + store.state.personalInfo.personalInfo?.AvatarUrl;
    return store.state.personalInfo.personalInfo;
  },
  set: (val) => {
    // personAvatar1Url.value = IMG_BASE_URL + val.value.AvatarUrl
  },
});
// 头像
console.log(personAvatarUrl);

// 编辑
const toEdit = () => {
  state.isDisabled = !state.isDisabled;
};
// 文件上传
const token = getToken();
const VUE_APP_URL = process.env.VUE_APP_URL;
// 头像
let newAvatarUrl = "";
// 上传状态
let loading = ref(false);
// 开始上传
const onProgress = () => {
  loading.value = true;
};
// 上传成功回调
const onSuccess = (response: any) => {
  if (response.code !== 200) return;
  console.log(response);
  // 变更新头像
  personAvatarUrl.value = IMG_BASE_URL + response.data.img;
  newAvatarUrl = response.data.img;
  loading.value = false;
  ElMessage.success("上传成功！");
};
// 上传失败回调
const onError = (response: any) => {
  console.log(response);
  loading.value = false;
  ElMessage.error("上传失败！");
};
// 保存
const onSubmit = async () => {
  let param: UserInfoItem = defaultPersonData;
  if (newAvatarUrl) {
    param = { ...person.value, AvatarUrl: newAvatarUrl };
  } else {
    param = { ...person.value };
  }
  console.log(param);

  const res = await editUserInfo(param);
  console.log(res);
  if (res.data.code !== 200) {
    ElMessage.error(res.data.data);
    return;
  }
  ElMessage.success(res.data.data);
  // 请求个人信息数据
  store.dispatch(`personalInfo/${Types.SET_PERSONAL_INFO}`);
  state.isDisabled = !state.isDisabled;
};

const handleExceed = (files: any, fileList: any) => {
  if (fileList.length > 1) {
    fileList.splice(0, 1);
  }
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
  .block {
    position: relative;
    .uploadIcon {
      position: absolute;
      top: calc(50% - 20px);
      left: calc(50% - 20px);
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
    }
  }
}
</style>
