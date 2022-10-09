/*
 * @Date: 2022-10-09 14:47:41
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-09 14:51:05
 * @FilePath: \MyRoom-LowCode\src\hooks\active-hooks\index.ts
 * @description: none
 */
import { computed } from 'vue'

interface IUseActive {
  isActive: (source: string, target: string) => 'active' | undefined
}

const useActive = (): IUseActive => {
  const isActive = (source: string, target: string) => {
    if (source && target && source === target) return 'active'
  }

  return {
    isActive
  }
}

export default useActive
