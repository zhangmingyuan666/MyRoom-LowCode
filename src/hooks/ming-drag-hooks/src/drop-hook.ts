import { SET_DRAGLIST } from '@/store/drag/type-actions'
import { useStore } from 'vuex'

/*
 * @Date: 2022-10-05 18:32:57
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-05 22:44:43
 * @FilePath: \MyRoom-LowCode\src\hooks\ming-drag-hooks\src\drop-hook.ts
 */
interface IUseDrop {
  initList: () => void
}

function useDrop(): IUseDrop {
  const store = useStore<any>()

  function initList() {
    store.dispatch('dragModule/' + SET_DRAGLIST)
  }

  return {
    initList
  }
}

export default useDrop
