/*
 * @Date: 2022-10-07 16:38:33
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 16:57:14
 * @FilePath: \MyRoom-LowCode\src\base-ui\common\ming-form\types\types.ts
 * @description: none
 */
export type IFormType = 'input'

export interface IFormItem {
  type: IFormType
  label: string
  field: string
}

export interface IFormItems {
  formItems: IFormItem[]
}
