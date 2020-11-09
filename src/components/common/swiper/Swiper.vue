<template>
  <div class="swiper">
    <img class="swiper-img" :src="currImg" />
    <span class="swiper-img-index">
      <span v-for="(imgurl, index) in imgurls" @click="changeImgByIndex(index)"
            :class="{'currImg': currImgIndex == index}"> ● </span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      imgurls: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currImg: '',
        currImgIndex: 0
      }
    },
    created() {
      // 轮播事件
      if (Array.isArray(this.imgurls) && this.imgurls.length > 0) {
        this.currImg = this.imgurls[this.currImgIndex]
        setInterval(() => {
          this.currImgIndex++
          this.changeImgByIndex(this.currImgIndex % this.imgurls.length)
        }, 2000)
      }
    },
    methods: {
      changeImgByIndex(index) {
        this.currImg = this.imgurls[index]
        this.currImgIndex = index
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/commonbar/swiper.css";
</style>