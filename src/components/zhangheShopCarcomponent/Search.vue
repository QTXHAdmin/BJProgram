<template>
  <div class="search">
    <span class="iconfont  icon-sousuo"></span>
    <input type="text" class="search-text" :placeholder="orderoutsidesearch">
  </div>
</template>
<script>
export default {
  data() {
    return {
      placeholder: ''
    }
  },
  props: ['orderoutsidesearch']
}
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  .icon-sousuo {
    position: absolute;
    top: px2rem(37);
    left: px2rem(27);
    &:before {
      font-size: px2rem(30);
    }
  }
  .search-text {
    padding-left: px2rem(70);
    height: px2rem(103);
    width: 100%;
    border: none;
    border-bottom: px2rem(1) solid #ccc;
    background-color: #fafafa;
    font-size: px2rem(24);
  }
}
</style>

