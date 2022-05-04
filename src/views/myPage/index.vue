<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 13:27:36
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 14:30:17
 * @Description: file content
 * @FilePath: \find-project\src\views\myPage\index.vue
-->

<template>
  <div class="myPage mt-2">
    <div class="mainBox">
      <personalInfo :personInfos="person" />
      <articleInfo />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import personalInfo from "@/components/myPage/personalInfo.vue";
import articleInfo from "@/components/myPage/articleInfo.vue";
import * as Types from "@/store/types";
const store = useStore();
const person = computed(()=> store.state.personalInfo.personalInfo);
</script>