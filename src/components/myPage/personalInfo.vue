<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 14:36:25
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 11:12:11
 * @Description: file content
 * @FilePath: \find-project\src\components\myPage\personalInfo.vue
-->
<template>
  <div class="personalInfo">
    <el-card class="box-card">
      <div class="content d-flex jc-sb ai-c">
        <div class="left d-flex">
          <img class="mr-4" :src="IMG_BASE_URL + personInfos?.AvatarUrl" width="70" height="70" alt="" />
          <div class="others">
            <div class="nickname fs-18 mb-2">{{ personInfos?.Nickname }}</div>
            <div class="signature fs-12 c-999 mb-2">
              {{personInfos?.Signature}}
            </div>
            <div class="box d-flex jc-fs ai-c">
              <p><span class="fw-b">2</span>&nbsp;&nbsp;文章</p>
              <p><span class="fw-b">2</span>&nbsp;&nbsp;关注</p>
              <p><span class="fw-b">2</span>&nbsp;&nbsp;粉丝</p>
            </div>
          </div>
        </div>
        <div class="right">
          <el-button class="login" type="primary" plain @click="editInfo"
            >编辑资料</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const props = defineProps({
  personInfos: Object,
});
// let imgurl = process.env.VUE_APP_IMGURL + props.personInfos?.AvatarUrl;
const IMG_BASE_URL = process.env.VUE_APP_IMGURL
const router = useRouter();
const editInfo = () => {
  router.push("/setting");
};
</script>
<style lang="less" scoped>
.personalInfo {
  .content {
    width: 800px;
    margin: 0 auto;
  }
  .others {
    .box p {
      padding: 0 10px;
      cursor: pointer;
      border-right: 1px solid #ccc;
    }
    .box p:hover {
      color: cornflowerblue;
    }
    .box p:last-child {
      border: none;
    }
    .box p:first-child {
      padding-left: 0;
    }
  }
}
</style>