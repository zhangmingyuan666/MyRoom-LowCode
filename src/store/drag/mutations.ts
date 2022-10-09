/*
 * @Date: 2022-10-05 17:39:40
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-09 15:30:50
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
  configDefaultNewNode,
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

    // 如果是一个全新的组件
    if (!dragId) {
      // 进行配置的初始化
      state.curdragComponent = init(BASE_DRAG_COMPONENT)
      // 进行默认属性的配置
      configDefaultNewNode(tag, state.curdragComponent)
    }

    state.curdragComponent.style.left = left
    state.curdragComponent.style.top = top
    // 从源拖拽到画布
    if (!dragId && !dropId) {
      const newNode = deepCopy(state.curdragComponent)
      state.dragList.push(newNode)
      state.curdragComponent = deepCopy(newNode)
    }
    //从源拖拽到组件
    if (!dragId && dropId) {
      const newNode = deepCopy(state.curdragComponent)
      traverseInsertToChildren(state.dragList, dropId, newNode)
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
      state.curdragComponent = deepCopy(newNode)
    }
    // 组件拖动自己
    if (dragId && dropId && dragId === dropId) {
      const targetDragElement = findDragNode(state.dragList, dragId)
      if (targetDragElement) {
        targetDragElement.style.left += left
        targetDragElement.style.top += top
      }
      state.curdragComponent = deepCopy(targetDragElement)
    }

    // 组件拖动到另一个组件
    if (dragId && dropId && dragId !== dropId) {
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
      state.curdragComponent = deepCopy(newNode)
    }
    // 更改登陆状态
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
    // 暂时维护中
    const dragId = state.curdragComponent.id
    console.log(dragId, '0--------------')
    console.log(state.curdragComponent)
    const preNode = findDragNode(state.dragList, dragId)!
    preNode.content = state.curdragComponent.content
    preNode.style = state.curdragComponent.style
    // state.dragList = replaceOldComponent(
    //   state.dragList,
    //   dragId,
    //   state.curdragComponent
    // )
    // console.log(state.dragList)
    state.curdragComponent = init(state.curdragComponent)
  }
}
