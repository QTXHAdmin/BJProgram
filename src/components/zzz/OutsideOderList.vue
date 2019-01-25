<template>
  <div class="outsideoderlist">
    <div class="list-l">
      <p class="list-title">{{title}}</p>
      <p class="list-date">下单日期：{{date}}</p>
      <p class="list-address">{{address}}</p>
    </div>
    <div class="list-r" @click="GetToOrderPage(url)"><i class="icon iconfont icon-fenye-xiayiye"></i></div>

  </div>
</template>

<script>
export default {
  name: 'outsideoderlist',
  props: ['title', 'date', 'address', 'url'],
  data() {
    return {
      // url:
    };
  },
  // '/home/instoreactivity?id=' + url
  methods: {
    GetToOrderPage(url) {
      this.$router.push('/home/instoreactivity?id=' + url);
    }
  }
};
</script>

<style lang="scss" scoped>
.outsideoderlist {
  height: px2rem(148);
  width: 100%;
  padding: 0 px2rem(26);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  .list-l {
    p {
      height: px2rem(34);
    }
    .list-title {
      font-size: px2rem(28);
      line-height: px2rem(28);
    }
    .list-date,
    .list-address {
      font-size: px2rem(24);
      line-height: px2rem(40);
      color: #757575;
    }
  }
  .icon {
    font-size: px2rem(34);
    color: #757575;
  }
}
</style>
