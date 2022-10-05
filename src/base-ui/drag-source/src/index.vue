<!--
 * @Date: 2022-10-05 20:28:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 21:58:07
 * @FilePath: \MyRoom-LowCode\src\base-ui\drag-source\src\index.vue
-->
<template>
  <div ref="dragSource">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref } from 'vue'
const props = defineProps({})

const dragSource = ref<HTMLElement | null>(null)
</script>

<style scoped></style>
