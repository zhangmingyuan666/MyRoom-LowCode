/*
 * @Date: 2022-10-05 17:39:40
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 14:00:23
 * @FilePath: \MyRoom-LowCode\src\store\drag\mutations.ts
 */
import { DragTags, IElementSize, IPosition } from '@/types/drag-types'
import { BASE_DRAG_COMPONENT } from './state'
import { deepCopy } from '@/utils'
import { DragComponentStatus, IDragComponent, IDragState } from './type'
import {
  ADD_DROP_COMPONENT,
  SET_CURCOMPONENT_ATTRIBUTE,
  SET_DRAGLIST,
  SET_DRAG_START_POSITION,
  SET_DRAG_TAG,
  SET_DROP_ACTION
} from './type-actions'
import {
  findDragComponent,
  initDragComponent,
  setInitialDragComponent
} from './mutation-utils'

export default {
  [SET_DRAGLIST](state: IDragState, list: IDragComponent[]): void {
    console.log('set一下')
  },
  // 缓存dragStart的Position
  [SET_DRAG_START_POSITION](state: IDragState, { x, y }: IPosition): void {
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
    // 如果没有传入拖拽源的id
    if (!id) {
      console.log('id', id)
      // state.curdragComponent = BASE_DRAG_COMPONENT
      // state.curdragComponent.id = id
    }
  },
  // drop时，对于left和top的计算
  // 代表着落下时候，drop的相对位置
  [SET_DROP_ACTION](
    state: IDragState,
    opts: { options: IPosition & IElementSize; dropId: string }
  ): void {
    const { options, dropId } = opts
    const { x, y, width, height } = options
    const { id: dragId, tag } = state.curdragComponent
    // const { tag, id: dragId, dragComponentStatus } = state.curdragComponent
    // const findPreviousNode = findDragNode(state.dragList, dragId)
    const preLeft = state.curdragComponent.style.left ?? 0
    const preTop = state.curdragComponent.style.top ?? 0
    const [left, top] = [
      x - state.dragStartPosition.x,
      y - state.dragStartPosition.y
    ]
    state.curdragComponent.style.left = left
    state.curdragComponent.style.top = top

    if (!dragId && !dropId) {
      console.log('从源拖拽到画布')
      setInitialDragComponent(tag, state.curdragComponent)
      const newNode = deepCopy(state.curdragComponent)
      state.dragList.push(newNode)
      state.curdragComponent = initDragComponent(state.curdragComponent)
      console.log(state.curdragComponent)
      return
    }

    if (!dragId && dropId) {
      console.log('从源拖拽到组件')
      state.curdragComponent.style.left = left + preLeft
      state.curdragComponent.style.top = top + preTop
      setInitialDragComponent(tag, state.curdragComponent)
      const newNode = deepCopy(state.curdragComponent)
      traverseInsertToChildren(state.dragList, dropId, newNode)
      state.curdragComponent = initDragComponent(BASE_DRAG_COMPONENT)
      return
    }

    if (dragId && !dropId) {
      console.log('从组件拖拽到画布', dragId, dropId)
      const targetDragElement = findDragComponent(state.dragList, dragId)
      console.log('我找到了', targetDragElement)
      const newNode = deepCopy(targetDragElement)
      newNode.id = String(+new Date())
      newNode.style.left = left
      newNode.style.top = top
      state.dragList = traverseDelete(state.dragList, dragId)
      state.dragList.push(newNode)
      state.curdragComponent = initDragComponent(BASE_DRAG_COMPONENT)
      return
    }

    // 当组件自己呗
    if (dragId && dropId && dragId === dropId) {
      console.log('组件拖动自己')
      const targetDragElement = findDragComponent(state.dragList, dragId)
      if (targetDragElement) {
        targetDragElement.style.left += left
        targetDragElement.style.top += top
      }
      state.curdragComponent = initDragComponent(BASE_DRAG_COMPONENT)
      return
    }

    if (dragId && dropId && dragId !== dropId) {
      console.log('组件拖动到另一个组件')
      const targetDragElement = findDragComponent(state.dragList, dragId)
      if (targetDragElement) {
        const isSon = findDragComponent(targetDragElement!.children, dropId)
        if (isSon) {
          // 父亲不能拽到儿子上
          console.log('寄')
          return
        }
      }
      const newNode = deepCopy(targetDragElement)
      newNode.id = String(+new Date())
      newNode.style.left = left
      newNode.style.top = top
      state.dragList = traverseDelete(state.dragList, dragId)
      traverseInsertToChildren(state.dragList, dropId, newNode)
      state.curdragComponent = initDragComponent(BASE_DRAG_COMPONENT)
      return
    }

    // console.log('左' + left, '上' + top)
    // // 如果这个drop节点存在且dropID === dragId,已经存在于节点中了
    // if (dropId === dragId && dragComponentStatus === DragComponentStatus.IN) {
    //   console.log('当前被放在了嵌套节点')
    //   state.curdragComponent.style.top += top
    //   state.curdragComponent.style.left += left
    // } else {
    //   state.curdragComponent.style.top = top
    //   state.curdragComponent.style.left = left
    // }
    // state.curdragComponent.style.top = top
    // state.curdragComponent.style.left = left
  },

  // 此处为Drop的时候，插入组件的情况
  // dropID代表了我们drop的时候，这个放置组件是否为根画布，如果无，那么是没有DropID的，如果是已经存在在画布的节点，则有DropID
  // 1. 如果没有drop-id，代表从根节点进行放入，那么我们需要先将当前存在的节点删除(drag-id删除)，再把新的节点放入（存在副本）
  // 2. 如果有drop-id，但是drop-id不为自己，那么我们需要将当前组件删除后，插入drop-id所在的children，
  // 3. 如果有drop-id且drop-id为自己,那么left和top需要附加一轮计算,然后再进行赋值
  [ADD_DROP_COMPONENT](state: IDragState, dropId: string): void {
    // // 首先判断当前id是否存在
    // const { tag, id: dragId } = state.curdragComponent
    // console.log(dragId)
    // // 如果没有drag-id,代表着是刚刚拖出来的
    // // 我们给他创建一个节点
    // // 给我们当前拖拽的组件赋值一个新的id
    // //configNewNode(tag, state.curdragComponent)
    // // 递归遍历list，对旧的list进行遍历,如果这个节点存在,把他删了
    // const findPreviousNode = findDragNode(state.dragList, dragId)
    // const previousNodeCopy = JSON.parse(JSON.stringify(findPreviousNode)) // 将这个节点先进行深拷贝
    // console.log('当前这个节点的位置', findPreviousNode)
    // if (!dragId) {
    //   configNewNode(tag, state.curdragComponent)
    // } else {
    //   // 如果找到了当前这个节点, 那么把这个节点push进结果
    //   if (findPreviousNode) state.curdragComponent = findPreviousNode
    // }
    // console.log(state.curdragComponent)
    // // 如果当前组件的位置和防止组件是一个组件，那么格式化到左上角
    // console.log('drop-id-1', dropId)
    // if (dropId) {
    //   if (dropId === dragId) {
    //     // 3. 如果这两个保持一致,那么只需要更改top和left就好了,因为无需进行删除
    //   } else {
    //     // 2.
    //     //  把当前节点从list里先删掉
    //     //state.dragList = traverseDelete(state.dragList, dragId) // 把当前拖拽中的组件给我删了
    //     // 如果dropId存在，意味着当前组件是一个嵌套组件,需要插入到这个dropId组件的children里面
    //     traverseInsertToChildren(state.dragList, dropId, state.curdragComponent)
    //   }
    //   return
    // }
    // // 如果当前drop不存在，正常插入
    // // 此处实现深拷贝赋值
    // // 暂时写成这样
    // // insert(tag, state.curdragComponent)
    // state.dragList = traverseDelete(state.dragList, dragId)
    // state.dragList.push(JSON.parse(JSON.stringify(state.curdragComponent)))
    // state.curdragComponent = BASE_DRAG_COMPONENT
  },
  [SET_CURCOMPONENT_ATTRIBUTE](
    state: IDragState,
    updateConfig: Partial<IDragComponent>
  ): void {
    state.curdragComponent = {
      ...state.curdragComponent,
      ...updateConfig
    }
    console.log(state.curdragComponent)
    //state.dragList = traverseDelete(state.dragList, state.curdragComponent.id)
    //configNewNode(state.curdragComponent.tag, state.curdragComponent)
    //state.dragList.push(JSON.parse(JSON.stringify(state.curdragComponent)))
  }
}

