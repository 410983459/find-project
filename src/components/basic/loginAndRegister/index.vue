<!--
 * @Author: ZhouCong
 * @Date: 2022-03-01 13:20:51
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-01 16:54:15
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\loginAndRegister\index.vue
-->
<template>
  <el-dialog
    v-model="dialogFormVisible"
    center
    custom-class="loginDialog"
    :close-on-click-modal="false"
    width="400px"
    @close="close(false)"
  >
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="登 录" name="login"
        ><login v-if="activeName === 'login'"
      /></el-tab-pane>
      <el-tab-pane label="注 册" name="register"
        ><register v-if="activeName === 'register'"
      /></el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, inject } from "vue";
import login from "./login/login.vue";
import register from "./register/index.vue";

export default defineComponent({
  components: { login, register },
  setup() {
    const dialogFormVisible = ref(true);
    const activeName = ref("login");
    const form = reactive({
      account: "",
      password: "",
    });
    const close = inject("handleLogin");
    const handleClick = (tab: string, event: Event) => {
      console.log(tab, event);
    };
    return {
      dialogFormVisible,
      activeName,
      form,
      close,
      handleClick,
    };
  },
});
</script>

<style scoped lang='less'>
// .loginDialog.el-dialog--center .el-dialog__body {
//   padding-top: 0 !important;
// }
</style>
<style>
.loginDialog.el-dialog--center .el-dialog__body {
  padding-top: 0;
}
</style>