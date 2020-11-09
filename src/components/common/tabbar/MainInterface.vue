<template>
  <div id="main-interface">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "MainInterface",
    props:
      {
        message: {
          type: String,
          required: true,
          default: ''
        }
      }
  }
</script>


<style>
  @import "~assets/css/commonbar/tabbar.css";
</style>