/**
 * @description: 此函数递归删除组件，如果某组件需要移动，需要移除旧节点，然后插入新节点
 * @param {IDragComponent} list 传入的dragList
 * @param {string} id 当前组件的id，也就是需要删除的节点
 * @return {*}
 */
function traverseDelete(list: IDragComponent[], id: string): IDragComponent[] {
  return list.filter((dragComponent: IDragComponent) => {
    if (dragComponent.children) {
      dragComponent.children = traverseDelete(dragComponent.children, id)
    }
    return dragComponent.id !== id
  })
}

/**
 * @description: dfs进行遍历，首先要对爹进行插入
 * @param {IDragComponent[]} list 传入的dragList
 * @param {string} dropId 容器的id
 * @param {DragTags} tag 类型
 * @param {IDragComponent} newComponent 需要放入的新组件
 * @return {*}
 */
function traverseInsertToChildren(
  list: IDragComponent[],
  dropId: string,
  newComponent: IDragComponent
) {
  console.log('drop-id', dropId)
  list.forEach((dragComponent: IDragComponent) => {
    if (dragComponent.children) {
      traverseInsertToChildren(dragComponent.children, dropId, newComponent)
    }

    // 如果当前找到的id和dropId，一样，说明找到了父亲容器，需要插入到这个父亲的儿子里
    if (dragComponent.id === dropId) {
      console.log('爱说大话大山大河开始就')
      console.log(newComponent)
      dragComponent.children?.push(newComponent)
    }
  })
}
