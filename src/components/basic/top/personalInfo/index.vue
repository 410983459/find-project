<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-30 16:04:51
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\personalInfo\index.vue
-->
<template>
  <div class="personalInfo d-flex jc-fe ai-c">
    <el-select
      v-model="value"
      class="selectStyle"
      placeholder="主题"
      size="small"
      @change="changeTheme"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-button type="primary" @click="toCreate">
      <el-icon><edit-pen /></el-icon>创作
    </el-button>
    <!-- 登录状态(展示头像和下拉状态) -->
    <!-- <avatar></avatar> -->
    <!-- 未登录状态 -->
    <el-button type="primary" plain @click="login(true)"
      >登录/注册</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, inject, reactive } from "vue";
import { EditPen, UserFilled } from "@element-plus/icons-vue";
import { infoDropdownitem } from "../../pageConfig";
import { InfoDropdownitem } from "@/interface/basic";
import avatar from "./avatar.vue";
import { useRouter } from "vue-router";
import { themes } from "@/utils/theme/themes";
import { colorMix } from "@/utils/theme/tool.js";

export default defineComponent({
  components: { EditPen, avatar },
  setup() {
    const state = reactive({
      value: "defaultTheme",
      options: [
        {
          value: "darkTheme",
          label: "深色主题",
        },
        {
          value: "defaultTheme",
          label: "浅色主题",
        },
      ],
    });
    // 显示登录组件
    const login: any = inject("handleLogin");
    const infoDropdownList: InfoDropdownitem[] = infoDropdownitem;
    // 跳转写文章
    const router = useRouter();
    const toCreate = () => {
      router.push("/create");
    };
    // 切换主题色
    const changeTheme = (type: keyof typeof themes) => {
      console.log(type);
      // 根据不同的主题类型 获取不同主题数据
      // themes 对象包含 defaultTheme、darkTheme 两个属性即默认主题与深色主题
      // 通过`import themes from '@/utils/themes'` 导入
      type = type || "darkTheme";
      const colorObj: any = themes[type];
      // 获取基本色色阶
      // colorMix是一个函数
      for (let i = 1; i < 10; i += 1) {
        colorObj[`--el-color-primary-light-${10 - i}`] = colorMix(
          colorObj["--el-color-white"],
          colorObj["--el-color-primary"],
          i * 0.1
        );
      }
      // 设置css 变量
      Object.keys(colorObj).map((item) => {
        document.documentElement.style.setProperty(item, colorObj[item]);
      });
    };
    return {
      login,
      UserFilled,
      infoDropdownList,
      toCreate,
      changeTheme,
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss">
.personalInfo {
  .selectStyle {
    .el-input {
      width: 100px;
    }
    input {
      border: none;
    }
  }
}
</style>
