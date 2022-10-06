<!--
 * @Date: 2022-10-06 01:05:29
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 01:20:08
 * @FilePath: \MyRoom-LowCode\src\base-ui\drop-target\src\drag-component-renderer\drag-component-renderer.vue
 * @description: none
-->
<template>
  <template v-for="dragComponent of dragList" :key="dragComponent.id">
    <SizeController :dragInfoStyle="dragComponent.style">
      <DragSource>
        <component
          :is="getDynamicComponent(dragComponent.tag)"
          :dragInfo="dragComponent"
        ></component>
      </DragSource>
      <!-- 递归组件实现组件的嵌套 -->
      <DragComponentRenderer
        v-if="dragComponent.children"
        :dragList="dragComponent.children"
      ></DragComponentRenderer>
    </SizeController>
  </template>
</template>

<script lang="ts" setup>
import SizeController from '../size-controller/index.vue'
import DragSource from '@/base-ui/drag-source'
import { VText } from '@/base-ui/drag-element'
import { PropType, defineProps } from 'vue'
import { IDragComponent } from '@/store/drag/type'

const props = defineProps({
  dragList: [] as PropType<IDragComponent[]>
})

function getDynamicComponent(tag: 'text') {
  let tmp: any = null
  switch (tag) {
    case 'text':
      tmp = VText
      break
    default:
      break
  }
  return tmp
}
</script>

<style lang="scss" scoped></style>
