<!--
 * @Date: 2022-10-01 18:44:05
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-02 23:43:47
 * @FilePath: \MyRoom-LowCode\src\views\main\lowcode\index.vue
-->
<template>
  <div>
    <LowcodeTop></LowcodeTop>
    <LowcodeCenter></LowcodeCenter>
    <LowcodeExtra></LowcodeExtra>
    <Ui-button
      @click="
        () => {
          Message.info({
            message: 'info info'
          })
        }
      "
      >信息</Ui-button
    >
    <Ui-button
      @click="
        () => {
          Message.success({
            message: 'success info'
          })
        }
      "
      >成功</Ui-button
    >
    <Ui-button
      @click="
        () => {
          Message.warning({
            message: 'warning info'
          })
        }
      "
      >警告</Ui-button
    >
    <Ui-button
      @click="
        () => {
          Message.error({
            message: 'error info'
          })
        }
      "
      >失败</Ui-button
    >
    <Ui-button
      @click="
        () => {
          Message({
            type: 'error',
            message: 'error info without value'
          })
        }
      "
      >失败(直接调用)</Ui-button
    >
    <!-- <ming-message
      type="info"
      message="啊哈哈哈哈"
      :duration="2000"
    ></ming-message> -->
  </div>
</template>

<script setup lang="ts">
import LowcodeTop from '@/components/lowcode/lowcode-top'
import LowcodeCenter from '@/components/lowcode/lowcode-center'
import LowcodeExtra from '@/components/lowcode/lowcode-extra'
import Message from '@/base-ui/common/ming-message'
import MingMessage from '@/base-ui/common/ming-message/src/message.vue'
</script>

<style lang="scss" scoped></style>
