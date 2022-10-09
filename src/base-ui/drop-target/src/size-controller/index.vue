<!--
 * @Date: 2022-10-05 23:42:31
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-09 15:58:47
 * @FilePath: \MyRoom-LowCode\src\base-ui\drop-target\src\size-controller\index.vue
 * @description: absract component only to controll size
-->
<template>
  <div class="absolute drag-element" :style="setPositionSize" :id="id">
    <div v-if="isSelected">
      <template v-for="controller of controllerList" :key="controller.tag">
        <ControllerPoint
          :tag="controller.tag"
          :positionStyle="controller.style"
        ></ControllerPoint>
      </template>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed } from 'vue'
import { IDragComponent, IDragComponentStyle } from '@/store/drag/type'
import useActive from '@/hooks/active-hooks'
import { useStore } from '@/store'
import ControllerPoint from './controller-point/index.vue'

const store = useStore()
const props = defineProps({
  dragInfoStyle: {
    type: Object as PropType<IDragComponentStyle>,
    require: true
  },
  id: {
    type: String,
    default: ''
  }
})

const { isActive } = useActive()
const isSelected = computed(() => {
  return isActive(props.id, store.state.dragModule.curdragComponent.id)
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

// 左边的值代表
enum IControllerTagList {
  LEFT_TOP = 'lt',
  LEFT_BOTTOM = 'lb',
  RIGHT_TOP = 'rt',
  RIGHT_BOTTOM = 'rb',
  LEFT = 'l',
  RIGHT = 'r',
  TOP = 't',
  BOTTOM = 'b'
}
interface IControllerConfig {
  tag: IControllerTagList
  style: [top: number, left: number] // 代表着top left
}
const controllerList: IControllerConfig[] = [
  {
    tag: IControllerTagList.LEFT_TOP,
    style: [0, 0]
  },
  {
    tag: IControllerTagList.LEFT_BOTTOM,
    style: [props.dragInfoStyle!.height, 0]
  },
  {
    tag: IControllerTagList.RIGHT_TOP,
    style: [0, props.dragInfoStyle!.width]
  },
  {
    tag: IControllerTagList.RIGHT_BOTTOM,
    style: [props.dragInfoStyle!.height, props.dragInfoStyle!.width]
  },
  {
    tag: IControllerTagList.LEFT,
    style: [props.dragInfoStyle!.height / 2, 0]
  },
  {
    tag: IControllerTagList.RIGHT,
    style: [props.dragInfoStyle!.height / 2, props.dragInfoStyle!.width]
  },
  {
    tag: IControllerTagList.TOP,
    style: [0, props.dragInfoStyle!.width / 2]
  },
  {
    tag: IControllerTagList.BOTTOM,
    style: [props.dragInfoStyle!.height, props.dragInfoStyle!.width / 2]
  }
]
</script>

<style lang="less" scoped></style>
