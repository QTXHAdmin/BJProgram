<template>
  <div class="order">
    <TopHead title="下单">
      <img slot="r" src="../../assets/svg/shopping.svg" alt="" class="shopping">
    </TopHead>
    <SearchInput value="点击进行搜索~">
      <div slot="r" class="search-r">
        <img class="saoma-icon" src="../../assets/svg/saoma.svg" alt="">
      </div>

    </SearchInput>
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a @click="GetProductList(item.tab)" v-for="(item,index) in tablist" :key="index" class="mui-control-item " href="#item1mobile" data-wid="tab-top-subpage-1.html">
            {{item.name}}
          </a>
        </div>
      </div>
    </div>
    <div class="order-num">
      <div class="order-num-l">
        <span class="order-nowNum">{{this.msg.topNum}}</span>/<span>{{this.msg.topTotalNum}}</span>
      </div>
      <div class="order-num-r"> <span>{{this.msg.topdes1}}</span>
        /
        <span>{{this.msg.topdes2}}</span>
        /
        <span>{{this.msg.topdes3}}</span>
        <img src="../../assets/img/shaixuan.png" class="order-type-icon">
      </div>
    </div>
    <div class="order-list" v-for=" (product,index) in productlist" @click="GetProductPage(product.id)" :key="index">
      <product-msg :title="product.info_title" :coding=" product.codeing" :specification="product.standardNum" :price="product.price" :store="product.stock" :path="product.img_src" :key="index">
      </product-msg>
    </div>
  </div>
</template>

<script>
import TopHead from '../../components/TopHead';
import SearchInput from '../../components/zzz/SearchInput';
import ProductMsg from '../../components/zzz/ProductMsg';
import '../../lib/mui/css/mui.min.css';
import mui from '../../lib/mui/js/mui.min.js';
import service from '../../service/service.js';
export default {
  name: 'order',
  data() {
    return {
      // nowNum: 1670,
      // titalNum: 3590,
      // firsttitle: '洗护',
      // secondtitle: '食品',
      // threetitle: '宝洁',
      path: require('../../assets/img/shaixuan.png'),
      tablist: [],
      // id: this.$router.query.id,
      productlist: [],
      msg: {},
      defalutname: 'quanbu'
    };
  },
  created() {
    this.getTabMsg();
    this.GetProductList(this.defalutname);
  },
  components: {
    TopHead,
    SearchInput,
    ProductMsg
  },
  methods: {
    getTabMsg() {
      //发送ajax请求获取列表数据
      service
        .getTab()
        .then(res => {
          this.tablist = res.data;
        })
        .catch(e => {
          console.log('获取失败' + e);
        });
    },
    GetProductList(name) {
      //发送当前点击的是哪个按钮获取当前按钮对应的产品列表
      service.getProduct(name).then(res => {
        console.log(res);
        //返回对应的信息和产品列表
        this.msg = res.data.msg;
        this.productlist = res.data.infolist;
        console.log(this.productlist);
      });
    },
    GetProductPage(id) {
      //跳转到商品详情页面

      this.$router.push('/home/productoption?id=' + id);
    }
  },

  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
.mui-control-item {
  touch-action: pan-y;
}
.order {
  .shopping {
    width: px2rem(48);
    height: px2rem(48);
  }
  .search-r {
    border-left: 1px solid #cccccc;

    .saoma-icon {
      width: px2rem(66);
      height: px2rem(66);
    }
  }

  .order-tab {
    height: px2rem(90);
    width: 100%;
    background: #fafafa;
    border-bottom: 1px solid #ccc;
  }
  .order-num {
    height: px2rem(88);
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    padding: 0 px2rem(28);
    font-size: px2rem(26);
    line-height: px2rem(88);
    color: #757575;
    .order-num-l {
    }
    .order-num-r {
      .order-type-icon {
        width: px2rem(36);
        height: px2rem(36);
        // background: url(../../assets/img/shaixuan.png) no-repeat;
        margin-left: px2rem(28);
      }
    }
  }
  .mui-scroll-wrapper {
    height: px2rem(80) !important;
    padding-top: px2rem(30);
    padding-bottom: px2rem(80);
    background-color: #fafafa;
    border-bottom: px2rem(1) solid #ddd;
    // line-height: px2rem(88);
    .mui-control-item {
      font-size: px2rem(28);
      position: relative;

      // padding-left: px2rem(28) !important;
      // padding-right: px2rem(28) !important;
      // padding-bottom: px2rem(30) !important;
      border-right: 1px solid #cccccc;
    }
  }
}
</style>
