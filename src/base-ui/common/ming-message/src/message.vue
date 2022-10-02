<!--
 * @Date: 2022-10-02 21:24:34
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-03 00:54:33
 * @FilePath: \MyRoom-LowCode\src\base-ui\common\ming-message\src\message.vue
-->
<template>
  <transition name="ming-message-fade">
    <div :class="styleClass" v-if="visible" :style="{ top: top + 'px' }">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import {
  computed,
  defineProps,
  PropType,
  reactive,
  toRefs,
  defineExpose
} from 'vue'
import { IMsgTypes } from './type'
const props = defineProps({
  type: {
    type: String as PropType<IMsgTypes>,
    default: 'info'
  },
  message: {
    type: String,
    default: '哈哈哈哈哈哈哈'
  },
  duration: {
    type: Number,
    default: 2000
  }
})

const styleClass = computed(() => ['ming-message', props.type])

// 用来清除定时器的
let t: any = null

const state = reactive({
  visible: false,
  top: 0
})

const { visible, top } = toRefs(state)

const setVisible = (isVisible: boolean) => {
  // setVisible进行异步调用
  return new Promise((resolve) => {
    state.visible = isVisible
    t = setTimeout(() => {
      clearTimeout(t)
      t = null
      resolve('')
    }, 300)
  })
}

const setTop = (top: number): number => {
  state.top = top
  return top
}

// 暴露给app.mount返回的实例的方法
defineExpose({
  setVisible, //
  setTop,
  height: 40, // 高度
  margin: 20 // 动画的偏移
})
</script>

<style scoped lang="less">
.ming-message {
  position: fixed;
  left: 50%;
  width: 380px;
  height: 40px;
  z-index: 9999;
  margin-left: -190px;
  text-align: center;
  line-height: 40px;
  font-style: 14px;
  border-radius: 5px;
  transition: top 0.3s ease-out;

  &.warning {
    background-color: #fdf6ec;
    color: #b88230;
  }

  &.error {
    background-color: #f8bbd0;
    color: #b71c1c;
  }

  &.success {
    background-color: #b2dfdb;
    color: #00695c;
  }

  &.info {
    background-color: #b3e5fc;
    color: #0277bd;
  }
}

.ming-message-fade-enter-active {
  transition: all 0.3s ease-in;
}
.ming-message-fade-leave-active {
  transition: all 0.3s ease-out;
}

.ming-message-fade-enter-from,
.ming-message-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
