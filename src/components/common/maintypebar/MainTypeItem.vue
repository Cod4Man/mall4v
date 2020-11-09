<template>
  <div class="main-type-item">
    <div>
      <a href="#">
        <img :src="mainTypeItemInfo.url" class="main-type-item-img">
        <span class="main-type-item-desc">{{mainTypeItemInfo.desc}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainTypeItem",
    props: {
      mainTypeItemInfo: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/commonbar/maintypebar.css";
</style>