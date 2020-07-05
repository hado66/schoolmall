<template>
    <div class="home-recommand">
      <div v-for="item in crecommends" class="home-recommand-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
      props:{
          crecommends:{
            type: Array
          }
      }
    }
</script>

<style scoped>
  .home-recommand {
    position: relative;
    display: flex;
    text-align: center;
    background-color: red;
    /*height: 100%;*/
    padding: 5px;
    top: -4px;
  }

  .home-recommand-item {
    flex: 1;
    vertical-align: middle;
  }
  .home-recommand-item img{
    width: 60px;
    height: 60px;
    border-radius: 61px;
  }

</style>
