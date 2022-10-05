<!--
 * @Date: 2022-10-05 23:42:31
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-06 01:27:23
 * @FilePath: \MyRoom-LowCode\src\base-ui\drop-target\src\size-controller\index.vue
 * @description: absract component only to controll size
-->
<template>
  <div class="absolute drag-element" :style="setPositionSize">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed } from 'vue'
import { IDragComponent, IDragComponentStyle } from '@/store/drag/type'
const props = defineProps({
  dragInfoStyle: {
    type: Object as PropType<IDragComponentStyle>
  }
})

const setPositionSize = computed(() => {
  const { left, top, height, width } = props.dragInfoStyle!
  return {
    left: left + 'px',
    top: top + 'px',
    height: height + 'px',
    width: width + 'px'
  }
})
</script>

<style lang="less" scoped>
.drag-element {
  background-color: #ccc;
}
</style>
