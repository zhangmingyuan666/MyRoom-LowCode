/*
 * @Date: 2022-10-05 17:39:52
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 00:33:08
 * @FilePath: \MyRoom-LowCode\src\store\drag\state.ts
 */
import { DragStatus, IDragState } from './type'

export default <IDragState>{
  // 正常情况下，默认为Done属性
  currentStatus: DragStatus.Done,
  width: 1000,
  height: 600,
  dragList: [],
  dragStartPosition: { x: 0, y: 0 }
}
