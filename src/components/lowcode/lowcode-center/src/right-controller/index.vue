<!--
 * @Date: 2022-10-01 18:46:59
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 22:22:06
 * @FilePath: \MyRoom-LowCode\src\components\lowcode\lowcode-center\src\right-controller\index.vue
-->
<template>
  <div class="right">
    <!-- 当当前选择组件切换的时候，将组件重载 -->
    <MingForm :formItems="formConfig.formItems" :formValue="formValue">
    </MingForm>
  </div>
</template>

<script setup lang="ts">
import MingForm from '@/base-ui/common/ming-form'
import { formConfig } from './form-config'
import { useStore } from '@/store'
import { ref, computed, watch } from 'vue'

const store = useStore()

const curdragComponent = computed(() => {
  return store.state.dragModule.curdragComponent
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
    // console.log(newa)
    // console.log('我变了')
  }
)
</script>

<style lang="less" scoped>
.right {
  min-width: 250px;
}
</style>
