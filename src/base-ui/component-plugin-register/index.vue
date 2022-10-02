<template>
  <template v-for="(plugin, index) of registerPlugins" :key="index">
    <component :is="plugin.pluginComponent"></component>
  </template>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IRegisterPlugin } from './type'
const props = defineProps({
  registerPlugins: {
    type: [] as PropType<IRegisterPlugin[]>
  }
})
</script>

<style lang="scss" scoped></style>
