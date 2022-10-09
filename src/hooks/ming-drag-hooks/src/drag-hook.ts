/*
 * @Date: 2022-10-05 18:32:41
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-09 21:51:28
 * @FilePath: \MyRoom-LowCode\src\hooks\ming-drag-hooks\src\drag-hook.ts
 */
// 用于注册dragHooks
import store from '@/store'
import { ref } from 'vue'
import { DragTags, IPosition } from '@/types/drag-types'
import { ON_DRAG_DEFAULT } from './utils/drag-utils'
import {
  OUTPUT_SET_DRAG_START_POSITION,
  OUTPUT_SET_DRAG_TAG
} from '@/store/drag/type-actions'

export interface IUseDrag {
  dragStartAction: (e: DragEvent, el: HTMLElement, tag: DragTags) => void
  createDragAttribute: () => void
  dragAction: (e: DragEvent) => void
}

export interface IDragActions {
  dragStartAction: (e: DragEvent, el: HTMLElement) => any
}

export default (dragSourceRef: HTMLElement): IUseDrag => {
  createDragAttribute()

  /**
   * @description: drag开始事件
   * @param {DragEvent} e
   * @param {HTMLElement} el
   * @return {*}
   */
  function dragStartAction(e: DragEvent, el: HTMLElement, tag: DragTags) {
    const { x, y }: IPosition = ON_DRAG_DEFAULT(e, el)
    store.dispatch(OUTPUT_SET_DRAG_START_POSITION, { x, y })
    store.dispatch(OUTPUT_SET_DRAG_TAG, { tag, id: el.id })
  }

  function dragAction(e: DragEvent) {
    console.log(e)
    console.log(e.clientX)
  }

  // 给我们的HTML一些必要的属性添加
  function createDragAttribute() {
    dragSourceRef.draggable = true
  }

  return {
    dragStartAction,
    createDragAttribute,
    dragAction
  }
}
