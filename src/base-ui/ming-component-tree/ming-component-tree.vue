<!--
 * @Date: 2022-10-08 22:14:21
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 22:57:28
 * @FilePath: \MyRoom-LowCode\src\base-ui\ming-component-tree\ming-component-tree.vue
 * @description: none
-->
<template>
  <div class="flex flex-col items-start">
    <template
      v-for="dragComponent of dragComponentList"
      :key="dragComponent.id"
    >
      <ui-button class="my-2" :style="{ marginLeft: `${level}px` }" outlined>
        {{ dragComponent.content }}
      </ui-button>
      <ui-divider type="horizontal"> </ui-divider>
      <MingComponentTree
        v-if="dragComponent.children"
        :dragComponentList="dragComponent.children"
        :level="level + 10"
      >
      </MingComponentTree>
    </template>
  </div>
</template>

<script setup lang="ts">
import { IDragComponent } from '@/store/drag/type'
import { defineProps, PropType } from 'vue'
const props = defineProps({
  dragComponentList: {
    type: Array as PropType<IDragComponent[]>,
    default: () => []
  },
  level: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped></style>
