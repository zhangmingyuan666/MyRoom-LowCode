<!--
 * @Date: 2022-10-05 20:28:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 00:13:47
 * @FilePath: \MyRoom-LowCode\src\base-ui\drag-source\src\index.vue
-->
<template>
  <div
    ref="dragSource"
    class="drag-source rounded-md"
    @dragstart="dragActions.dragStartAction($event, dragSource!)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useDrag } from '@/hooks/ming-drag-hooks'
import { IDragActions } from '@/hooks/ming-drag-hooks/src/drag-hook'
import { defineProps, ref, onMounted, reactive } from 'vue'

const dragSource = ref<HTMLElement | null>(null)

const dragActions = reactive<any>({
  dragStartAction: null
})

onMounted(() => {
  const { dragStartAction } = useDrag(dragSource.value as HTMLElement)
  dragActions.dragStartAction = dragStartAction
})
</script>

<style scoped lang="less">
.drag-source {
  border: 1px solid #ccc;
}
</style>
