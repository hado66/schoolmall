<template>
  <div>
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <h2>首页</h2>


  </div>

</template>

<script>
  import NavBar from "../../components/comment/navbar/NavBar";
  export default {
    name: "Home",
    components:{
      NavBar,
    }
  }
</script>

<style scoped>
  .home-nav-bar {
    text-align: center;
    background-color: pink;
    color: #f6f6f6;
  }

</style>
