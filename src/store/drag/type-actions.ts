/*
 * @Date: 2022-10-05 17:39:26
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 17:45:33
 * @FilePath: \MyRoom-LowCode\src\store\drag\type-actions.ts
 */

// 正常对待Action
export const SET_DRAGLIST = 'SET_DRAGLIST'
export const SET_DRAG_START_POSITION = 'SET_DRAG_START_POSITION'
export const SET_DROP_ACTION = 'SET_DROP_ACTION'
export const ADD_DROP_COMPONENT = 'ADD_DROP_COMPONENT'
export const SET_DRAG_TAG = 'SET_DRAG_TAG'
export const SET_CURCOMPONENT_ATTRIBUTE = 'SET_CURCOMPONENT_ATTRIBUTE'

// 暴露给外界的Action
export const OUTPUT_SET_DRAGLIST = 'dragModule/SET_DRAGLIST'
export const OUTPUT_SET_DRAG_START_POSITION =
  'dragModule/SET_DRAG_START_POSITION'
export const OUTPUT_SET_DROP_ACTION = 'dragModule/SET_DROP_ACTION'
export const OUTPUT_ADD_DROP_COMPONENT = 'dragModule/ADD_DROP_COMPONENT'
export const OUTPUT_SET_DRAG_TAG = 'dragModule/SET_DRAG_TAG'
export const OUTPUT_SET_CURCOMPONENT_ATTRIBUTE =
  'dragModule/SET_CURCOMPONENT_ATTRIBUTE'
