<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 11:38:09
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-01 10:11:54
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\login\login.vue
-->
<template>
  <!-- <el-button type="text" @click="dialogFormVisible = true"
    >open a Form nested Dialog</el-button
  > -->

  <el-dialog
    v-model="dialogFormVisible"
    title="登录"
    center
    width="400px"
    @close="close(false)"
  >
    <el-form :model="form" align="center">
      <el-form-item>
        <el-input
          placeholder="用户名"
          v-model="form.account"
          autocomplete="off"
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <avatar />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          placeholder="密码"
          autocomplete="off"
          type="password"
          show-password
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>

    <p class="agreement fs-12">
      登录即表示同意<span>《用户协议》《隐私政策》</span>
    </p>
    <el-divider
      style="margin: 15px 0; border-top: 1px solid #f7f7f7"
    ></el-divider>
    <div class="img-box d-flex jc-sa">
      <img v-for="item in iconImgList" :key="item.key" :src="item.url" alt="" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button
          class="login"
          type="primary"
          @click="dialogFormVisible = false"
          >登录</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, inject } from "vue";
import { Avatar, Lock } from "@element-plus/icons-vue";
import { IconItem } from "@/interface/basic";
import { iconList } from "../pageConfig";

export default defineComponent({
  components: { Avatar, Lock },
  setup() {
    const dialogFormVisible = ref(true);

    const form = reactive({
      account: "",
      password: "",
    });
    const iconImgList: IconItem[] = iconList;
    const close = (val: boolean) => {
      dialogFormVisible.value = true;
      (inject("handleLogin") as any)(val);
    };
    return {
      dialogFormVisible,
      form,
      iconImgList,
      close,
    };
  },
});
</script>

<style scoped lang='less'>
.agreement {
  span {
    color: #409eff;
    cursor: pointer;
  }
}
.img-box {
  padding: 0 70px;
  img {
    cursor: pointer;
    width: 26px;
    height: 26px;
  }
}
.dialog-footer button.login {
  width: 100%;
}
</style>