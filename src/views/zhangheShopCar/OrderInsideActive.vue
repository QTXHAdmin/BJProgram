<template>
  <div class="orderinsideactive">
    <PublicTopHeader :title="orderinsidetitle">
      <span slot="top-r" class="end-visit">结束拜访</span>
    </PublicTopHeader>
    <div class="shop-wrap">
      <div class="shopname">A超市保洁11</div>
      <div class="shop-sales">
        <span>3</span>
        <div class="shop-sales-title">本月至今销量</div>
        <div class="count">23198</div>
      </div>
      <div class="average-sales">
        <span>1</span>
        <div class="average-sales-title">过往半年月均销量</div>
        <div class="count">56660</div>
      </div>
      <div class="percent">
        <div class="percent-data">
          <span>2</span>
          <div class="percent-title">核心分销完成率</div>
          <div class="count">68%</div>
        </div>
        <!-- 用echarts -->
        <div class="percent-bar"></div>
      </div>
    </div>
    <!-- <div class="history-remark">历史拜访备注：</div>
    <textarea name="" id="" class="remark" placeholder="点击填写拜访备注"></textarea> -->
    <PublicTextarea :orderinsidetext="insedename"></PublicTextarea>
  </div>
</template>
<script>
import PublicTopHeader from "../../components/PublicTopHeader";
import PublicTextarea from "../../components/zhangheShopCarcomponent/PublicTextarea";
export default {
  name: 'orderinsideactive',
  data() {
    return {
      orderinsidetitle: '店内活动',
      insedename: '点击填写拜访备注~',
      orderinsidetext: ''
    }
  },
  components: {
    PublicTopHeader,
    PublicTextarea
  }
}
</script>
<style lang="scss" scoped>
@mixin flexBetween() {
  display: flex;
  justify-content: space-between;
}
$shopNameHeight: px2rem(84);
$shopSaleHeight: px2rem(110);
$percentDataHeight: px2rem(96);
.orderinsideactive {
  .end-visit {
    font-size: px2rem(25);
  }
  .shop-wrap {
    .shopname {
      padding-left: px2rem(24);
      height: $shopNameHeight;
      line-height: $shopNameHeight;
      background-color: #fafafa;
      font-size: px2rem(28);
    }
    .shop-sales,
    .average-sales,
    .percent {
      margin-left: px2rem(24);
      padding-right: px2rem(28);
      font-size: px2rem(28);
      border-bottom: px2rem(1) solid #eaeaea;
      position: relative;
      span {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .shop-sales {
      @include flexBetween();
      height: $shopSaleHeight;
      line-height: $shopSaleHeight;
      .shop-sales-title {
        margin-left: px2rem(60);
      }
    }
    .average-sales {
      @include flexBetween();
      height: $shopSaleHeight;
      line-height: $shopSaleHeight;
      .average-sales-title {
        margin-left: px2rem(60);
      }
    }
    .percent {
      border-bottom: 0;
      height: px2rem(140);
      .percent-data {
        height: $percentDataHeight;
        line-height: $percentDataHeight;
        @include flexBetween();
        .percent-title {
          margin-left: px2rem(60);
        }
      }
      .percent-bar {
        height: px2rem(12);
        border-radius: px2rem(12);
        background-color: #e4e4e4;
      }
    }
  }
  // .history-remark {
  //   height: px2rem(66);
  //   line-height: px2rem(66);
  //   padding-left: px2rem(28);
  //   font-size: px2rem(22);
  //   background-color: #fafafa;
  //   border-top: px2rem(1) solid #ebebeb;
  //   border-bottom: px2rem(1) solid #ebebeb;
  // }
  // .remark {
  //   padding-top: px2rem(16);
  //   height: px2rem(200);
  //   width: 100%;
  //   border: none;
  //   border-bottom: px2rem(1) solid #ebebeb;
  //   font-size: px2rem(20);
  //   text-indent: px2rem(28);
  // }
}
</style>
