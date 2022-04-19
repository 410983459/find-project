<!--
 * @Author: ZhouCong
 * @Date: 2022-03-01 13:10:40
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-19 17:20:53
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\loginAndRegister\register\index.vue
-->
<template>
  <div class="register">
    <el-form :model="form" :rules="rules" ref="registerForm" align="center">
      <el-form-item prop="account">
        <el-input
          placeholder="用户名"
          v-model="form.account"
          autocomplete="off"
          clearable
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <User />
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
          clearable
        >
          <template #prefix>
            <el-icon class="el-input__icon">
              <Key />
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
    <p class="agreement fs-12">
      注册即表示同意<span>《用户协议》《隐私政策》</span>
    </p>
    <div class="dialog-footer mt-4">
      <el-button
        class="login"
        type="primary"
        @click="register(registerForm)"
        plain
        >注册</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted, inject } from "vue";
import { User, Lock, Key, Link } from "@element-plus/icons-vue";
import { rules } from "../pageConfig";
import { toRegister } from "@/api/loginAndRegister";
import { RegisterAndLogin } from "@/interface/loginAndRegister";
import { useCheckVerifyCode } from "@/hooks/useRegisterOrLogin";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { RootState } from "@/store/interface";
import * as Types from "@/store/types";
import { setToken } from "@/utils/request/token";

export default defineComponent({
  components: { User, Lock, Key, Link },
  setup() {
    let verifyCodeImgURL = ref(`${process.env.VUE_APP_URL}/captcha/CaptchaImg`);
    let verifyCodeImg = verifyCodeImgURL;
    const state = reactive({
      form: {
        account: "",
        password: "",
        verifyCode: "",
      },
      rules: rules,
    });
    // 关闭弹窗
    const closeModel: any = inject("handleLogin");
    onMounted(() => {});
    // store
    let store = useStore<RootState>();
    const registerForm = ref<any>();
    // 注册
    const register = async (registerForm: any | undefined) => {
      if (!registerForm) return;
      // 表单校验
      await registerForm.validate(async (valid: boolean) => {
        if (!valid) return;
        // 校验验证码
        const validCode = await useCheckVerifyCode(state.form.verifyCode);
        if (validCode) {
          let param: RegisterAndLogin = {
            account: state.form.account,
            password: state.form.password,
          };
          // 注册接口
          const res = await toRegister(param);
          console.log(res);
          if (res && res.data && res.data.code == 200) {
            ElMessage.success("注册成功,并自动登录！");
            // 存储token
            setToken(res.data?.token ?? "");
            store.dispatch(`loginInfo/${Types.SET_LOGIN_INFO}`, true);
            closeModel(false);
          } else {
            ElMessage.error(res.data.data as string);
          }
        } else {
          verifyCodeImg.value = `${verifyCodeImgURL.value}?time=${Date.now()}`;
        }
      });
    };
    return {
      ...toRefs(state),
      register,
      verifyCodeImg,
      verifyCodeImgURL,
      registerForm,
      closeModel,
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
    display: flex;
    .el-input {
      width: calc(100% - 160px);
    }
  }
  .verifyCode {
    display: inline-block;
    //   width: 160px;
    overflow: hidden;
  }
}
</style>
