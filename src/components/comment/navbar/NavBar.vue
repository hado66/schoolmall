<template>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>

</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav-bar {
    height: 49px;
    line-height: 49px;
    display: flex;
  }
  .left .right{
    width: 49px;
  }
  /*.right {*/
  /*  width: 49px;*/
  /*}*/
  .center {
    background-color: red;
    flex: 1;
  }


</style>
