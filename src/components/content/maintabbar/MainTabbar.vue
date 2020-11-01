<template>
  <div class="hello">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <menu-bar>
      <menu-detail-bar path="/home">
        <img src="~assets/img/home/home.svg" slot="menubar-img">
        <div slot="menubar-font">首页</div>
      </menu-detail-bar>
      <menu-detail-bar path="/type">
        <img src="~assets/img/type/type.svg" slot="menubar-img">
        <div slot="menubar-font">分类</div>
      </menu-detail-bar>
      <menu-detail-bar path="/cart">
        <img src="~assets/img/shopcart/shopcart.svg" slot="menubar-img">
        <div slot="menubar-font">购物车</div>
      </menu-detail-bar>
      <menu-detail-bar path="/profile">
        <img src="~assets/img/profile/profile.svg" slot="menubar-img">
        <div slot="menubar-font">个人中心</div>
      </menu-detail-bar>
    </menu-bar>
  </div>
</template>

<script>
  // const router = import('components/../router')
  import router from 'components/../router'
  // const MenuDetailBar = () => import(/* webpackChunkName: "about" */ 'src/components/common/tabbar/MenuDetailBar.vue')
  import MenuDetailBar from 'components/common/tabbar/MenuDetailBar'
  // const MenuBar = () => import(/* webpackChunkName: "about" */ 'src/components/common/tabbar/MenuBar.vue')
  import MenuBar from 'components/common/tabbar/MenuBar'

  export default {
    name: 'MainTabbar',
    components: {
      MenuBar,
      MenuDetailBar
    },
    router,
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
