<template>
  <div id="type-topbar">
    <top-bar>
      <div slot="left" class="left-home-top-bar"><a href="#"><</a></div>
      <div slot="center" class="center-home-top-bar"><span>商品分类</span></div>
      <div slot="right" class="right-home-top-bar"></div>
    </top-bar>
  </div>
</template>

<script>
  const TopBar = () => import('components/common/topbar/TopBar.vue')
  export default {
    name: "TypeTopBar",
    components: {
      TopBar
    }
  }
</script>

<style scoped>
  .left-home-top-bar {
    background-color: #ff7181;
    width: 20%;
  }

  a{
    text-decoration: none;
    color: aliceblue;
  }

  .center-home-top-bar{
    background-color: #ff7181;
    color: aliceblue;
    width: 60%;
  }

  .right-home-top-bar {
    background-color: #ff7181;
    width: 20%;
  }
</style>