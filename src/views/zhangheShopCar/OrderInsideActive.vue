<template>
  <div class="orderinsideactive">
    <PublicTopHeader :title="orderinsidetitle">
      <span slot="top-r" class="end-visit">结束拜访</span>
    </PublicTopHeader>
    <div class="shop-wrap">
      <div class="shopname">{{infolist.title}}</div>
      <div class="shop-sales">
        <span>3</span>
        <div class="shop-sales-title">本月至今销量</div>
        <div class="count">{{infolist.monthsalesvalumns}}</div>
      </div>
      <div class="average-sales">
        <span>1</span>
        <div class="average-sales-title">过往半年月均销量</div>
        <div class="count">{{infolist.halfyearmonthvalumns}}</div>
      </div>
      <div class="percent">
        <div class="percent-data">
          <span>2</span>
          <div class="percent-title">核心分销完成率</div>
          <div class="count">{{infolist.compelationrate+'%'}}</div>
        </div>
        <div class="percent-bar" ref="percenttotal">   
          <div class="percent-bar-main" ref="percentBar"></div>
        </div>
      </div>
    </div>
    <PublicTextarea :orderinsidetext="insedename"></PublicTextarea>
    <mt-button class="place-order" type="primary" plain>下单</mt-button>
    <mt-button class="shop-signed" type="primary">商店签到</mt-button>
  </div>
</template>
<script>
import PublicTopHeader from '../../components/PublicTopHeader';
import PublicTextarea from '../../components/zhangheShopCarcomponent/PublicTextarea';
import service from '../../service/service.js';
import { Toast } from 'mint-ui';
export default {
  name: 'orderinsideactive',
  data() {
    return {
      orderinsidetitle: '店内活动',
      insedename: '点击填写拜访备注~',
      id: this.$route.query.id,
      infolist: [] //接收获取的数据
    };
  },
  components: {
    PublicTopHeader,
    PublicTextarea
  },
  created() {
    this.getOrderInsideActive();
  },
  mounted() {
    // console.log(this.getBarPercent);
    // console.log(parseInt(this.infolist.compelationrate));
    // if (this.infolist.compelationrate) {
    // this.getwidth();
    // console.log(this.getwidth());
    // }
  },
  methods: {
    getOrderInsideActive() {
      service
        .getorderinsideactive(this.id)
        .then(res => {
          // console.log(res.data);
          //因为是数组，要获取第0条数据，加上索引
          this.infolist = res.data[0];
          //获取数据的时间和页面加载的时间不一定谁快谁慢。在这里去计算百分比确保一定在数据请求之后才计算
          this.getwidth();
        })
        .catch(e => {
          Toast(e);
        });
    },
    getwidth() {
      //测试获取id的途径！！！！
      // console.log(this.id);
      // console.log(this.$route.params);
      // console.log(this.$route.path);
      // console.log(window.location.href.slice());
      //注意：设置宽度用style.width,获取宽度用offsetWidth
      //判断如果数据读取过来了再计算百分比的值
      if (this.infolist.compelationrate) {
        // console.log(this.getBarPercent);
        this.$refs.percentBar.style.width = this.getBarPercent;
      }
    }
  },
  computed: {
    getBarPercent() {
      //计算进度条的百分比
      let w =
        (parseInt(this.infolist.compelationrate) / 100) *
          this.$refs.percenttotal.offsetWidth +
        'px';
      return w;
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin flexBetween() {
  display: flex;
  justify-content: space-between;
}
@mixin btnStyle() {
  height: px2rem(84);
  width: px2rem(480);
  margin-left: px2rem(135);
  font-size: px2rem(36);
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
        width: px2rem(694);
        border-radius: px2rem(12);
        background-color: red;
        .percent-bar-main {
          transition: all 1s ease;
          width: 0;
          height: px2rem(12);
          background: linear-gradient(to right, #1c59fb, #22bf65);
          border-radius: px2rem(12);
        }
      }
    }
  }
  .place-order {
    @include btnStyle();
    color: #10903d;
    border: px2rem(2) solid #10903d;
    margin-top: px2rem(169);
  }
  .shop-signed {
    @include btnStyle();
    margin-top: px2rem(52);
    margin-bottom: px2rem(77);
    background-color: #10903d;
  }
}
</style>
