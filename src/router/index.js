import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('components/content/router/tabbar/Home.vue')
const Type = () => import('components/content/router/tabbar/Type.vue')
const ShopCart = () => import(/* webpackChunkName: "about" */ 'components/content/router/tabbar/ShopCart.vue')
const Profile = () => import(/* webpackChunkName: "about" */ 'components/content/router/tabbar/Profile.vue')

const routes = [
  /*{
    path: '',
    redirect: '/profile'
  },*/
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/type',
    name: '分类',
    component: Type
  },
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
  mode: 'history',
  linkActiveClass: 'router-active'
})

export default router
