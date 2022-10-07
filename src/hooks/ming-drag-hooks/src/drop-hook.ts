/*
 * @Date: 2022-10-05 18:32:57
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-07 16:23:44
 * @FilePath: \MyRoom-LowCode\src\hooks\ming-drag-hooks\src\drop-hook.ts
 * @description: none
 */
import {
  OUTPUT_ADD_DROP_COMPONENT,
  OUTPUT_SET_DROP_ACTION,
  SET_DRAGLIST
} from '@/store/drag/type-actions'
import { useStore } from '@/store'
import { ON_DROP_DEFAULT } from './utils/drop-utils'

interface IUseDrop {
  initList: () => void
  dropAction: (e: DragEvent, el: HTMLElement) => void
}

// 此处的el是放置容器
function useDrop(el: HTMLElement): IUseDrop {
  const store = useStore()

  function initList() {
    store.dispatch('dragModule/' + SET_DRAGLIST)
  }

  function dropAction(e: DragEvent, el: HTMLElement) {
    // 此处是获取当前放置元素的id，如果当前元素有id的话，说明他是嵌套的组件
    const dropId: any = (e.target as HTMLElement).id
    e.stopPropagation()
    e.preventDefault()
    const { x, y, width, height } = ON_DROP_DEFAULT(e, el)
    // 此时获取了关于drop的所有数据
    store.dispatch(OUTPUT_SET_DROP_ACTION, { x, y, width, height })
    store.dispatch(OUTPUT_ADD_DROP_COMPONENT, dropId)
  }

  return {
    initList,
    dropAction
  }
}

export default useDrop
