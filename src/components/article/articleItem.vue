<!--
 * @Author: ZhouCong
 * @Date: 2022-03-02 11:23:54
 * @LastEditors: ZhouCong
 * @LastEditTime: 2022-03-04 13:21:30
 * @Description: file content
 * @FilePath: \find-project\src\components\article\articleItem.vue
-->
<template>
  <el-row
    class="articleItem mb-4"
    v-for="(item, index) in articleList"
    :key="index"
  >
    <el-col :span="24"
      ><h4 class="fs-16 fw-b cp">
        {{ item.PostTitle }}
      </h4></el-col
    >
    <el-col :span="24" class="c-ccc tag-box fs-12 d-flex ai-c">
      <template v-for="(child, index) in item.PostTags" :key="index">
        标签：<span class="fs-12 tag mr-2">{{ child.Name }}</span>
      </template>
    </el-col>
    <el-col :span="24" class="article c-999">
      <span class="fs-12">作者：{{ item.UserInfo.NickName }}</span>
      <span class="ml-4 fs-12"
        >时间：{{ useFormatDate(item.UpdatedAt, "yyyy-MM-dd hh:mm:ss") }}</span
      >
    </el-col>
    <el-col :span="24" class="mt-2 article">
      {{ item.PostContent }}
    </el-col>
    <el-col :span="24" class="mt-2 fs-12">
      <el-link type="primary" class="mr-4">
        <el-icon class="mr-2"><View /></el-icon>{{ item.PostBrowseCount }}
      </el-link>
      <el-link type="success" class="mr-4">
        <el-icon class="mr-2"><Star /></el-icon>{{ item.PostLikesCount }}
      </el-link>
      <el-link type="warning" class="mr-4">
        <el-icon class="mr-2"><ChatLineRound /></el-icon
        >{{ item.PostCommentCount }}
      </el-link>
    </el-col>
    <el-divider></el-divider>
  </el-row>
</template>
<script lang="ts" setup>
import { View, ChatLineRound, Star } from "@element-plus/icons-vue";
import { useFormatDate } from "@/hooks/useFormatDate";
const props = defineProps({
  articleList: Object,
});
</script>
<style lang="less" scoped>
.articleItem {
  .article {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .tag-box {
    .tag {
      display: block;
      border-right: 1px solid #ccc;
      padding: 0 10px;
      margin: 5px 0;
    }
    .tag:last-child {
      border: none;
    }
  }
}
</style>
