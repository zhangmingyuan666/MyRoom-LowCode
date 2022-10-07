/*
 * @Date: 2022-10-05 17:39:40
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 18:01:12
 * @FilePath: \MyRoom-LowCode\src\store\drag\mutations.ts
 */
import { DragTags, IElementSize, IPosition } from '@/types/drag-types'
import { IDragComponent, IDragState } from './type'
import {
  ADD_DROP_COMPONENT,
  SET_CURCOMPONENT_ATTRIBUTE,
  SET_DRAGLIST,
  SET_DRAG_START_POSITION,
  SET_DRAG_TAG,
  SET_DROP_ACTION
} from './type-actions'

export default {
  [SET_DRAGLIST](state: IDragState, list: IDragComponent[]): void {
    console.log('set一下')
  },
  // 缓存dragStart的Position
  [SET_DRAG_START_POSITION](state: IDragState, { x, y }: IPosition): void {
    state.dragStartPosition.x = x
    state.dragStartPosition.y = y
  },
  // drop时，对于left和top的计算
  [SET_DROP_ACTION](
    state: IDragState,
    { x, y, width, height }: IPosition & IElementSize
  ): void {
    const [left, top] = [
      x - state.dragStartPosition.x,
      y - state.dragStartPosition.y
    ]
    state.curdragComponent.style.top = top
    state.curdragComponent.style.left = left
  },
  [ADD_DROP_COMPONENT](state: IDragState, dropId: string): void {
    // 首先判断当前id是否存在
    const { tag, id } = state.curdragComponent

    // 递归遍历list，如果存在，那么把他删掉，然后把新的进行insert
    state.dragList = traverseDelete(state.dragList, id)

    if (dropId) {
      // 如果dropId存在，意味着当前组件是一个嵌套组件
      traverseInsert(state.dragList, dropId, tag as any, state.curdragComponent)
      state.curdragComponent = { ...state.curdragComponent }
      return
    }
    // 如果当前drop不存在，正常插入
    // 此处实现深拷贝赋值
    // 暂时写成这样
    insert(tag, state.curdragComponent)
    state.dragList.push(JSON.parse(JSON.stringify(state.curdragComponent)))
    state.curdragComponent = { ...state.curdragComponent }
  },
  [SET_DRAG_TAG](
    state: IDragState,
    { tag, id }: { tag: DragTags; id: string }
  ): void {
    state.curdragComponent.tag = tag
    state.curdragComponent.id = id
  },
  [SET_CURCOMPONENT_ATTRIBUTE](
    state: IDragState,
    key: keyof IDragComponent
  ): void {
    console.log(state)
    console.log(key)
  }
}

function traverseDelete(list: IDragComponent[], id: string): IDragComponent[] {
  return list.filter((dragComponent: IDragComponent) => {
    if (dragComponent.children) {
      dragComponent.children = traverseDelete(dragComponent.children, id)
    }
    return dragComponent.id !== id
  })
}

function traverseInsert(
  list: IDragComponent[],
  id: string,
  tag: DragTags.TEXT,
  component: IDragComponent
) {
  list.forEach((dragComponent: IDragComponent) => {
    if (dragComponent.children) {
      traverseInsert(dragComponent.children, id, tag, component)
    }
    if (dragComponent.id === id) {
      // 如果存在 那么push
      insert(tag as any, component)
      dragComponent.children?.push(JSON.parse(JSON.stringify(component)))
    }
  })
}

function insert(tag: DragTags, component: IDragComponent): void {
  // 此时生成配置项
  component.id = String(+new Date())
  component.style.height = 50
  component.style.width = 50
  switch (tag) {
    case DragTags.TEXT:
      component.content = '哈哈哈哈'
      break
    case DragTags.IMAGE:
      component.content =
        'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d11fd472d1a24430b8a221c8c8155f37~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?'
      break
    case DragTags.VIDEO:
      component.content = ''
      break
    default:
      break
  }
}
