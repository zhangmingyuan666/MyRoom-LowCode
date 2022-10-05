/*
 * @Date: 2022-10-05 17:39:47
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 22:28:17
 * @FilePath: \MyRoom-LowCode\src\store\drag\action.ts
 */
import { Commit } from 'vuex'
import { IDragComponent } from './type'
import { SET_DRAGLIST } from './type-actions'

interface ICtx {
  commit: Commit
}

export default {
  [SET_DRAGLIST]({ commit }: ICtx, dragList: IDragComponent[]): void {
    commit(SET_DRAGLIST, dragList)
  }
}
