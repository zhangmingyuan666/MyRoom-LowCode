import { IPosition, IElementSize } from '@/types/drag-types'

/*
 * @Date: 2022-10-06 23:32:40
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 01:17:51
 * @FilePath: \MyRoom-LowCode\src\hooks\ming-drag-hooks\src\utils\drop-utils.ts
 * @description: none
 */
export function ON_DROP_DEFAULT(
  e: DragEvent,
  el: HTMLElement
): IPosition & IElementSize {
  console.log(e)
  const { x, y, width, height } = getDropPosition(e, el)

  return {
    x,
    y,
    width,
    height
  }
}

export function getDropPosition(
  e: DragEvent,
  el: HTMLElement
): IPosition & IElementSize {
  const { offsetX: x, offsetY: y } = e //当前点击事件，相对于父亲的偏移距离,top,left
  console.log('当前点击事件，相对于canvas的偏移距离', x, y)
  const { clientHeight: height, clientWidth: width } = el
  console.log('当前drop容器的大小', el.clientHeight, el.clientWidth)
  // border-box : 不够精准console.log(canvas.offsetHeight, canvas.offsetWidth)

  return {
    x,
    y,
    width,
    height
  }
}
