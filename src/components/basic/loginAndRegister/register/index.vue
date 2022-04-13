<!--
 * @Author: ZhouCong
 * @Date: 2022-03-01 13:10:40
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-13 20:02:07
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\loginAndRegister\register\index.vue
-->
<template>
  <div class="register">
    <el-form :model="form" :rules="rules" align="center">
      <el-form-item prop="account">
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
              <Key />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="verify">
        <el-input
          v-model="form.verifyCode"
          placeholder="验证码"
          autocomplete="off"
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
      <el-button class="login" type="primary" @click="register" plain
        >注册</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from "vue";
import { User, Lock, Key, Link } from "@element-plus/icons-vue";
import { rules } from "../pageConfig";
import { checkCode, toRegister } from "@/api/loginAndRegister";
import { verifyCodeParam, Register } from "@/interface/loginAndRegister";
import { ElMessage } from "element-plus";

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

    onMounted(() => {});
    // 校验验证码
    async function checkVerifyCode(): Promise<boolean> {
      if (state.form.verifyCode) {
        let param: verifyCodeParam = {
          captcha: state.form.verifyCode,
        };
        const res = await checkCode(param);
        if (res.data.code === 200) {
          return true;
        } else {
          ElMessage.error(res.data.data as string);
          verifyCodeImg.value =`${verifyCodeImgURL.value}?time=${Date.now()}`;
          return false;
        }
      } else {
        ElMessage.error("请输入验证码");
        return false;
      }
    }
    // 注册
    const register = async () => {
      const valid = await checkVerifyCode();
      if (valid) {
        let param: Register = {
          account: state.form.account,
          password: state.form.password,
        };
        const res = await toRegister(param);
        console.log(res);
      }
    };
    return {
      ...toRefs(state),
      checkVerifyCode,
      register,
      verifyCodeImg,
      verifyCodeImgURL,
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
