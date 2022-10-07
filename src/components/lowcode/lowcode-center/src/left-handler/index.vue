<!--
 * @Date: 2022-10-01 00:03:09
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 14:08:48
 * @FilePath: \MyRoom-LowCode\src\components\lowcode\lowcode-center\src\left-handler\index.vue
-->
<template>
  <div class="left-list px-4">
    <template
      v-for="dragSource of dragSourceListConfig"
      :key="dragSource.description"
    >
      <DragSource :tag="dragSource.tag">
        <div class="drag-source">{{ dragSource.description }}</div>
      </DragSource>
    </template>
  </div>
</template>

<script setup lang="ts">
import DragSource from '@/base-ui/drag-source'
import { dragSourceListConfig } from './config'
</script>

<style lang="less" scoped>
.left-list {
  width: 150px;
  min-width: 150px;
  border-right: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  .drag-source {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.left-list > div {
  width: 100%;
  margin-bottom: 10px;
}
</style>
