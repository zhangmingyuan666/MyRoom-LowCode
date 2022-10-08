/*
 * @Date: 2022-10-05 17:39:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 13:33:39
 * @FilePath: \MyRoom-LowCode\src\store\drag\state.ts
 */
import { DragTags } from '@/types/drag-types'
import { DragComponentStatus, DragStatus, IDragState } from './type'
import { deepCopy } from '@/utils'

export const BASE_DRAG_COMPONENT = {
  id: '',
  content: '',
  tag: DragTags.TEXT,
  dragComponentStatus: DragComponentStatus.OUT,
  style: {
    left: 0,
    top: 0,
    width: 200,
    height: 200
  },
  children: []
}

export default <IDragState>{
  // 正常情况下，默认为Done属性
  currentStatus: DragStatus.Done,
  curdragComponent: deepCopy(BASE_DRAG_COMPONENT),
  width: 1000,
  height: 600,
  dragList: [],
  dragStartPosition: { x: 0, y: 0 }
}
