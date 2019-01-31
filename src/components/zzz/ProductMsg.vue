<template>
  <div class="productMsg">
    <div class="productMsg-l">
      <img :src="path" alt="" class="product-pic">
    </div>
    <div class="productMsg-r">
      <h3 class="product-title">{{title}}</h3>
      <div class="num">
        <P class="coding">编码：{{coding}}</P>
        <p class="guige">规格：{{specification}}盒/箱</p>
      </div>
      <div class="priceMsg">
        <p class="price">价格：<span class="price-color">{{price}}</span></p>
        <div class="store">
          <p class="store-num">库存：{{store}}箱</p>
          <img src="../../assets/img/refresh.png" alt="" class="refresh-icon">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'peoductMsg',
  props: ['title', 'coding', 'specification', 'price', 'store', 'path'],

  data() {
    return {
      id: this.$route.query.id
    };
  }
};
</script>

<style lang='scss' scoped>
.productMsg {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  padding: px2rem(18) px2rem(28);
  height: px2rem(169);
  border-bottom: 1px solid #cccccc;
  .productMsg-l {
    width: px2rem(152);
    height: px2rem(124);
    .product-pic {
      width: px2rem(124);
      height: px2rem(124);
      border: 1px solid #cccccc;
      background: red;
      background-size: cover;
    }
  }
  .productMsg-r {
    width: px2rem(545);
    .product-title {
      font-size: px2rem(26);
      line-height: px2rem(26);
    }
    .num {
      width: px2rem(356);

      display: flex;
      font-size: px2rem(22);
      justify-content: space-between;
      line-height: px2rem(22);
      margin-top: px2rem(12);
      color: #757575;
      .coding {
        font-size: px2rem(22);
      }
      .guige {
        font-size: px2rem(22);
      }
    }
    .priceMsg {
      display: flex;
      justify-content: space-between;
      width: px2rem(480);
      font-size: px2rem(22);
      color: #757575;
      margin-top: px2rem(44);
      .price-color {
        color: red;
      }
      .price {
        font-size: px2rem(22);
      }
      .store {
        display: flex;
        justify-content: space-between;
        .store-num {
          font-size: px2rem(22);
        }
        .refresh-icon {
          width: px2rem(48);
          height: px2rem(38);
          margin-left: px2rem(22);
          position: relative;
          bottom: px2rem(10);
        }
      }
    }
  }
}
</style>
