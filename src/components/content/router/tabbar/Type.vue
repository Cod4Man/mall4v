<template>
    <div>
      <main-interface :message="msg"></main-interface>
    </div>
</template>

<script>
  // const MainInterface = () => import(/* webpackChunkName: "about" */ 'src/components/common/tabbar/MainInterface.vue')
  import MainInterface from 'components/common/tabbar/MainInterface'
    export default {
      name: "Type",
      components: {
        MainInterface
      },
      data() {
        return {
          msg: this.$route.path
        }
      },
        // 使用声明周期函数：
        activated() {
            // 该路由活跃
            // 读取缓存
            this.$router.path = this.path
        },
        deactivated() {
            // 该路由不活跃
        },
        beforeRouteLeave(to, from, next) {
            this.path = this.$router.path
            // 缓存path
            next()
        }
    }
</script>

<style scoped>

</style>
