<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 14:36:25
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 16:16:46
 * @Description: file content
 * @FilePath: \find-project\src\components\myPage\personalInfo.vue
-->
<template>
  <div class="personalInfo">
    <el-card class="box-card">
      <div class="content d-flex jc-sb ai-c">
        <div class="left d-flex">
          <el-avatar
            class="mr-4"
            :size="70"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <div class="others">
            <div class="nickname fs-18 mb-2">阿周</div>
            <div class="signature fs-12 c-999 mb-2">
              天空不曾留下痕迹，但我已飞过。
            </div>
            <div class="box d-flex jc-fs ai-c">
              <p><span class="fw-b">2</span>&nbsp;&nbsp;文章</p>
              <p><span class="fw-b">2</span>&nbsp;&nbsp;关注</p>
              <p><span class="fw-b">2</span>&nbsp;&nbsp;粉丝</p>
            </div>
          </div>
        </div>
        <div class="right">
          <el-button class="login" type="primary" plain>编辑资料</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
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
    .box p:hover{
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