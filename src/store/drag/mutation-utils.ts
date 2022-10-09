/*
 * @Date: 2022-10-08 13:29:53
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-09 14:35:39
 * @FilePath: \MyRoom-LowCode\src\store\drag\mutation-utils.ts
 * @description: none
 */

import { DragTags } from '@/types/drag-types'
import { deepCopy } from '@/utils'
import { IDragComponent } from './type'

/**
 * @description: 真正的插入方式，此处给插入节点一些属性以及id
 * @param {DragTags} tag
 * @param {IDragComponent} component
 * @return {*}
 */
export function setInitialDragComponent(
  tag: DragTags,
  component: IDragComponent
): void {
  component.id = String(+new Date())
  // 此时生成配置项
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

export function findDragComponent(
  dragList: IDragComponent[],
  dragId: string
): IDragComponent | null {
  let node: any = null
  dragList.forEach((dragComponent: IDragComponent) => {
    if (node !== null) return
    if (dragComponent.children) {
      node = findDragComponent(dragComponent.children, dragId)
    }

    if (dragComponent.id === dragId) node = dragComponent
  })
  return node
}

export function initDragComponent(component: IDragComponent): IDragComponent {
  return deepCopy(component)
}

/**
 * @description: 此函数递归删除组件，如果某组件需要移动，需要移除旧节点，然后插入新节点
 * @param {IDragComponent} list 传入的dragList
 * @param {string} id 当前组件的id，也就是需要删除的节点
 * @return {*}
 */
export function traverseDelete(
  list: IDragComponent[],
  id: string
): IDragComponent[] {
  return list.filter((dragComponent: IDragComponent) => {
    if (dragComponent.children) {
      dragComponent.children = traverseDelete(dragComponent.children, id)
    }
    return dragComponent.id !== id
  })
}

export function createNewDragComponentWithDeleteOld(
  oldComponent: IDragComponent,
  options: { left: number; top: number }
): IDragComponent {
  const { left, top } = options
  const newDragElement = deepCopy(oldComponent)
  newDragElement.id = String(+new Date())
  newDragElement.style.left = left
  newDragElement.style.top = top
  return newDragElement
}

export function findDragNode(
  dragList: IDragComponent[],
  dragId: string
): IDragComponent | null {
  let node: any = null
  dragList.forEach((dragComponent: IDragComponent) => {
    if (node !== null) return
    if (dragComponent.children) {
      node = findDragNode(dragComponent.children, dragId)
    }

    if (dragComponent.id === dragId) {
      node = dragComponent
    }
  })

  return node
}

export function verifyIsCompFatherToCompChild(
  fatherComponent: IDragComponent,
  dropId: string
): IDragComponent | null {
  return findDragNode(fatherComponent.children, dropId)
}

/**
 * @description: dfs进行遍历，首先要对爹进行插入
 * @param {IDragComponent[]} list 传入的dragList
 * @param {string} dropId 容器的id
 * @param {IDragComponent} newComponent 需要放入的新组件
 * @return {*}
 */
export function traverseInsertToChildren(
  list: IDragComponent[],
  dropId: string,
  newComponent: IDragComponent
): void {
  list.forEach((dragComponent: IDragComponent) => {
    if (dragComponent.children) {
      traverseInsertToChildren(dragComponent.children, dropId, newComponent)
    }

    // 如果当前找到的id和dropId，一样，说明找到了父亲容器，需要插入到这个父亲的儿子里
    if (dragComponent.id === dropId) {
      dragComponent.children?.push(newComponent)
    }
  })
}

/**
 * @description: 真正的插入方式，此处给插入节点一些属性以及id
 * @param {DragTags} tag
 * @param {IDragComponent} component
 * @return {*}
 */
export function configDefaultNewNode(
  tag: DragTags,
  component: IDragComponent
): void {
  component.tag = tag
  component.id = String(+new Date())
  // 此时生成配置项
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

export function init(component: IDragComponent): IDragComponent {
  return deepCopy(component)
}

export function replaceOldComponent(
  list: IDragComponent[],
  dragId: string,
  newComp: IDragComponent
): IDragComponent[] {
  return list.map((component: IDragComponent) => {
    if (component.children) {
      component.children = replaceOldComponent(
        component.children,
        dragId,
        newComp
      )
    }
    if (component.id === dragId) return newComp

    return component
  })
}
