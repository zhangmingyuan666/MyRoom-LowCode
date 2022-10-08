/*
 * @Date: 2022-10-05 17:39:47
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 15:50:04
 * @FilePath: \MyRoom-LowCode\src\store\drag\actions.ts
 */
import { DragTags, IElementSize, IPosition } from '@/types/drag-types'
import { Commit } from 'vuex'
import { IDragComponent } from './type'
import {
  SET_DROP_ACTION,
  SET_DRAGLIST,
  SET_DRAG_START_POSITION,
  SET_DRAG_TAG,
  SET_CURCOMPONENT_ATTRIBUTE,
  SET_DRAG_COMPONENT
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
  [SET_DRAG_TAG](
    { commit }: ICtx,
    { tag, id }: { tag: DragTags; id: string }
  ): void {
    commit(SET_DRAG_TAG, { tag, id })
  },
  [SET_DROP_ACTION](
    { commit }: ICtx,
    { options, dropId }: { options: IPosition & IElementSize; dropId: string }
  ): void {
    commit(SET_DROP_ACTION, { options, dropId })
  },
  [SET_DRAG_COMPONENT]({ commit }: ICtx, dragId: string): void {
    commit(SET_DRAG_COMPONENT, dragId)
  },
  [SET_CURCOMPONENT_ATTRIBUTE](
    { commit }: ICtx,
    updateConfig: Partial<IDragComponent>
  ): void {
    commit(SET_CURCOMPONENT_ATTRIBUTE, updateConfig)
  }
}
