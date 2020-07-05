<template>
  <div>
    <swiper>
      <swiper-item v-for="item in cbanners">
        <a :href="item.link">
          <img :src="item.image923" alt="">
        </a>
      </swiper-item>

    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "../../../components/comment/swiper/index"


  export default {
    name: "HomeSwiper",
    props: {
      cbanners: {
        type: Array,
        // default(){
        //   return []
        // },
      }
    },
    components: {
      Swiper, SwiperItem
    },
    mounted() {
    }

  }
</script>

<style scoped>

</style>
