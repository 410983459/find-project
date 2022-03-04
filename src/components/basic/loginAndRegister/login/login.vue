<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 11:38:09
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 10:09:15
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\loginAndRegister\login\login.vue
-->
<template>
  <div class="login">
    <el-form :model="form" align="center">
      <el-form-item>
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
              <key />
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
              <lock />
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

    <!-- <comLoginAndRegister>
    <template #imgIcon> -->
    <div class="img-box d-flex jc-sa">
      <img v-for="item in iconImgList" :key="item.key" :src="item.url" alt="" />
    </div>
    <!-- </template>
    <template #btn> -->
    <div class="dialog-footer mt-4">
      <el-button class="login" type="primary">登录</el-button>
    </div>
    <!-- </template>
  </comLoginAndRegister> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { IconItem } from "@/interface/basic";
import { iconList } from "../../pageConfig";
import { User, Lock, Key } from "@element-plus/icons-vue";

export default defineComponent({
  components: { User, Lock, Key },
  setup() {
    const iconImgList: IconItem[] = iconList;
    const form = reactive({
      account: "",
      password: "",
    });
    return {
      form,
      iconImgList,
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
      width: auto;
    }
  }
  .verifyCode {
    width: 108px;
    height: 30px;
  }
}
</style>