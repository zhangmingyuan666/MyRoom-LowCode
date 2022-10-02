<template>
  <div>
    <LeftHandler></LeftHandler>
    <CenterCanvas></CenterCanvas>
    <RightController></RightController>
  </div>
</template>

<script setup lang="ts">
import LeftHandler from './left-handler/index.vue'
import CenterCanvas from './center-canvas/index.vue'
import RightController from './right-controller/index.vue'
</script>

<style lang="scss" scoped></style>
