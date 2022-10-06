/*
 * @Date: 2022-10-05 17:39:47
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 01:06:08
 * @FilePath: \MyRoom-LowCode\src\store\drag\actions.ts
 */
import { IElementSize, IPosition } from '@/types/drag-types'
import { Commit } from 'vuex'
import { IDragComponent } from './type'
import {
  SET_DROP_ACTION,
  SET_DRAGLIST,
  SET_DRAG_START_POSITION
} from './type-actions'

interface ICtx {
  commit: Commit
}

export default {
  [SET_DRAGLIST]({ commit }: ICtx, dragList: IDragComponent[]): void {
    commit(SET_DRAGLIST, dragList)
  },
  [SET_DRAG_START_POSITION]({ commit }: ICtx, position: IPosition): void {
    commit(SET_DRAG_START_POSITION, position)
  },
  [SET_DROP_ACTION]({ commit }: ICtx, options: IPosition & IElementSize): void {
    commit(SET_DROP_ACTION, options)
  }
}
