<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 11:38:09
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-15 20:06:19
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\loginAndRegister\login\login.vue
-->
<template>
  <div class="login">
    <el-form :model="form" align="center" :rules="rules">
      <el-form-item prop="account">
        <el-input
          placeholder="用户名"
          v-model="form.account"
          autocomplete="off"
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <user />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          placeholder="密码"
          autocomplete="off"
          type="password"
          show-password
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <key />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="verify" prop="verifyCode">
        <el-input
          v-model="form.verifyCode"
          placeholder="验证码"
          autocomplete="off"
          clearable
        >
          <!-- @blur="checkVerifyCode" -->
          <template #prefix>
            <el-icon class="el-input__icon">
              <Lock />
            </el-icon>
          </template>
        </el-input>
        <img
          width="160"
          height="32"
          class="cp"
          @click="verifyCodeImg = `${verifyCodeImgURL}?time=${Date.now()}`"
          :src="verifyCodeImg"
          alt="验证码"
          srcset=""
        />
      </el-form-item>
    </el-form>

    <!-- <comLoginAndRegister>
    <template #imgIcon> -->
    <div class="img-box d-flex jc-sa">
      <img v-for="item in iconImgList" :key="item.key" :src="item.url" alt="" />
    </div>
    <!-- </template>
    <template #btn> -->
    <div class="dialog-footer mt-4">
      <el-button class="login" type="primary" @click="login(loginForm)"
        >登录</el-button
      >
    </div>
    <!-- </template>
  </comLoginAndRegister> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { IconItem } from "@/interface/basic";
import { iconList } from "../../pageConfig";
import { rules } from "../pageConfig";
import { User, Lock, Key } from "@element-plus/icons-vue";

export default defineComponent({
  components: { User, Lock, Key },
  setup() {
    let verifyCodeImgURL = ref(`${process.env.VUE_APP_URL}/captcha/CaptchaImg`);
    let verifyCodeImg = verifyCodeImgURL;
    const iconImgList: IconItem[] = iconList;
    const state = reactive({
      form: {
        account: "",
        password: "",
        verifyCode: "",
      },
      rules: rules,
    });
    // 登录
    const loginForm = ref<any>();
    const login = async (loginForm: any | undefined) => {
      await loginForm.validate((valid: boolean) => {
        if (valid) {
          console.log("submit!");
        }
      });
    };
    return {
      ...toRefs(state),
      iconImgList,
      verifyCodeImg,
      verifyCodeImgURL,
      login,
      loginForm,
    };
  },
});
</script>

<style scoped lang='less'>
.dialog-footer button.login {
  width: 100%;
}
.img-box {
  padding: 0 70px;
  img {
    cursor: pointer;
    width: 26px;
    height: 26px;
  }
}
.verify {
  /deep/.el-form-item__content {
    .el-input {
      width: calc(100% - 160px);
    }
  }
  .verifyCode {
    width: 108px;
    height: 30px;
  }
}
</style>