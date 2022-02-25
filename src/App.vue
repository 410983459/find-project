<!--
 * @Author: ZhouCong
 * @Date: 2022-02-24 13:56:03
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-02-25 16:29:00
 * @Description: file content
 * @FilePath: \find-project\src\App.vue
-->
<template>
  <div class="content">
    <menuInfo/>
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import menuInfo from './components/basic/menu/index.vue'

export default defineComponent({
  components:{menuInfo},
  setup() {
    
  },
})
</script>




<style lang="less">
</style>
