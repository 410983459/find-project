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
        {{ item.title }}
      </h4></el-col
    >
    <el-col :span="24" class="mt-2 article c-999">
      <span class=" fs-12">作者：dkfNvd</span>
      <span class="ml-4 fs-12">时间：2022-03-21 14:34:54</span>
    </el-col>
    <el-col :span="24" class="mt-2 article">
      {{ item.info }}
    </el-col>
    <el-col :span="24" class="mt-2 fs-12">
      <el-link type="primary" class="mr-2">
        <el-icon><View /></el-icon>{{ item.view }}
      </el-link>
      <el-link type="success" class="mr-2">
        <el-icon><Star /></el-icon>{{ item.zan }}</el-link
      >
      <el-link type="warning" class="mr-2">
        <el-icon><ChatLineRound /></el-icon>{{ item.pinglun }}</el-link
      >
    </el-col>
    <el-divider></el-divider>
  </el-row>
</template>
<script lang="ts" setup>
import { View, ChatLineRound, Star } from "@element-plus/icons-vue";
let articleList = [
  {
    title: "JavaScript中if语句优化和部分语法糖小技巧推荐",
    info: "在前端日常开发过程中，ifelse判断语句使用的次数应该是比较频繁的了，一些较为复杂的场景，可能会用到很多判断，在某个代码块使用很多ifelse时，代码会显得较为冗余，阅读起来不够清晰。 除了ifelse，在开发过程中，还经常使用 逻辑运算符 && || 以及三木运算符? : 等。",
    zan: "2",
    view: "12",
    pinglun: "1",
  },
  {
    title: "你知道 Vue scoped 原理吗？这波你在第几层？",
    info: "Vue scoped，原理，涉及到 vue-loader 的处理策略：一、首先呢，是 VueLoaderPlugin 策略：VueLoaderPlugin 先获取了 webpack 原来的 rules（ 即 compiler.option.module.rule 的比如 test:/.vue$/ 规则），然后创建了pitcher 规则，pitcher 中的 pitcher-loader 可以通过 resourceQuery 识别引入文件的 query 带的关键字，进行 loader 解析；（pitcher-loader 提供了前置运行和熔断运行的机制）",
    zan: "1",
    view: "3",
    pinglun: "0",
  },
  {
    title: "超越 Nginx！号称下一代 Web 服务器，用起来够优雅！",
    info: "Nginx是一款非常流行的Web服务器，在Github上已有16K+Star，我们经常用它来做静态资源托管或反向代理。最近发现了一款全新的Web服务器Caddy，Star数超越Nginx，标星38K+Star。试用了一下Caddy，发现它使用起来比Nginx优雅多了，功能也很强大，推荐给大家！",
    zan: "2",
    view: "2",
    pinglun: "4",
  },
  {
    title: "解放双手！推荐一款阿里开源的低代码工具，YYDS！",
    info: "之前分享过一些低代码相关的文章，发现大家还是比较感兴趣的。之前在我印象中低代码就是通过图形化界面来生成代码而已，其实真正的低代码不仅要负责生成代码，还要负责代码的维护，把它当做一站式开发平台也不为过！最近体验了一把阿里开源的低代码工具LowCodeEngine，确实是一款面向企业级的低代码解决方案，推荐给大家！",
    zan: "0",
    view: "2",
    pinglun: "6",
  },
  {
    title: "你说写代码，最常用的3个设计模式是啥？",
    info: "哈哈哈，到今天为止，差不多用了3个月里周末和假期的时间，小傅哥在B站的第一套视频《重学Java设计模式》就全部录制完成了。是的，全网最火🔥的那套设计模式，已经有视频可以对照着学习了。我已经录制完成了，那你有跟住学习打卡吗？🤔",
    zan: "0",
    view: "3",
    pinglun: "1",
  },
  {
    title: "深入Go底层原理，重写Redis中间件实战【网盘分享】",
    info: "这篇文章我们一同来聊一下 Kotlin 1.6.20 的新功用 Context Receivers，来看看它为我们处理了什么问题。",
    zan: "2",
    view: "1",
    pinglun: "1",
  },
];
</script>
<style lang="less" scoped>
.articleItem {
  .article {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
