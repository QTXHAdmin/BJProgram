<template>
  <div class="search">
    <span class="iconfont  icon-icon-"></span>
    <input type="text" class="search-text" :placeholder="srchplaceholder">
    <slot name="search-r">

    </slot>
  </div>

</template>
<script>
export default {
  data() {
    return {
      placeholder: ''
    };
  },
  props: ['srchplaceholder']
};
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  .icon-icon- {
    position: absolute;
    top: px2rem(43);
    left: px2rem(27);
    &:before {
      font-size: px2rem(30);
    }
  }
  .search-text {
    padding-left: px2rem(70);
    height: px2rem(104);
    width: 100%;
    border: none;
    border-bottom: px2rem(1) solid #ccc;
    background-color: #fafafa;
    font-size: px2rem(24);
    margin-bottom: 0;
  }
}
</style>
