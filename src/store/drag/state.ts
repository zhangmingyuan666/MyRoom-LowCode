/*
 * @Date: 2022-10-05 17:39:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 14:16:15
 * @FilePath: \MyRoom-LowCode\src\store\drag\state.ts
 */
import { DragTags } from '@/types/drag-types'
import { DragStatus, IDragState } from './type'

const BASE_DRAG_COMPONENT = {
  id: '',
  content: '',
  tag: DragTags.TEXT,
  style: {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  },
  children: []
}

export default <IDragState>{
  // 正常情况下，默认为Done属性
  currentStatus: DragStatus.Done,
  curdragComponent: BASE_DRAG_COMPONENT,
  width: 1000,
  height: 600,
  dragList: [],
  dragStartPosition: { x: 0, y: 0 }
}
