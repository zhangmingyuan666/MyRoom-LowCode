/*
 * @Date: 2022-10-09 14:47:41
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-09 22:09:01
 * @FilePath: \MyRoom-LowCode\src\hooks\mouse-hooks\index.ts
 * @description: none
 */
import { computed, ref } from 'vue'

export const diffX = ref<number>(0)
export const diffY = ref<number>(0)

interface IUseMouse {
  mouseMove: (e: MouseEvent) => void
}

const useMouse = (): IUseMouse => {
  let preX = 0
  let preY = 0
  const mouseMove = (e: MouseEvent) => {
    console.log(e)
    console.log(e.clientY)
    const newX = e.clientX
    const newY = e.clientY
    diffX.value = newX - preX
    diffY.value = newY - preY
    preX = newX
    preY = newY

    console.log(diffX.value, diffY.value)
  }

  return {
    mouseMove
  }
}

export default useMouse
