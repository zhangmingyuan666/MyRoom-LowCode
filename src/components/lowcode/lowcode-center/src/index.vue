<!--
 * @Date: 2022-10-01 18:54:06
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 20:11:54
 * @FilePath: \MyRoom-LowCode\src\components\lowcode\lowcode-center\src\index.vue
-->
<template>
  <div class="center-container">
    <LeftHandler></LeftHandler>
    <CenterCanvas></CenterCanvas>
    <RightController></RightController>
  </div>
</template>

<script setup lang="ts">
import LeftHandler from './left-handler/index.vue'
import CenterCanvas from './center-canvas/index.vue'
import RightController from './right-controller/index.vue'
</script>

<style lang="less" scoped>
.center-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
