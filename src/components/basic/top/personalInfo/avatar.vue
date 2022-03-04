<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 09:53:21
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 09:55:26
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\personalInfo\avatar.vue
-->
<template>
  <div class="avatar">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import { infoDropdownitem } from "../../pageConfig";
import { InfoDropdownitem } from "@/interface/basic";

export default defineComponent({
  components: {},
  setup() {
    const infoDropdownList: InfoDropdownitem[] = infoDropdownitem;
    return { UserFilled, infoDropdownList };
  },
});
</script>