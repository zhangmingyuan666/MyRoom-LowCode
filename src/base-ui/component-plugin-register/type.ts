/*
 * @Date: 2022-10-02 16:35:33
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-02 16:36:13
 * @FilePath: \MyRoom-LowCode\src\base-ui\component-plugin-register\type.ts
 */
type BaseFunction = () => {}
export interface IRegisterPlugin {
  pluginName: string
  pluginAction: BaseFunction
  pluginComponent: any
}
