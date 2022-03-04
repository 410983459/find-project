<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 09:53:21
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 11:44:48
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\personalInfo\avatar.vue
-->
<template>
  <div class="avatar">
    <!-- 登录状态(展示头像和下拉状态) -->
    <el-dropdown @command="toPath">
      <span class="el-dropdown-link ml-2">
        <el-avatar :icon="UserFilled"></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            :command="item.key"
            :divided="index === 3"
            v-for="(item, index) in infoDropdownList"
            :key="item.key"
            >{{ item.label }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import { infoDropdownitem } from "../../pageConfig";
import { InfoDropdownitem } from "@/interface/basic";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {},
  setup() {
    const infoDropdownList: InfoDropdownitem[] = infoDropdownitem;
    const router = useRouter();
    const toPath = (command: string) => {
      router.push("/" + command);
    };
    return { UserFilled, infoDropdownList, toPath };
  },
});
</script>