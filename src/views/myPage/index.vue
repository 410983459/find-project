<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 13:27:36
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-25 09:56:03
 * @Description: file content
 * @FilePath: \find-project\src\views\myPage\index.vue
-->

<template>
  <suspense>
    <div class="myPage mt-2">
      <div class="mainBox">
        <personalInfo :personInfos="personInfos" />
        {{ personInfos }}
        <articleInfo />
      </div>
    </div>
  </suspense>
</template>
<script setup lang="ts">
import { onMounted, reactive, onBeforeMount } from "vue";
import personalInfo from "@/components/myPage/personalInfo.vue";
import articleInfo from "@/components/myPage/articleInfo.vue";
import { useGetUserInfo } from "@/hooks/useGetUserInfo";
import { UserInfoItem } from "@/interface/myPage";
let personInfos = reactive({});
// onBeforeMount(async () => {
  personInfos = await useGetUserInfo();
  console.log(personInfos);
// }); 
</script>