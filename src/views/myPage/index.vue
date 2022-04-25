<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 13:27:36
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-25 13:36:36
 * @Description: file content
 * @FilePath: \find-project\src\views\myPage\index.vue
-->

<template>
  <div class="myPage mt-2">
    <div class="mainBox">
      <personalInfo :personInfos="personInfos" />
      <articleInfo />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, onBeforeMount } from "vue";
import personalInfo from "@/components/myPage/personalInfo.vue";
import articleInfo from "@/components/myPage/articleInfo.vue";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { UserInfoItem } from "@/interface/myPage";
let personInfos = reactive({});
Object.assign(personInfos, {
  ...((await useGetUserInfo()) as UserInfoItem),
});
</script>