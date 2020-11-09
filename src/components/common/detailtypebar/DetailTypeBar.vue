<template>
  <div class="detail-type-bar">
    <detail-type-item v-for="(detailTypeInfo, index) in detailTypeInfos"
      :key="detailTypeInfo" :detailTypeInfo="detailTypeInfo"/>
  </div>
</template>

<script>
  const DetailTypeItem = () => import('components/common/detailtypebar/DetailTypeItem.vue')
  export default {
    name: "DetailTypeBar",
    props: {
      detailTypeInfos: {
        type: Array,
        default: []
      }
    },
    components: {
      DetailTypeItem
    }
  }
</script>

<style scoped>
  @import "~assets/css/commonbar/detailtypebar.css";
</style>