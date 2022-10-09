<!--
 * @Date: 2022-10-09 15:16:28
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-09 21:43:48
 * @FilePath: \MyRoom-LowCode\src\base-ui\drop-target\src\size-controller\controller-point\index.vue
 * @description: none
-->
<template>
  <div class="point" :style="getPointStyle"></div>
</template>

<script setup lang="ts">
import useMouse from '@/hooks/mouse-hooks'
import { IDragComponentStyle } from '@/store/drag/type'
import { computed, defineProps, PropType, onMounted, ref } from 'vue'

const DragPointRef = ref<null | HTMLElement>(null)

const props = defineProps({
  tag: {
    type: String
  },
  positionStyle: {
    type: Object as PropType<any>
  }
})
const { mouseMove } = useMouse()
const getPointStyle = computed(() => {
  const [top, left] = props.positionStyle
  return {
    left: left - 5 + 'px',
    top: top - 5 + 'px'
  }
})
</script>

<style scoped lang="less">
.point {
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 999px;
  background: red;
}
</style>
