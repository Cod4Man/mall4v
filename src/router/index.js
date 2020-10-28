import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const Profile = () => import(/* webpackChunkName: "about" */ 'components/content/router/tabbar/Profile.vue')
import Profile from 'components/content/router/tabbar/Profile'
// const ShopCart = () => import(/* webpackChunkName: "about" */ 'components/content/router/tabbar/ShopCart.vue')
import ShopCart from 'components/content/router/tabbar/ShopCart'

const routes = [
  /*{
    path: '',
    redirect: '/profile'
  },*/
  {
    path: '/profile',
    name: '个人中心',
    component: Profile
  },
  {
    path: '/cart',
    name: '购物车',
    component: ShopCart
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
