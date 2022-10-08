/*
 * @Date: 2022-10-05 17:39:40
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 23:07:54
 * @FilePath: \MyRoom-LowCode\src\store\drag\mutations.ts
 */
import { DragTags, IElementSize, IPosition } from '@/types/drag-types'
import { BASE_DRAG_COMPONENT } from './state'
import { deepCopy } from '@/utils'
import {
  DragComponentStatus,
  DragStatus,
  IDragComponent,
  IDragState
} from './type'
import {
  SET_CURCOMPONENT_ATTRIBUTE,
  SET_DRAGLIST,
  SET_DRAG_COMPONENT,
  SET_DRAG_START_POSITION,
  SET_DRAG_TAG,
  SET_DROP_ACTION
} from './type-actions'
import {
  configNewNode,
  createNewDragComponentWithDeleteOld,
  findDragNode,
  init,
  replaceOldComponent,
  traverseDelete,
  traverseInsertToChildren,
  verifyIsCompFatherToCompChild
} from './mutation-utils'

export default {
  [SET_DRAGLIST](state: IDragState, list: IDragComponent[]): void {
    console.log('set一下')
  },
  // 缓存dragStart的Position
  [SET_DRAG_START_POSITION](state: IDragState, { x, y }: IPosition): void {
    state.currentStatus = DragStatus.Dragging
    state.dragStartPosition.x = x
    state.dragStartPosition.y = y
    // 递归遍历list，如果存在，那么把他删掉，然后把新的进行insert
  },
  // 设置一下Drag的属性
  // 比如说，此处的id就是drag-id，代表着拖拽源的id
  [SET_DRAG_TAG](
    state: IDragState,
    { tag, id }: { tag: DragTags; id: string }
  ): void {
    state.curdragComponent.tag = tag
    state.curdragComponent.id = id
  },
  [SET_DROP_ACTION](
    state: IDragState,
    opts: { options: IPosition & IElementSize; dropId: string }
  ): void {
    const { options, dropId } = opts
    const { x, y, width, height } = options
    const { id: dragId, tag } = state.curdragComponent
    const preLeft = state.curdragComponent.style.left ?? 0
    const preTop = state.curdragComponent.style.top ?? 0
    const [left, top] = [
      x - state.dragStartPosition.x,
      y - state.dragStartPosition.y
    ]
    console.log(tag)
    // 如果当前是一个全新组件，给他创建一个新的id以及各种属性
    if (!dragId) {
      state.curdragComponent = init(BASE_DRAG_COMPONENT)
      configNewNode(tag, state.curdragComponent)
    }

    state.curdragComponent.style.left = left
    state.curdragComponent.style.top = top
    // 从源拖拽到画布
    if (!dragId && !dropId) {
      //configNewNode(tag, state.curdragComponent)
      const newNode = deepCopy(state.curdragComponent)
      state.dragList.push(newNode)
      // state.curdragComponent = init(BASE_DRAG_COMPONENT)
      state.curdragComponent = deepCopy(newNode)
    }
    //从源拖拽到组件
    if (!dragId && dropId) {
      console.log(preLeft, preTop)
      console.log(left, top)
      // state.curdragComponent.style.left = left + preLeft
      // state.curdragComponent.style.top = top + preTop
      //configNewNode(tag, state.curdragComponent)
      const newNode = deepCopy(state.curdragComponent)
      traverseInsertToChildren(state.dragList, dropId, newNode)
      //state.curdragComponent = init(BASE_DRAG_COMPONENT)
      state.curdragComponent = deepCopy(newNode)
    }
    //从组件拖拽到画布
    if (dragId && !dropId) {
      const targetDragElement = findDragNode(state.dragList, dragId)
      const newNode = createNewDragComponentWithDeleteOld(targetDragElement!, {
        left,
        top
      })
      state.dragList = traverseDelete(state.dragList, dragId)
      state.dragList.push(newNode)
      //state.curdragComponent = init(BASE_DRAG_COMPONENT)
      state.curdragComponent = deepCopy(newNode)
    }
    // 组件拖动自己
    if (dragId && dropId && dragId === dropId) {
      const targetDragElement = findDragNode(state.dragList, dragId)
      if (targetDragElement) {
        targetDragElement.style.left += left
        targetDragElement.style.top += top
      }
      //state.curdragComponent = init(BASE_DRAG_COMPONENT)
      //state.curdragComponent = newNode
      state.curdragComponent = deepCopy(targetDragElement)
    }

    // 组件拖动到另一个组件
    if (dragId && dropId && dragId !== dropId) {
      console.log('组件拖动到另一个组件')
      const targetDragElement = findDragNode(state.dragList, dragId)

      // 如果放置组件是放入组件的儿子，放置失败
      if (verifyIsCompFatherToCompChild(targetDragElement!, dropId)) {
        return
      }
      const newNode = createNewDragComponentWithDeleteOld(targetDragElement!, {
        left,
        top
      })
      state.dragList = traverseDelete(state.dragList, dragId)
      traverseInsertToChildren(state.dragList, dropId, newNode)
      //state.curdragComponent = init(BASE_DRAG_COMPONENT)
      state.curdragComponent = deepCopy(newNode)
    }

    state.currentStatus = DragStatus.Done
  },
  [SET_DRAG_COMPONENT](state: IDragState, dragId: string): void {
    // 获取当前点击
    state.curdragComponent = findDragNode(state.dragList, dragId)!
  },
  [SET_CURCOMPONENT_ATTRIBUTE](
    state: IDragState,
    updateConfig: Partial<IDragComponent>
  ): void {
    state.curdragComponent = {
      ...state.curdragComponent,
      ...updateConfig
    }
    const dragId = state.curdragComponent.id
    console.log(dragId, '0--------------')
    console.log(state.curdragComponent)
    state.dragList = replaceOldComponent(
      state.dragList,
      dragId,
      state.curdragComponent
    )
    console.log(state.dragList)
    state.curdragComponent = init(state.curdragComponent)
  }
}
