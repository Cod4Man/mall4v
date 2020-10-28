<template>
  <div>
    <main-interface :message="msg"></main-interface>
  </div>
</template>

<script>
  // const MainInterface = () => import(/* webpackChunkName: "about" */ 'components/common/tabbar/MainInterface.vue')
  import MainInterface from 'components/common/tabbar/MainInterface'
    export default {
        name: "ShopCart",
      components: {
        MainInterface
      },
      data() {
        return {
          msg: this.$route.query.name
        }
      }
    }
</script>

<style scoped>

</style>
