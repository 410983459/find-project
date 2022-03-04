<!--
 * @Author: ZhouCong
 * @Date: 2022-03-01 13:10:40
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 10:09:27
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\loginAndRegister\register\index.vue
-->
<template>
  <div class="register">
    <el-form :model="form" align="center">
      <el-form-item>
        <el-input
          placeholder="用户名"
          v-model="form.account"
          autocomplete="off"
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <User />
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
              <Key />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          placeholder="确认密码"
          autocomplete="off"
          type="password"
          show-password
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <Link />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="verify">
        <el-input
          v-model="form.password"
          placeholder="验证码"
          autocomplete="off"
          type="password"
          show-password
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <Lock />
            </el-icon>
          </template>
        </el-input>
        <img
          class="verifyCode"
          src="../../../../assets/images/yzm.png"
          alt=""
        />
      </el-form-item>
    </el-form>
    <p class="agreement fs-12">
      注册即表示同意<span>《用户协议》《隐私政策》</span>
    </p>
    <div class="dialog-footer mt-4">
      <el-button class="login" type="primary" plain>注册</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { User, Lock, Key, Link } from "@element-plus/icons-vue";

export default defineComponent({
  components: { User, Lock, Key, Link },
  setup() {
    const form = reactive({
      account: "",
      password: "",
    });
    return {
      form,
    };
  },
});
</script>

<style scoped lang='less'>
.dialog-footer button.login {
  width: 100%;
}
.agreement {
  span {
    color: #409eff;
    cursor: pointer;
  }
}
.verify {
  /deep/.el-form-item__content {
    .el-input {
      width: auto;
    }
  }
  .verifyCode {
    width: 108px;
    height: 30px;
  }
}
</style>
