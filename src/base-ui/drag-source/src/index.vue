<!--
 * @Date: 2022-10-05 20:28:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 15:51:37
 * @FilePath: \MyRoom-LowCode\src\base-ui\drag-source\src\index.vue
-->
<template>
  <div
    ref="dragSource"
    class="w-full h-full drag-source rounded-md"
    @dragstart="dragActions.dragStartAction($event, dragSource!, tag)"
    @click="getDragComponentInfo(id)"
    :id="id"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useDrag } from '@/hooks/ming-drag-hooks'
import { IDragActions } from '@/hooks/ming-drag-hooks/src/drag-hook'
import { DragTags } from '@/types/drag-types'
import { defineProps, ref, onMounted, reactive, PropType } from 'vue'
import { useStore } from '@/store'
import { OUTPUT_SET_DRAG_COMPONENT } from '@/store/drag/type-actions'
const props = defineProps({
  tag: {
    type: String as PropType<DragTags>
  },
  id: {
    type: String,
    default: ''
  }
})

const store = useStore()

const dragSource = ref<HTMLElement | null>(null)

const dragActions = reactive<any>({
  dragStartAction: null
})

const getDragComponentInfo = (id: string) => {
  if (id) {
    store.dispatch(OUTPUT_SET_DRAG_COMPONENT, id)
  }
}

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
