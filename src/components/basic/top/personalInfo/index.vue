<!--
 * @Author: ZhouCong
 * @Date: 2022-02-28 09:45:23
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-03 14:31:44
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\personalInfo\index.vue
-->
<template>
  <div class="personalInfo d-flex jc-fe ai-c">
    <!-- 未登录状态 -->
    <el-button type="primary" @click="toCreate">
      <el-icon><edit-pen /></el-icon>创作
    </el-button>
    <!-- 登录状态(展示头像和下拉状态) -->
    <el-dropdown>
      <span class="el-dropdown-link ml-2">
        <el-avatar :icon="UserFilled"></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            :divided="index === 3"
            v-for="(item, index) in infoDropdownList"
            :key="item.key"
            >{{ item.label }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button v-show="false" type="primary" plain @click="login(true)"
      >登录/注册</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { EditPen, UserFilled } from "@element-plus/icons-vue";
import { infoDropdownitem } from "../../pageConfig";
import { InfoDropdownitem } from "@/interface/basic";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { EditPen },
  setup() {
    // 显示登录组件
    const login: any = inject("handleLogin");
    const infoDropdownList: InfoDropdownitem[] = infoDropdownitem;
    // 跳转写文章
    const router = useRouter();
    const toCreate = () => {
      router.push("/create");
    };
    return { login, UserFilled, infoDropdownList, toCreate };
  },
});
</script>
