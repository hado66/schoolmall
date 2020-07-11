<template>
  <div class="tab-elect">
        <div v-for="(item,key) in ctitles" class="tab-elect-item" :class="{active:key==index}" @click="itemClick(key)">
      <span>{{item}}
    </span>
    </div>


  </div>
</template>

<script>
  export default {
    name: "TabElect",
    props: {
      ctitles: {
        type: Array,
        default() {
          return ["titles1", "titles2", "titles3"]
        },
      }
    },
    data() {
      return {index: 0}
    },
    methods: {
      itemClick(key) {
        this.index = key
      }
    }
  }
</script>

<style scoped>
  .tab-elect {
    display: flex;
    text-align: center;
    background-color: #00e;
  }

  .tab-elect-item {
    flex: 1;
    height: 49px;
    line-height: 49px;
  }

  .tab-elect-item span {
    padding-left: 4px;
    padding-right: 4px;
  }

  .active {
    color: red;
  }

  .active span {
    border-bottom: red solid 2px;
  }

</style>
