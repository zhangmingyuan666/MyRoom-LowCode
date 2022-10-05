/*
 * @Date: 2022-10-05 20:47:09
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 21:58:02
 * @FilePath: \MyRoom-LowCode\src\hooks\ming-drag-hooks\src\hooks\drop-action-hooks.ts
 */
interface IUseDropAction {
  dropOnDropOver: (e: DragEvent) => void
  dropOnDrop: (e: DragEvent) => void
}

function getDropPosition(el: HTMLElement, e: DragEvent) {
  const { offsetX, offsetY } = e
  const { clientHeight: borderX, clientWidth: borderY } = el
  return { offsetX, offsetY, borderX, borderY }
}

function useDropAction(el: HTMLElement): IUseDropAction {
  // 此处的el是容器
  function dropOnDropOver(e: DragEvent) {
    e.preventDefault()
  }
  function dropOnDrop(e: DragEvent) {
    e.preventDefault()
    e.stopPropagation()

    const {
      offsetX: DropClickOffsetX,
      offsetY: DropClickOffsetY,
      borderX,
      borderY
    } = getDropPosition(el, e)

    // const positionLeft = DropClickOffsetX - state.clickOffsetX
    // const positionTop = DropClickOffsetY - state.clickOffsetY
    // console.log('left', positionLeft, 'top', positionTop)
  }

  return {
    dropOnDropOver,
    dropOnDrop
  }
}

export default useDropAction
