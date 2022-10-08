/*
 * @Date: 2022-10-05 22:23:00
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 13:10:03
 * @FilePath: \MyRoom-LowCode\src\store\drag\type.ts
 */

import { DragTags, IPosition } from '@/types/drag-types'

export interface IDragList {
  name: string
  id: string
  width: number
  height: number
  children: IDragComponent[]
}

export interface IDragComponent {
  tag: DragTags
  id: string
  content: string
  style: IDragComponentStyle
  dragComponentStatus: DragComponentStatus
  children: IDragComponent[]
}

export interface IDragComponentStyle {
  width: number
  height: number
  top: number
  left: number
}

export enum DragStatus {
  Dragging = 'pending',
  Done = 'done'
}

// 代表当前组件是在外面还是已经进入了组件
export enum DragComponentStatus {
  OUT = 'out',
  IN = 'in'
}

export interface IDragState {
  currentStatus: DragStatus
  width: number
  height: number
  curdragComponent: IDragComponent
  dragList: IDragComponent[]
  dragStartPosition: IPosition
}
