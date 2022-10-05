/*
 * @Date: 2022-10-02 21:24:38
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 19:58:57
 * @FilePath: \MyRoom-LowCode\src\base-ui\common\ming-message\src\type.ts
 */

// import { ValueOf } from '@/types/base-types'

// 此处用于定义消息类型
export enum MessageTypesEnum {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning'
}

// 此处是消息类型的实例
// export const BASE_MSG_TYPE: IMessageTypes = {
//   INFO: 'info',
//   SUCCESS: 'success',
//   ERROR: 'error',
//   WARNING: 'warning'
// }

// 此处表示所有的types
//export type IMsgTypes = ValueOf<IMessageTypes>

// 此处返回我们Message传入Message的Config
export interface IMsgConfig {
  type: Partial<MessageTypesEnum>
  message: string
  duration: number
}
