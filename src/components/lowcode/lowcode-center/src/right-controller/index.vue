<!--
 * @Date: 2022-10-01 18:46:59
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 22:32:05
 * @FilePath: \MyRoom-LowCode\src\components\lowcode\lowcode-center\src\right-controller\index.vue
-->
<template>
  <div class="right mx-4">
    <!-- 当当前选择组件切换的时候，将组件重载 -->
    <MingForm :formItems="formConfig.formItems" :formValue="formValue">
    </MingForm>
    <MingComponentTree
      :dragComponentList="dragComponentList"
      :level="0"
    ></MingComponentTree>
  </div>
</template>

<script setup lang="ts">
import MingForm from '@/base-ui/common/ming-form'
import { formConfig } from './form-config'
import { useStore } from '@/store'
import { ref, computed, watch } from 'vue'
import MingComponentTree from '@/base-ui/ming-component-tree/ming-component-tree.vue'

const store = useStore()

const curdragComponent = computed(() => {
  return store.state.dragModule.curdragComponent
})

const dragComponentList = computed(() => {
  return store.state.dragModule.dragList
})

const formValue = ref({
  content: curdragComponent.value.content,
  width: curdragComponent.value.style.width,
  height: curdragComponent.value.style.height,
  top: curdragComponent.value.style.top,
  left: curdragComponent.value.style.left
})

watch(
  () => {
    return curdragComponent.value
  },
  (newa: any) => {
    console.log('哈哈哈')
  }
)
</script>

<style lang="less" scoped>
.right {
  flex: 1;
  min-width: 250px;
}
</style>
