import { Module } from 'vuex'
import { IDragState } from './type'
import state from './state'
import mutations from './mutations'
import actions from './actions'
/*
 * @Date: 2022-10-05 17:39:37
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 22:29:52
 * @FilePath: \MyRoom-LowCode\src\store\drag\index.ts
 */
const dragModule: Module<IDragState, any> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default dragModule
