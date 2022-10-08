/*
 * @Date: 2022-10-08 13:30:09
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-08 13:30:11
 * @FilePath: \MyRoom-LowCode\src\utils\index.ts
 * @description: none
 */
export const deepCopy = (obj: any) => {
  return JSON.parse(JSON.stringify(obj))
}
