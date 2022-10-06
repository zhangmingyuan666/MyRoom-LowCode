/*
 * @Date: 2022-10-06 21:38:39
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 00:29:09
 * @FilePath: \MyRoom-LowCode\src\hooks\ming-drag-hooks\src\utils\drag-utils.ts
 * @description: none
 */

import { IPosition } from '@/types/drag-types'

/**
 * @description: 用于定义拖拽组件的默认事件，可以获取点击相对于父亲的位置
 * @param {DragEvent} e 拖拽event事件
 * @param {HTMLElement} el 拖拽元素本身
 * @return {*}
 */
export const ON_DRAG_DEFAULT = (e: DragEvent, el: HTMLElement): IPosition => {
  const { x, y } = getClickPosition(e, el)

  return {
    x,
    y
  }
}

/**
 * @description: 获取当前点击事件相对于父亲的偏移距离
 * @param {DragEvent} e 拖拽事件
 * @param {HTMLElement} el HTML元素
 * @return {*}
 */
export const getClickPosition = (e: DragEvent, el: HTMLElement): IPosition => {
  const { offsetX: x, offsetY: y } = e
  console.log('当前点击事件，相对于父亲的偏移距离', x, y)
  const { offsetTop, offsetLeft } = el
  return {
    x,
    y
  }
}
