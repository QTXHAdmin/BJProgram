<template>
  <div class="submitorder">
    <PublicTopHeader :title="submitordertitle"></PublicTopHeader>
    <div class="address-wrap">
      <div class="address-connect">
        <span>收货人：新红徐</span>
        <span>电话：13161822231</span>
      </div>
      <div class="address-inner">
        <span class="iconfont icon-dingwei"></span>
        <p>北京市海淀区西三旗黑泉路8号，北京市海淀区西三旗黑泉路8号，北京市海淀区西三旗黑泉路8号， </p>
      </div>
    </div>
    <MarketChaininfo class="Market" v-for="(item,index) in submitlist" :key="index">
      <span slot="Marketinfo-r" class="count">数量 :<span>{{item.selectcount}}</span></span>
    </MarketChaininfo>
    <div class="marke">
      <span>备注：<span>请尽快发货，谢谢~</span></span>
    </div>
    <div class="countAll">
      <span>合计: <span class="countAll-price">138900.12元</span> </span>
      <button class="confirm">确认</button>
    </div>
  </div>
</template>
<script>
import PublicTopHeader from '../../components/PublicTopHeader';
import MarketChaininfo from '../../components/zhangheShopCarcomponent/MarketChaininfo';

export default {
  name: 'submitorder',
  data() {
    return {
      submitordertitle: '提交订单',
      submitlist: []
    };
  },
  created() {
    this.submitlist = this.$store.getters.getcarlist;
    console.log(this.submitlist);
  },
  methods: {},
  components: {
    PublicTopHeader,
    MarketChaininfo
  }
};
</script>
<style lang="scss" scoped>
.submitorder {
  .address-wrap {
    padding: px2rem(26) 0 px2rem(30) 0;
    background-color: #fafafa;
    border-bottom: px2rem(1) solid #ccc;
    .address-connect {
      padding-left: px2rem(30);
      padding-right: px2rem(30);
      margin-bottom: px2rem(20);
      font-size: px2rem(28);
      display: flex;
      justify-content: space-between;
    }
    .address-inner {
      position: relative;
      padding: 0 px2rem(66);
      .icon-dingwei {
        position: absolute;
        left: px2rem(22);
        top: px2rem(10);
        &:before {
          font-size: px2rem(40);
        }
      }
      p {
        font-size: px2rem(26);
        line-height: px2rem(34);
      }
    }
  }
  .Market {
    padding-left: 0;
    margin-left: px2rem(28);
    padding-bottom: 0;
    border-bottom: px2rem(1) solid #ccc;
    .count {
      font-size: px2rem(30);
      position: absolute;
      right: px2rem(28);
      bottom: px2rem(46);
    }
  }
  .marke {
    font-size: px2rem(24);
    padding-left: px2rem(28);
    line-height: px2rem(80);
    height: px2rem(80);
  }
  .countAll {
    border-top: px2rem(1) solid #ccc;
    position: fixed;
    bottom: 0;
    height: px2rem(110);
    line-height: px2rem(110);
    font-size: px2rem(28);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(30);
    .countAll-price {
      color: #f00;
    }
    .confirm {
      height: px2rem(68);
      width: px2rem(170);
      background: #10903d;
      font-size: px2rem(30);
      color: #fff;
      margin-top: px2rem(18);
    }
  }
}
</style>
