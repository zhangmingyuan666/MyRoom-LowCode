<!--
 * @Date: 2022-10-07 16:34:00
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 23:38:14
 * @FilePath: \MyRoom-LowCode\src\base-ui\common\ming-form\src\index.vue
 * @description: none
-->
<template>
  <ui-form type="|" item-margin-bottom="16" action-align="center">
    <template #default="{ actionClass }">
      <template v-for="formItem of formItems" :key="formItem.label">
        <ui-form-field>
          <label>{{ formItem.label }}</label>
          <template v-if="formItem.type === 'input'">
            <ui-textfield v-model="(formValue as any)[`${formItem.field}`]" />
          </template>
        </ui-form-field>
      </template>
      <ui-form-field :class="actionClass">
        <ui-button raised @click="submit">{{ getValue.id }}</ui-button>
        <ui-button outlined @click="seesee()">Cancel</ui-button>
      </ui-form-field>
    </template>
  </ui-form>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { OUTPUT_SET_CURCOMPONENT_ATTRIBUTE } from '@/store/drag/type-actions'
import { PropType, defineProps, ref, computed, watch } from 'vue'
import { IFormItem } from '../types/types'
const store = useStore()

const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  }
  // formValue: {
  //   type: Object,
  //   default: () => ({})
  // }
})

const seesee = () => {
  // console.log(getValue.value)
  // console.log(formValue.value)
  // console.log(getValue.value.id)
}

const getValue = computed(() => {
  return store.state.dragModule.curdragComponent
})

const createSource = () => {
  return {
    height: getValue.value.style.height,
    width: getValue.value.style.width,
    top: getValue.value.style.top,
    left: getValue.value.style.left,
    content: getValue.value.content
  }
}

const formValue = ref(createSource())

function reset() {
  formValue.value = createSource()
}

function submit() {
  const { left, top, width, height, content } = formValue.value

  const updateConfig = {
    content,
    style: {
      left: Number(left),
      top: Number(top),
      width: Number(width),
      height: Number(height)
    }
  }
  store.dispatch(OUTPUT_SET_CURCOMPONENT_ATTRIBUTE, updateConfig)
}

watch(
  () => getValue.value.id,
  () => {
    reset()
  }
)
</script>

<style scoped lang="less"></style>
