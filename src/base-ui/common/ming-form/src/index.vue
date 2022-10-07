<!--
 * @Date: 2022-10-07 16:34:00
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 20:58:07
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
            <input :value="formValue[formItem.field]" />
          </template>
        </ui-form-field>
      </template>
      <ui-form-field :class="actionClass">
        <ui-button raised>Submit</ui-button>
        <ui-button outlined @click="a">Cancel</ui-button>
      </ui-form-field>
    </template>
  </ui-form>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import { IFormItem } from '../types/types'
const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  formValue: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less"></style>
