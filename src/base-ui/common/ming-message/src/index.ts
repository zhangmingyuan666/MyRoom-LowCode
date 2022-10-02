/*
 * @Date: 2022-10-02 21:31:49
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-03 01:05:18
 * @FilePath: \MyRoom-LowCode\src\base-ui\common\ming-message\src\index.ts
 */

import { App, createApp, ref, watch } from 'vue'
import { IMsgConfig, BASE_MSG_TYPE, IMsgTypes } from './type'
import MessageComponent from './message.vue'

const messageArray = ref<any[]>([])

/**
 * @description: 传入{type,content}用于进行真正的调用
 * @param {IMsgConfig} options 传入type和content
 * @return {*}
 */
const Message: any = (options: IMsgConfig) => {
  // const messageApp = createApp(MessageComponents, options)
  // 1.第一个参数用于注册Component，然后第二个参数用于进行props传递
  const messageApp: App<Element> = createApp(MessageComponent, options as any)
  // 2.进行Msg展示
  showMessage(messageApp, options.duration)
}

// msg展示
const showMessage = (app: App<Element>, duration: number) => {
  const oFrag: DocumentFragment = document.createDocumentFragment()
  // vm是返回的实例，可以暴露组件中暴露出的方法
  const vm: any = app.mount(oFrag as any) // 挂载
  //将实例放入MessageArray
  messageArray.value.push(vm as any)
  vm.setVisible(true)

  document.body.appendChild(oFrag)
  setTop(vm) // 将top进行设置

  // 在这里监听一下，array一旦变动了，我们的高度就得重新计算啦，所以得放在setTop后面
  // 闭包实现
  watch(messageArray, () => setTop(vm))

  hideMessage(app, vm, duration)
}

// msg隐藏
const hideMessage = (app: App<Element>, vm: any, duration: number) => {
  return new Promise(() => {
    // 在vm上挂载最好，因为每个msg都会创建新的vm
    vm.timer = setTimeout(async () => {
      // 异步处理，等动画结束了，再将节点取消挂载
      await vm.setVisible(false)
      app.unmount()
      // 然后，我们还需要注意，当完事了，vm需要从数组中删掉
      messageArray.value = messageArray.value.filter((item: any) => item !== vm)
      console.log(messageArray.value)
      // 主打的就是一手有始有终
      clearTimeout(vm.timer)
      vm.timer = null
    }, duration || 3000)
  })
}

// 在这里，为Message[type]进行事件派发，如果想要派发新的类型的事件，需要跑到./type.ts文件夹
function provideMsgTypes() {
  // type用于获取所有的value
  Object.values(BASE_MSG_TYPE).forEach((type: IMsgTypes) => {
    Message[type] = (options: IMsgConfig) => {
      options.type = type
      return Message(options)
    }
  })
}

function setTop(vm: any) {
  console.log('我被设置了')
  const { setTop, height, margin } = vm
  // 找到这个实例(vm)的index
  const currentIndex = messageArray.value.findIndex((item: any) => item === vm)
  console.log(currentIndex)
  setTop(margin * (currentIndex + 1) + height * currentIndex)
}
provideMsgTypes()

export default Message
