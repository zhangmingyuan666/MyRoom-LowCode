/*
 * @Date: 2022-09-30 22:18:04
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 23:12:16
 * @FilePath: \MyRoom-LowCode\src\store\index.ts
 */
import { createStore, Store, useStore as uesVuexStore } from 'vuex'
import dragModule from './drag'
import { IRootWithModule } from './type'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    dragModule
  }
})

export function useStore(): Store<IRootWithModule> {
  //这样我们要给传统的vuex的useStore起个别名来调用
  return uesVuexStore()
}
