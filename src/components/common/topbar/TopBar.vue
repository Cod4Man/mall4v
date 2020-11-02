<template>
  <div class="top-bar">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    name: "TopBar"
  }
</script>

<style scoped>
  @import "~assets/css/topbar.css";
</style>