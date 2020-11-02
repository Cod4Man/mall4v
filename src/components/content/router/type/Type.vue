<template>
    <div>
      <type-top-bar/>
    </div>
</template>

<script>
  const TypeTopBar = () => import('components/content/router/type/TypeTopBar.vue')
    export default {
      name: "Type",
      components: {
        TypeTopBar
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
