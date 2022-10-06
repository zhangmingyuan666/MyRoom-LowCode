/*
 * @Date: 2022-10-05 17:39:26
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 01:05:09
 * @FilePath: \MyRoom-LowCode\src\store\drag\type-actions.ts
 */

// 正常对待Action
export const SET_DRAGLIST = 'SET_DRAGLIST'
export const SET_DRAG_START_POSITION = 'SET_DRAG_START_POSITION'
export const SET_DROP_ACTION = 'SET_DROP_ACTION'

// 暴露给外界的Action
export const OUTPUT_SET_DRAGLIST = 'dragModule/SET_DRAGLIST'
export const OUTPUT_SET_DRAG_START_POSITION =
  'dragModule/SET_DRAG_START_POSITION'
export const OUTPUT_SET_DROP_ACTION = 'dragModule/SET_DROP_ACTION'
