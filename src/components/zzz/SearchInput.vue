<template>
  <div class="searchInput">
    <div class="search">
      <i @click="Search" class="search-icon icon iconfont icon-sousuo"></i>
      <input class="search-input" type="text" placeholder="门店名称编码检索~" v-model="searchValue">
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchInput',
  data() {
    return {
      searchValue: '',
    }

  },
  methods: {
    Search() {
      this.$emit("SearchOutSideOrder", this.searchValue);
    }
  }


}
</script>

<style lang="scss" scoped>
.search {
  height: px2rem(106);
  line-height: px2rem(106);
  // padding: px2rem(38) 0 px2rem(38) px2rem(26);
  padding-left: px2rem(26);
  background-color: #fafafa;
  border-bottom: 1px solid #cccccc;
  .search-icon {
    font-size: px2rem(32);
    // margin-top: px2rem(38);
  }
  .search-input {
    font-size: px2rem(24);
    // line-height: px2rem(90);
    border: none;
    margin: px2rem(20) 0 px2rem(38) px2rem(14);
  }
}
</style>