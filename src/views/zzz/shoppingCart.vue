<template>
  <div class="shopping-cart">
    <TopHead title="保定惠友超市连锁">
      <span slot="r">编辑</span>
    </TopHead>
    <shopCardMsg v-for="(item,index) in productList" :src="item.img_src" :title="item.info_title" :warehouse="warehouse" :price="item.price" :key="index">
      <CheckBtn slot="l" :index="item.id"></CheckBtn>
      <ProductNum slot="r" :repertory="item.productNum" :totalnum="item.stock"></ProductNum>

    </shopCardMsg>
    <div class="total-price">
      <div class="total-price-l">
        <div class="total">
          <check-btn></check-btn>
          <span class="totalSelect">全选</span>
        </div>
        <div class="total-price-num">
          <span class="total-text">合计：</span>
          <span class="total-color">1389000.12元</span>
        </div>

      </div>
      <div class="total-price-r">

        <div class="confirm-btn" @click="SubmitShoopingCart">确认</div>
      </div>

    </div>

  </div>
</template>

<script>
import TopHead from '../../components/TopHead';
import ShopCardMsg from '../../components/zzz/ShopCardMsg';
import CheckBtn from '../../components/zzz/CheckBtn';

import ProductNum from '../../components/zzz/ProductNum';
// import service from '../../service/service.js';

export default {
  name: 'shopping-cart',
  data() {
    return {
      productList: [],
      warehouse: '7041-新宝孙俪那'
      // cliked: false,
    };
  },
  components: {
    TopHead,
    ShopCardMsg,
    CheckBtn,
    ProductNum
  },
  created: function() {
    this.GetProductList();
  },
  methods: {
    GetProductList() {
      //点击加入购物车时需要将当前商品存到vueX中数组进行保存
      // console.log(mapState);
      //获取vuex中存储的商品
      console.log(this.$store.getters.getShoppingCart);
      this.productList = this.$store.getters.getShoppingCart;
    },
    SubmitShoopingCart() {
      //存储当前的购物车里面的数据到vueX中
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.total-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: px2rem(110);

  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #cccccc;
  padding: 0 px2rem(26) 0 px2rem(26);
  .total-price-l {
    width: px2rem(406);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .total {
      display: flex;
      justify-content: space-between;
      width: px2rem(90);
      font-size: px2rem(24);

      .totalSelect {
        display: inline-block;
        margin-left: px2rem(14);
        line-height: px2rem(26);
      }
    }
    .total-price-num {
      line-height: px2rem(100);
      font-size: px2rem(24);
      .total-color {
        color: red;
      }
    }
  }
  .total-price-r {
    .confirm-btn {
      width: px2rem(168);
      height: px2rem(70);
      border-radius: px2rem(6);
      font-size: px2rem(30);
      color: #ffffff;
      background-color: #10903d;
      line-height: px2rem(70);
      text-align: center;
    }
  }
}
</style>
