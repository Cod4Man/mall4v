<template>
  <div class="hello">
    <router-view></router-view>
    <menu-bar>
      <menu-detail-bar path="/cart">
        <img src="~assets/img/shopcart/cart-full.svg" slot="menubar-img">
        <div slot="menubar-font">购物车</div>
      </menu-detail-bar>
      <menu-detail-bar path="/profile">
        <img src="~assets/img/home/bussiness-man.svg" slot="menubar-img">
        <div slot="menubar-font">个人中心</div>
      </menu-detail-bar>
    </menu-bar>
  </div>
</template>

<script>
  // const router = import('components/../router')
  import router from '../../../router'
  // const MenuDetailBar = () => import(/* webpackChunkName: "about" */ 'src/components/common/tabbar/MenuDetailBar.vue')
  import MenuDetailBar from 'components/common/tabbar/MenuDetailBar'
  // const MenuBar = () => import(/* webpackChunkName: "about" */ 'src/components/common/tabbar/MenuBar.vue')
  import MenuBar from  'components/common/tabbar/MenuBar'
export default {
  name: 'MainTabbar',
  components: {
    MenuBar,
    MenuDetailBar
  },
  router:router

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
