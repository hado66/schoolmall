<template>
  <div>
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>

    <home-recommend :crecommends="recommends"></home-recommend>

    <button @click="test">+</button>
    <h>sadfasfd</h>
    <h>safdsa</h>

  </div>

</template>

<script>
  import {getHomeMultiData} from "../../network/home";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";

  import NavBar from "../../components/comment/navbar/NavBar";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
      // Swiper,
      // SwiperItem

    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    methods: {
      test() {
        console.log("test")
      }
    },
    created() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      });
    },
    mounted() {
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
