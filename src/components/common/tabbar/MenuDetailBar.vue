<template>
  <div :class="{'router-active': this.path == this.$route.path, 'menubar-detail': true}" @click="detailBarClick">
    <div class="menubar-img">
      <slot name="menubar-img"></slot>
    </div>
    <div class="menubar-font">
      <slot name="menubar-font"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MenuDetailBar",
    data() {
      return {

      }
    },
    props: {
      path: {
        type: String
      },
      name: {
        type: String
      }
    },
    methods: {
      detailBarClick() {
        if (this.path != this.$route.path) {

          this.$router.replace({
            path: this.path,
            query: {
              name: this.name
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/tabbar.css";
</style>
