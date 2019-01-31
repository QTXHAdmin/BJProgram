<template>
  <div class="wrap">
    <PublicTopHeader :title="markettitle">
      <span slot="top-r" class="edit">编辑</span>
    </PublicTopHeader>
    <MarketChain></MarketChain>
    <MarketChaininfo v-for="(item,index) in Supermarketlist" :key="index" :title="item.info_title" :totalprice="item.amount" :src="item.img_src">
      <Checked slot="Marketinfo-l" class="checke"></Checked>
      <Number slot='Marketinfo-r' class="count"  :count="item.selectcount"></Number>
    </MarketChaininfo>
      <div class="info-foot">
         <div class="checkBox">
            <span class="checkBox-inner"></span>
         </div>
        <span>合计：<span class="info-price">138900.15</span>元</span>
        <button class="confirm" @click="gotoSubmit">确认</button>
      </div>
    </div>  
</template>
<script>
import PublicTopHeader from '../../components/PublicTopHeader';
import MarketChain from '../../components/zhangheShopCarcomponent/MarketChain';
import MarketChaininfo from '../../components/zhangheShopCarcomponent/MarketChaininfo';
import Checked from '../../components/zhangheShopCarcomponent/Checked';
import Number from '../../components/zhangheShopCarcomponent/Number';
export default {
  name: 'wrap',
  data() {
    return {
      markettitle: '保定惠友超市连锁',
      Supermarketlist: []
    };
  },
  created() {
    this.Supermarketlist = this.$store.getters.getcarlist;
  },
  methods: {
    gotoSubmit() {
      this.$router.push('/home/submitorder');
    }
  },
  mounted() {},
  components: {
    PublicTopHeader,
    Checked,
    Number,
    MarketChain,
    MarketChaininfo
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  .edit {
    font-size: px2rem(30);
  }
  .checke {
    position: absolute;
    top: px2rem(76);
    left: px2rem(28);
  }
  .count {
    position: absolute;
    bottom: px2rem(23);
    right: px2rem(28);
  }
  .info-foot {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: px2rem(110);
    line-height: px2rem(110);
    display: flex;
    justify-content: space-between;
    font-size: px2rem(30);
    padding-left: px2rem(180);
    border-top: px2rem(1) solid #ccc;
    padding-right: px2rem(27);
    background-color: #fff;
    .checkBox {
      position: absolute;
      top: px2rem(42);
      left: px2rem(28);
      border-radius: 50%;
      border: px2rem(1) solid #333;
      height: px2rem(26);
      line-height: px2rem(26);
      width: px2rem(26);
      text-align: center;
      .checkBox-inner {
        border-radius: 50%;
        margin-bottom: px2rem(5);
        height: px2rem(16);
        width: px2rem(16);
        display: inline-block;
        background: #00a2eb;
      }
    }
    .info-price {
      color: #ff0505;
    }
    .confirm {
      font-size: px2rem(30);
      margin-top: px2rem(20);
      background: #109030;
      height: px2rem(70);
      width: px2rem(168);
      color: #fff;
    }
  }
}
</style>
