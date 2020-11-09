<template>
  <div class="main-type-bar">
    <main-type-item v-for="(mainTypeItemInfo, index) in mainTypeItemInfos"
                    :key="mainTypeItemInfo" :mainTypeItemInfo="mainTypeItemInfo"/>
  </div>
</template>

<script>
  const MainTypeItem = () => import('components/common/maintypebar/MainTypeItem.vue')
  export default {
    name: "MainTypeBar",
    props: {
      mainTypeItemInfos: {
        type: Array,
        default: []
      }
    },
    components: {
      MainTypeItem
    }
  }
</script>

<style scoped>
  @import "~assets/css/commonbar/maintypebar.css";
</style>