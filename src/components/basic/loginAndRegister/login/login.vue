<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 11:38:09
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-18 18:06:38
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\loginAndRegister\login\login.vue
-->
<template>
  <div class="login">
    <el-form :model="form" align="center" :rules="rules" ref="loginForm">
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
import { defineComponent, reactive, ref, toRefs,inject } from "vue";
import { IconItem } from "@/interface/basic";
import { RegisterAndLogin } from "@/interface/loginAndRegister";
import { iconList } from "../../pageConfig";
import { rules } from "../pageConfig";
import { User, Lock, Key } from "@element-plus/icons-vue";
import { useCheckVerifyCode } from "@/hooks/useCheckVerifyCode";
import { toLogin } from "@/api/loginAndRegister";
import {ElMessage} from 'element-plus'

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
    // 关闭弹窗
    const closeModel: any = inject("handleLogin");
    const login = async (loginForm: any | undefined) => {
      await loginForm.validate(async (valid: boolean) => {
        if (!valid) return;
        const VerifyCodeValid = await useCheckVerifyCode(state.form.verifyCode);
        // 更换验证码
        if (!VerifyCodeValid)
          return (verifyCodeImg.value = `${
            verifyCodeImgURL.value
          }?time=${Date.now()}`);
        let param: RegisterAndLogin = {
          account: state.form.account,
          password: state.form.password,
        };
        const res = await toLogin(param);
        if (res && res.data && res.data.code == 200) {
            ElMessage.success("登陆成功！");
            // 存储token
            sessionStorage.setItem("token", res.data?.token ?? "");
            closeModel(false)
          } else {
            ElMessage.error(res.data.data as string);
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