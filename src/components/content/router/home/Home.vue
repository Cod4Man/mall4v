<template>
  <div>
    <!--<main-interface :message="msg"></main-interface>-->
    <home-top-bar/>
    <swiper :imgurls="imgurls"/>
    <main-type-bar :mainTypeItemInfos="mainTypeItemInfos"/>
    <detail-type-bar :detailTypeInfos="detailTypeInfos"/>
  </div>
</template>

<script>
  // const MainInterface = () => import(/* webpackChunkName: "about" */ 'src/components/common/tabbar/MainInterface.vue')
  // import MainInterface from 'components/common/tabbar/MainInterface'
  const HomeTopBar = () => import('components/content/router/home/HomeTopBar.vue')
  const Swiper = () => import('components/common/swiper/Swiper.vue')
  const MainTypeBar = () => import('components/common/maintypebar/MainTypeBar.vue')
  const DetailTypeBar = () => import('components/common/detailtypebar/DetailTypeBar.vue')
  console.log('test dev ')
  export default {
    name: "Home",
    components: {
      // MainInterface
      HomeTopBar, // 首页顶部栏
      Swiper, // 轮播图
      MainTypeBar, // 主菜单
      DetailTypeBar // 详情菜单
    },
    data() {
      return {
        msg: this.$route.path,
        imgurls: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604423798701&di=4336ecaf81526bb1b9619e52653505ab&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1307%2F10%2Fc3%2F23153395_1373426315898.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604423798700&di=8cecda9b5b14967f459ec4dd4733718c&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201311%2F17%2F174124tp3sa6vvckc25oc8.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604423798700&di=bea5099cb809019af497b4b0fef2f58d&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201309%2F03%2F150928ozb82vyzhzsv96ov.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604423798699&di=761d72f4a87a80ca8b3dfab5ebf1bef1&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201305%2F30%2F220025pxfkhykvkgkvuktq.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604423798699&di=038b2b158678e2b45c02bfe831b5e32a&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201310%2F19%2F235356fyjkkugokokczyo0.jpg  '
        ],
        mainTypeItemInfos: [
          {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604941997712&di=295ebc300ec4a10f990b876ed15ef1f8&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F01%2F20180901190625_wmpeq.thumb.700_0.jpeg',
            desc: '十点抢券'},
          {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604942018416&di=f2af7ef234f3c0cada31bbcda8403218&imgtype=0&src=http%3A%2F%2Fpics2.baidu.com%2Ffeed%2Fbd315c6034a85edf81702f204ba7a225dc54752a.jpeg%3Ftoken%3D40ea367f6b2ef995eaa6f5faf705a7d4',
            desc: '好货特卖'},
          {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604942038991&di=61aeee617fd1fd910fea1e026c7cd9bc&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D0a60fc99cfcec3fd8b3ea77de689d4b6%2Fe2ddef8065380cd72251a3b8ad44ad34588281bf.jpg',
            desc: '全场五折'},
          {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604942036996&di=567245903c4d4193332f5ca6f78a238d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D580e773405f431adbcd243317b37ac0f%2F50f2f9dde71190ef9c7f0079c71b9d16fffa60dc.jpg',
            desc: '断码特供'}
        ],
        detailTypeInfos: [

        ]
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
