<template>
  <div class="wrap">
    <PublicTopHeader :title="markettitle">
      <span slot="top-r" class="edit">编辑</span>
    </PublicTopHeader>
    <MarketChain></MarketChain>
    <MarketChaininfo v-for="(item,index) in Supermarketlist" :key="index" :title="item.info_title" :totalprice="item.amount" :src="item.img_src">
      <Checked slot="Marketinfo-l" class="checke" @getFlag="getflag" :ItemId="item.id" ></Checked>
      <Number @changenum="changenum" slot='Marketinfo-r' class="count"  :count="item.selectcount"  :changeid="item.id"></Number>
    </MarketChaininfo>
      <div class="info-foot">
         <div class="checkBox">
            <span class="checkBox-inner"></span>
         </div>
        <span>合计：<span class="info-price">{{totalAmount}}</span>元</span>
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
      Supermarketlist: [],
      totalAmount: 0,
      gtflag: true
    };
  },
  created() {
    //获取vuex中加入到购物车的商品数据
    this.Supermarketlist = this.$store.getters.getcarlist;
    // this.Supermarketlist = localStorage.getItem('carlist');
    // this.flAG();

    this.getamount();
    this.getTotalamount();
    // console.log(this.Supermarketlist);
  },
  mounted() {
    let shopobj = JSON.parse(localStorage.getItem('shopcaritem'));
    console.log(shopobj);
    this.$store.commit('getselectshoplist', shopobj);
  },
  methods: {
    // flAG() {

    // },
    // addselectitem() {

    //   // console.log(this.Supermarketlist);
    // },
    gotoSubmit() {
      this.$router.push('/home/submitorder');
    },
    //为每个对象添加一个总价的方法
    getamount() {
      console.log(111);
      this.Supermarketlist.forEach(item => {
        item.amount = item.price * item.selectcount;
      });
      console.log(this.Supermarketlist);
    },
    // 计算合计的价格
    getTotalamount() {
      let totalamount = 0;
      this.Supermarketlist.forEach(item => {
        totalamount += item.amount;
      });
      this.totalAmount = totalamount;
    },
    //点击子组件的加减方法触发changenum
    changenum(obj) {
      this.Supermarketlist.forEach(item => {
        if (item.id == obj.id) {
          //点击的那个商品数据id和从vuex中的商品id如果相同，就执行赋值操作
          item.selectcount = obj.num;
        }
      });
      console.log(this.Supermarketlist);
      this.getamount(); //此时再重新计算总价格

      this.getTotalamount();
    },
    getflag(obj) {
      this.gtflag = obj.flag;

      this.Supermarketlist.forEach(item => {
        if (item.id == obj.getids) {
          item.selected = !obj.flag;
        }
      });
    }
  },
  // mounted() {},
  // watch: {
  //   gtflag: function(oldVal) {
  //     if (this.gtflag == oldVal) {
  //       this.$store.commit('');
  //     } else {
  //     }
  //   }
  // },
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
