/*
 * @Date: 2022-10-05 18:32:41
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 00:29:54
 * @FilePath: \MyRoom-LowCode\src\hooks\ming-drag-hooks\src\drag-hook.ts
 */
// 用于注册dragHooks
import store from '@/store'
import { ref } from 'vue'
import { IPosition } from '@/types/drag-types'
import { ON_DRAG_DEFAULT } from './utils/drag-utils'
import { OUTPUT_SET_DRAG_START_POSITION } from '@/store/drag/type-actions'

export interface IUseDrag {
  dragStartAction: (e: DragEvent, el: HTMLElement) => void
  createDragAttribute: () => void
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
  function dragStartAction(e: DragEvent, el: HTMLElement) {
    const { x, y }: IPosition = ON_DRAG_DEFAULT(e, el)
    store.dispatch(OUTPUT_SET_DRAG_START_POSITION, { x, y })
  }

  // 给我们的HTML一些必要的属性添加
  function createDragAttribute() {
    dragSourceRef.draggable = true
  }

  return {
    dragStartAction,
    createDragAttribute
  }
}
