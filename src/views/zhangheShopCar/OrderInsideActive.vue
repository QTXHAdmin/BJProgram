<template>
  <div class="orderinsideactive">
    <PublicTopHeader :title="orderinsidetitle">
      <span slot="top-r" class="end-visit">结束拜访</span>
    </PublicTopHeader>
    <div class="shop-wrap">
      <div class="shopname"></div>
      <div class="shop-sales">
        <div class="shop-sales-title">本月至今销量</div>
        <div class="count">23198</div>
      </div>
      <div class="average-sales">
        <div class="average-sales-title">过往半年月均销量</div>
        <div class="count">56660</div>
      </div>
      <div class="percent">
        <div class="percent-title">核心分销完成率</div>
        <div class="count">68%</div>
      </div>
      <div class="history"></div>
      <textarea name="" id=""></textarea>
    </div>
  </div>
</template>
<script>
import PublicTopHeader from "../../components/PublicTopHeader";
export default {
  name: 'orderinsideactive',
  data() {
    return {
      orderinsidetitle: '店内活动'
    }
  },
  components: {
    PublicTopHeader
  }
}
</script>
<style lang="scss" scoped>
.orderinsideactive {
  .end-visit {
    font-size: px2rem(25);
  }
  .shop-wrap {
    .count {
    }
    .shopname {
      height: px2rem(84);
      background-color: #fafafa;
      .shop-sales-title {
      }
    }
    .shop-sales {
      height: px2rem(110);
    }
    .average-sales {
    }
    .percent {
    }
  }
}
</style>
