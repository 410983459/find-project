<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 13:27:36
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 14:00:10
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
import { reactive, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import personalInfo from "@/components/myPage/personalInfo.vue";
import articleInfo from "@/components/myPage/articleInfo.vue";
import * as Types from "@/store/types";

let store = useStore();
// 请求个人信息数据
store.dispatch(`personalInfo/${Types.SET_PERSONAL_INFO}`);
// let personInfos = ref(computed(() => store.state.personalInfo.personalInfo));
// onMounted(()=>{})
const personInfos = ref({});
const person = computed({
  get: () => store.state.personalInfo.personalInfo,
  set: (val) => {
    console.log(122121);
    
    personInfos.value = val;
  },
});
console.log(personInfos.value);
</script>