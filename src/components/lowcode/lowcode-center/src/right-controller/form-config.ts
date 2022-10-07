/*
 * @Date: 2022-10-07 17:07:20
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 17:09:37
 * @FilePath: \MyRoom-LowCode\src\components\lowcode\lowcode-center\src\right-controller\form-config.ts
 * @description: none
 */
import { IFormItems } from '@/base-ui/common/ming-form/types/types'

export const formConfig: IFormItems = {
  formItems: [
    {
      label: '宽度:',
      field: 'width',
      type: 'input'
    },
    {
      label: '高度:',
      field: 'height',
      type: 'input'
    },
    {
      label: '左距离:',
      field: 'left',
      type: 'input'
    },
    {
      label: '上距离:',
      field: 'top',
      type: 'input'
    }
  ]
}
