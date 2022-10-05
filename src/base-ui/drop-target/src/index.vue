<!--
 * @Date: 2022-10-05 20:28:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 22:51:36
 * @FilePath: \MyRoom-LowCode\src\base-ui\drop-target\src\index.vue
-->
<template>
  <div :style="setStyle" class="drop-area">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useDrop } from '@/hooks/ming-drag-hooks'
import { computed } from 'vue'
const store = useStore()
const { initList } = useDrop()
initList()

const setStyle = computed(() => {
  return `height:${store.state.dragModule.height}px; width:${store.state.dragModule.width}px`
})
</script>

<style scoped lang="less">
.drop-area {
  position: relative;
  border: 1px solid #ccc;
}
</style>
