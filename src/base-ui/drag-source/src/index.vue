<!--
 * @Date: 2022-10-05 20:28:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-13 14:09:02
 * @FilePath: \MyRoom-LowCode\src\base-ui\drag-source\src\index.vue
-->
<template>
  <div
    ref="dragSource"
    class="w-full h-full drag-source rounded-md"
    :class="[`select-${isSelected}`]"
    @dragstart.stop="dragActions.dragStartAction($event, dragSource!, tag)"
    @click.stop="getDragComponentInfo(id)"
    :id="id"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useDrag } from '@/hooks/ming-drag-hooks'
import { IDragActions } from '@/hooks/ming-drag-hooks/src/drag-hook'
import { DragTags } from '@/types/drag-types'
import { defineProps, ref, onMounted, reactive, PropType, computed } from 'vue'
import { useStore } from '@/store'
import useActive from '@/hooks/active-hooks'
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
const move = (e: DragEvent) => {
  console.log(e)
  console.log(e.offsetX)
}
const store = useStore()
const { isActive } = useActive()

const isSelected = computed(() => {
  return isActive(props.id, store.state.dragModule.curdragComponent.id)
})

const dragSource = ref<HTMLElement | null>(null)

const dragActions = reactive<any>({
  dragStartAction: null,
  dragAction: null
})

const getDragComponentInfo = (id: string) => {
  if (id) {
    store.dispatch(OUTPUT_SET_DRAG_COMPONENT, id)
  }
}

onMounted(() => {
  const { dragStartAction, dragAction } = useDrag(
    dragSource.value as HTMLElement
  )
  dragActions.dragStartAction = dragStartAction
  dragActions.dragAction = dragAction
})
</script>

<style scoped lang="less">
.drag-source {
  border: 1px solid #ccc;
}
.select-active {
  background: #ccc;
  transition: 0.5s ease-in;
}
</style>
