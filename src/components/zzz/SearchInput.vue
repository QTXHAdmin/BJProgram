<template>
  <div class="searchInput">
    <div class="search">
      <i @click="Search" class="search-icon icon iconfont icon-sousuo"></i>
      <input class="search-input" type="text" :placeholder="value" v-model="searchValue">
    </div>
    <div class="nav-r">
      <slot name=r></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchInput',
  props: ['value'],
  data() {
    return {
      searchValue: ''
    };
  },
  methods: {
    Search() {
      this.$emit('SearchOutSideOrder', this.searchValue);
    }
  }
};
</script>

<style lang="scss" scoped>
.searchInput {
  border-bottom: 1px solid #cccccc;
  background-color: #fafafa;
  height: px2rem(106);
  display: flex;
  justify-content: space-between; // line-height: px2rem(106);
  align-items: center;
  position: relative;

  .search {
    // padding: px2rem(38) 0 px2rem(38) px2rem(26);
    padding-left: px2rem(26);

    display: flex;
    justify-content: space-between;

    // border-bottom: 1px solid #cccccc;
    .search-icon {
      font-size: px2rem(32);
      margin-top: px2rem(46);
    }
    .search-input {
      font-size: px2rem(28);
      // line-height: px2rem(90);
      border: none;
      margin: px2rem(40) 0 px2rem(38) px2rem(12);
      padding: 0;
      background-color: #fafafa;
    }
  }
  .nav-r {
    // float: right;
    margin-top: px2rem(20);
    // padding-right: px2rem(28);
    height: px2rem(66);
    width: px2rem(124);
    text-align: center;
    // border-left: 4px solid #ededed;
    line-height: px2rem(66);
  }
}
</style>
