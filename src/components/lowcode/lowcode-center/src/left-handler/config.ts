/*
 * @Date: 2022-10-06 20:11:30
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-06 21:16:40
 * @FilePath: \MyRoom-LowCode\src\components\lowcode\lowcode-center\src\left-handler\config.ts
 * @description: none
 */
import { DragTags } from '@/types/drag-types'

interface IDragSource {
  tag: DragTags
  description: string
}

export const dragSourceListConfig: IDragSource[] = [
  {
    tag: DragTags.TEXT,
    description: '文字'
  },
  {
    tag: DragTags.IMAGE,
    description: '图片'
  },
  {
    tag: DragTags.VIDEO,
    description: '视频'
  }
]
