<!--
 * @Author: ZhouCong
 * @Date: 2022-03-04 09:53:21
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-04-29 14:41:11
 * @Description: file content
 * @FilePath: \find-project\src\components\basic\top\personalInfo\avatar.vue
-->
<template>
  <div class="avatar">
    <!-- 登录状态(展示头像和下拉状态) -->
    <el-dropdown @command="toPath">
      <span class="el-dropdown-link ml-2">
        <!-- <el-avatar :icon="UserFilled"></el-avatar> -->
        <img
          class="mr-4"
          :src="IMG_BASE_URL + person?.AvatarUrl"
          width="40"
          height="40"
          alt=""
        />
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
import { defineComponent, ref, computed } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import { infoDropdownitem } from "../../pageConfig";
import { InfoDropdownitem } from "@/interface/basic";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  components: {},
  setup() {
    const infoDropdownList: InfoDropdownitem[] = infoDropdownitem;
    const router = useRouter();
    const toPath = (command: string) => {
      router.push("/" + command);
    };
    const IMG_BASE_URL = process.env.VUE_APP_IMGURL;
    const store = useStore();
    const person = computed(() => store.state.personalInfo.personalInfo);
    return { UserFilled, infoDropdownList, toPath, person, IMG_BASE_URL };
  },
});
</script>