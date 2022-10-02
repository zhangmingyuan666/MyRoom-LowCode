/*
 * @Date: 2022-09-30 22:18:04
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-02 16:12:03
 * @FilePath: \MyRoom-LowCode\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    redirect: '/main/lowcode',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/main/main.vue'),

    children: [
      {
        path: '/main/lowcode',
        name: 'LowCode',
        component: () =>
          import(
            /* webpackChunkName: "lowcode" */ '../views/main/lowcode/index.vue'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
