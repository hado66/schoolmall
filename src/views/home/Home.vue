<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>

    <home-recommend :crecommends="recommends"></home-recommend>

    <feature></feature>

    <tab-elect class="home-tab-control"  :ctitles='["流行","新款","精选"]'></tab-elect>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>



    <button @click="test">++++++</button>


  </div>

</template>

<script>
  import NavBar from "../../components/comment/navbar/NavBar";
  import TabElect from "../../components/content/tabElect/TabElect";


  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import Feature from "./childComps/Feature";



  import {getHomeMultiData} from "../../network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      Feature,
      TabElect,
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
    height: 49px;
    line-height: 49px;
  }

  .home-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .home {
    margin-top: 49px;
  }

  .home-tab-control{
    position: sticky;
    top: 49px;

  }

  /*button {*/
  /*  margin-top: -6px;*/
  /*}*/

</style>
