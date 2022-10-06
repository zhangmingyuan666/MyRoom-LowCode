/*
 * @Date: 2022-10-05 17:39:40
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 00:32:16
 * @FilePath: \MyRoom-LowCode\src\store\drag\mutations.ts
 */
import { IElementSize, IPosition } from '@/types/drag-types'
import { IDragComponent, IDragState } from './type'
import {
  SET_DRAGLIST,
  SET_DRAG_START_POSITION,
  SET_DROP_ACTION
} from './type-actions'

export default {
  [SET_DRAGLIST](state: IDragState, list: IDragComponent[]): void {
    console.log('set一下')
    state.dragList = [
      {
        tag: 'text',
        content: '哈哈哈哈哈',
        id: '1',
        style: {
          left: 5,
          top: 100,
          height: 100,
          width: 100
        },
        children: [
          {
            tag: 'text',
            content: '哈哈哈哈哈',
            id: '12',
            style: {
              left: 5,
              top: 100,
              height: 100,
              width: 100
            }
          }
        ]
      },
      {
        tag: 'text',
        content: '哈哈哈哈哈',
        id: '2',
        style: {
          left: 755,
          top: 50,
          height: 100,
          width: 100
        }
      },
      {
        tag: 'text',
        content: '哈哈哈哈哈',
        id: '3',
        style: {
          left: 455,
          top: 70,
          height: 100,
          width: 100
        }
      },
      {
        tag: 'text',
        content: '哈哈哈哈哈',
        id: '4',
        style: {
          left: 150,
          top: 30,
          height: 100,
          width: 100
        }
      }
    ]
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
    const [left, right] = [
      x - state.dragStartPosition.x,
      y - state.dragStartPosition.y
    ]

    console.log(left, right)
  }
}
