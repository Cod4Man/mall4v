<template>
  <div>
    <main-tabbar/>
    <img alt="Vue logo" src="~assets/logo.png">
  </div>
</template>

<script>
const MainTabbar = () => import('components/content/maintabbar/MainTabbar.vue')
// import MainTabbar from 'components/content/maintabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
