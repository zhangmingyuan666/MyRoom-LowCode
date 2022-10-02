/*
 * @Date: 2022-10-02 22:39:00
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-02 22:39:11
 * @FilePath: \MyRoom-LowCode\src\types\base-types.ts
 */

/**
 * @description: 类型体操之：拿到一个interface的所有value，将{a:1,b:1}，转化为'1' | '2'
 * @return {*}
 */
export type ValueOf<T> = T[keyof T]
