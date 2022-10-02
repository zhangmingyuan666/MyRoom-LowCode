<!--
 * @Date: 2022-10-01 00:04:55
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-02 16:33:22
 * @FilePath: \MyRoom-LowCode\src\components\lowcode\lowcode-top\src\index.vue
-->
<template>
  <div class="p-2">
    <template v-for="(plugin, index) of registerPlugins" :key="index">
      <component :is="plugin.pluginComponent"></component>
    </template>
  </div>
</template>

<script setup>
import { UiButton } from 'balm-ui'
const baseAction = () => {
  console.log('e')
}
const registerPlugins = [
  {
    name: '重做',
    action: baseAction,
    pluginComponent: <UiButton>重做</UiButton>
  }
]
</script>

<style lang="scss" scoped></style>
