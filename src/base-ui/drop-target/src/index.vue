<!--
 * @Date: 2022-10-05 20:28:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-13 14:06:09
 * @FilePath: \MyRoom-LowCode\src\base-ui\drop-target\src\index.vue
-->
<template>
  <div
    :style="setStyle"
    class="drop-area"
    ref="dropTarget"
    @dragover.prevent
    @drop.stop="dropActions.dropAction($event, dropTarget)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { useDrop } from '@/hooks/ming-drag-hooks'
import { computed, ref, onMounted, reactive } from 'vue'
import { OUTPUT_SET_DRAGLIST } from '@/store/drag/type-actions'
import useMouse from '@/hooks/mouse-hooks'
const store = useStore()

const { mouseMove } = useMouse()
const dropTarget = ref<null | HTMLElement>(null)

const setStyle = computed(() => {
  return `height:${store.state.dragModule.height}px; width:${store.state.dragModule.width}px`
})

const dropActions = reactive({
  dropAction: null as any
})

onMounted(() => {
  const { dropAction } = useDrop(dropTarget.value as HTMLElement)
  dropActions.dropAction = dropAction
})
</script>

<style scoped lang="less">
.drop-area {
  position: relative;
  border: 1px solid #ccc;
}
</style>
