<template>
  <div class="remark">
    <p class="wrap">备注：{{wrap}}</p>
  </div>
</template>

<script>
export default {
  name: 'remark',
  props: ['wrap'],
  data() {
    return {};
  }
};
</script>
 
<style lang="scss" scoped>
.remark {
  height: px2rem(80);
  background-color: #fff;
  width: 100%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  padding-left: px2rem(26);
  line-height: px2rem(80);
  font-size: px2rem(22);
  .wrap {
    font-size: px2rem(22);
  }
}
</style>
