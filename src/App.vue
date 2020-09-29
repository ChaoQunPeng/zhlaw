<template>
  <div id="app">
    <header-layout></header-layout>
    <router-view />
  </div>
</template>

<script>
import HeaderLayout from './layout/header-layout.vue'

export default {
  components: {
    HeaderLayout
  }
}
</script>

<style lang="less">
body {
  background: #fafafa;
  padding-top: 15px;
}

a {
  color: #417ff9;
  text-decoration: none;
}
</style>
