<!--
 * @Date: 2022-09-30 23:57:47
 * @LastEditors: zhang-mingyuan123 2369558390@qq.com
 * @LastEditTime: 2022-10-01 19:18:03
 * @FilePath: \MyRoom-LowCode\src\views\main\main.vue
-->
<template>
  <div class="demo-container">
    <!-- Drawer -->
    <ui-drawer type="modal" nav-id="demo-menu">
      <ui-drawer-header>
        <ui-drawer-title>LowCode</ui-drawer-title>
        <ui-drawer-subtitle>小小编辑器</ui-drawer-subtitle>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-nav>
          <ui-nav-item href="javascript:void(0)" active
            >Item {{ 0 }}</ui-nav-item
          >
          <ui-nav-item v-for="i in 12" :key="i" href="javascript:void(0)">
            Item {{ i }}
          </ui-nav-item>
        </ui-nav>
      </ui-drawer-content>
    </ui-drawer>
    <!-- Content -->
    <div class="demo-content">
      <!-- App bar -->
      <ui-top-app-bar
        fixed
        class="demo-app-bar"
        content-selector=".demo-app-content"
        nav-id="demo-menu"
      >
        LowCode生成区
      </ui-top-app-bar>
      <!-- App content -->
      <div class="demo-app-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
