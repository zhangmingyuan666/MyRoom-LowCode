<!--
 * @Date: 2022-10-01 00:04:06
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 14:25:16
 * @FilePath: \MyRoom-LowCode\src\components\lowcode\lowcode-center\src\center-canvas\index.vue
-->
<template>
  <div class="center mx-4">
    <DropTarget class="box-content">
      <DragComponentRenderer :dragList="dragList"></DragComponentRenderer>
    </DropTarget>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useStore } from '@/store'
import { useDrop } from '@/hooks/ming-drag-hooks'
import DropTarget from '@/base-ui/drop-target'
import SizeController from '@/base-ui/drop-target/src/size-controller/index.vue'
import DragComponentRenderer from '@/base-ui/drop-target/src/drag-component-renderer/drag-component-renderer.vue'

const store = useStore()

const dragList = computed(() => {
  return store.state.dragModule.dragList
})

watch(dragList, () => {
  console.log(dragList.value)
})
</script>

<style lang="less" scoped></style>
