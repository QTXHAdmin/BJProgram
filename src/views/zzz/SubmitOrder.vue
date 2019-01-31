<template>
  <div class="submitOrder">
    <TopHead title="提交订单">

    </TopHead>
    <div class="receving-msg">
      <div class="receving-name">
        <div class="recevicePerson">收货人：辛宏旭</div>
        <div class="phone">13161822231</div>
      </div>
      <div class="receving-address">
        <img src="../../assets/svg/address.svg" class="address-icon" />
        <p class="address-text">头向北京市海淀区西三旗黑去哪路8号 系三系黑泉路宝胜官场c座南宝领地啥样公司</p>
      </div>
    </div>
    <shopCardMsg class="product-pad">
      <p slot="r" class="productNum">数量：198</p>
    </shopCardMsg>
    <Remark></Remark>
    <div class="totalNum">
      <div class="total-price">合计：<span class="textcolor">138900.12元</span></div>
      <div class="confirm">确认</div>
    </div>
  </div>
</template>

<script>
import TopHead from '../../components/TopHead';
import ShopCardMsg from '../../components/zzz/ShopCardMsg';
import Remark from '../../components/zzz/Remark';
export default {
  name: 'submitOrder',
  data() {
    return {};
  },
  components: {
    TopHead,
    ShopCardMsg,
    Remark
  }
};
</script>

<style lang="scss" scoped>
.submitOrder {
  // .product-pad {
  //   .productMsg {
  //     margin-left: 0 !important;
  //     background-color: red;
  //   }
  // }
  .receving-msg {
    height: px2rem(176);
    width: 100%;
    background-color: #fafafa;
    .receving-name {
      display: flex;
      justify-content: space-between;
      padding: 0 px2rem(32) 0 px2rem(28);
      height: px2rem(74);
      line-height: px2rem(74);
      font-size: px2rem(28);
    }
    .receving-address {
      padding: 0 px2rem(70) 0 px2rem(26);
      display: flex;
      justify-content: space-between;
      font-size: px2rem(28);
      .address-icon {
        width: px2rem(32);
        height: px2rem(32);
      }
      .address-text {
        margin-left: px2rem(16);
        font-size: px2rem(28);
        line-height: px2rem(38);
      }
    }
  }
  .productNum {
    font-size: px2rem(26);
    color: #000;
    margin-top: px2rem(6);
    position: relative;
    top: 0;
    right: px2rem(-100);
  }
  .totalNum {
    position: absolute;
    bottom: 0;
    height: px2rem(110);
    width: 100%;
    border-top: 1px solid #cccccc;

    display: flex;

    justify-content: space-between;
    align-items: center;
    padding: 0 px2rem(28) 0 px2rem(28);
    .total-price {
      font-size: px2rem(26);
      .textcolor {
        color: red;
      }
    }
    .confirm {
      width: px2rem(168);
      height: px2rem(72);
      line-height: px2rem(72);
      text-align: center;
      background-color: #10903d;
      font-size: px2rem(28);
      color: #fafafa;
    }
  }
}
.product-pad .productwrap .editmargin {
  margin-left: 0 !important;
}
</style>
