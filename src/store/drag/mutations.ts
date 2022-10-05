/*
 * @Date: 2022-10-05 17:39:40
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-06 01:28:10
 * @FilePath: \MyRoom-LowCode\src\store\drag\mutations.ts
 */
import { IDragComponent, IDragState } from './type'
import { SET_DRAGLIST } from './type-actions'

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
  }
}
