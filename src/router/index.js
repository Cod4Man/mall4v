import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('components/content/router/home/Home.vue')
const Type = () => import('components/content/router/type/Type.vue')
const ShopCart = () => import(/* webpackChunkName: "about" */ 'components/content/router/shopcart/ShopCart.vue')
const Profile = () => import(/* webpackChunkName: "about" */ 'components/content/router/profile/Profile.vue')

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
