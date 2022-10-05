/*
 * @Date: 2022-10-05 22:23:00
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 22:33:22
 * @FilePath: \MyRoom-LowCode\src\store\drag\type.ts
 */

export interface IDragList {
  name: string
  id: string
  width: number
  height: number
  children: IDragComponent[]
}

export interface IDragComponent {
  tag: 'text'
  id: string
  content: string
  style: IDragComponentStyle
  children?: IDragComponent[]
}

export interface IDragComponentStyle {
  width: number
  height: number
  top: number
  left: number
}

export interface IDragState {
  width: number
  height: number
  dragList: IDragComponent[]
}
