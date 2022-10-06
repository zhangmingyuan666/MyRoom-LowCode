/*
 * @Date: 2022-10-06 20:51:20
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 00:45:54
 * @FilePath: \MyRoom-LowCode\src\types\drag-types.ts
 * @description: none
 */
export enum DragTags {
  IMAGE = 'image',
  TEXT = 'text',
  VIDEO = 'video'
}

export interface IPosition {
  x: number
  y: number
}

export interface IElementSize {
  width: number
  height: number
}
