/*
 * @Date: 2022-10-05 22:23:00
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 14:14:04
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
  children?: IDragComponent[]
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

export interface IDragState {
  currentStatus: DragStatus
  width: number
  height: number
  curdragComponent: IDragComponent
  dragList: IDragComponent[]
  dragStartPosition: IPosition
}
