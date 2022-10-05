<!--
 * @Date: 2022-10-05 22:55:31
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 23:27:57
 * @FilePath: \MyRoom-LowCode\src\base-ui\drag-element\src\v-text.vue
-->
<template>
  <div class="h-full w-full">{{ dragInfo?.content }}</div>
</template>

<script setup lang="ts">
import { IDragComponent } from '@/store/drag/type'
import { defineProps, PropType } from 'vue'
const props = defineProps({
  dragInfo: {
    type: Object as PropType<IDragComponent>
  }
})
console.log(props)
</script>

<style scoped lang="less"></style>
