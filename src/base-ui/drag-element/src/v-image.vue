<!--
 * @Date: 2022-10-07 16:24:44
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 16:28:31
 * @FilePath: \MyRoom-LowCode\src\base-ui\drag-element\src\v-image.vue
 * @description: none
-->
<template>
  <img class="h-full w-full" :src="dragInfo?.content" />
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
