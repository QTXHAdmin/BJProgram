<template>
  <div class="product">
    <PublicTopHeader :title="producttitle"></PublicTopHeader>
    <div class="order-list">
        <ul>
          <li>
            <div class="order-list-img">
              <!-- 图片懒加载 -->
              <img v-lazy="productinfo.img_src">
              <!-- <img :src="item.img_src" alt=""> -->
            </div>
            <div class="order-list-info">
              <h4>{{productinfo.info_title}}</h4>
              <p class="count-info">
                <span>编码：{{productinfo.codeing}}</span>
                <span class="standard">规格：{{productinfo.standardNum}}盒/箱</span>
              </p>
              <p class="price">
                <span>价格：<span class="num">{{productinfo.price}}</span></span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="product-wrap">
        <ul>
          <li>
            <span>仓库</span>
            <span class="repertory">乌鲁木齐大西桥玉兰仓库</span>
            <span class="iconfont icon-youjiantou"></span>    
          </li>
          <li>
            <span>库存</span>
            <span>{{productinfo.stock}}</span>
          </li>
          <li>
            <span>数量</span>
            <Number class="number" @getnum="getNum" :maxNum="stockc"></Number>
          </li>
        </ul>
      </div>
      <div class="button-wrap">
        <button class="cancelBtn" @click="goBack">取消</button>
        <button class="shopCarBtn" @click="gotoSuperMarket">加入购物车</button>
      </div>
  </div>
</template>
<script>
import PublicTopHeader from '../../components/PublicTopHeader';
import Number from '../../components/zhangheShopCarcomponent/Number';
import service from '../../service/service.js';
export default {
  name: 'product',
  data() {
    return {
      producttitle: '产品选择',
      id: this.$route.query.id,
      productinfo: {},
      stockc: 0,
      num: 0
      // selectcount: 1
    };
  },
  created() {
    this.getProDuctInfo();
  },
  methods: {
    getProDuctInfo() {
      service.getproductinfo().then(res => {
        // console.log(res.data.infolist[this.id - 1]);
        this.productinfo = res.data.infolist[this.id - 1];
        this.stockc = this.productinfo.stock;
        console.log(this.stockc);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    // getSelectedCount(count) {
    //   this.selectedCount = count;
    //   console.log(this.selectedCount);
    // },
    getNum(numr) {
      this.num = numr;
    },
    gotoSuperMarket() {
      this.productinfo.selectcount = this.num;
      console.log(this.productinfo.selectcount);
      // let prodInfo = {
      //   id: this.id - 1,
      //   count: this.selectedCount,
      //   price: this.productinfo.price
      // };\
      this.productinfo.selected = true;
      this.$store.commit('addToCar', this.productinfo);
      localStorage.setItem('shopcaritem', JSON.stringify(this.productinfo));
      // console.log(this.productinfo)
      this.$router.push('/home/supermarketchain2');
    }
  },
  components: {
    PublicTopHeader,
    Number
  }
};
</script>
<style lang="scss" scoped>
.product {
  .order-list {
    padding-left: px2rem(28);
    border-bottom: px2rem(1) solid #ccc;
    li {
      padding-bottom: px2rem(22);
      padding-top: px2rem(20);
      display: flex;
      justify-content: space-between;
      .order-list-img {
        height: px2rem(122);
        width: px2rem(166);
        border: px2rem(1) solid #ddd;
        img {
          width: 100%;
          height: 100%;
        }
        image[lazy='loading'] {
          width: 40px;
          height: 300px;
          margin: auto;
        }
      }
      .order-list-info {
        margin-left: px2rem(28);
        margin-right: px2rem(52);
        width: 100%;
        h4 {
          font-size: px2rem(28);
          font-weight: normal;
          margin-bottom: px2rem(12);
        }
        .count-info {
          font-size: px2rem(20);
          margin-bottom: px2rem(40);
          .standard {
            margin-left: px2rem(50);
          }
        }
        .price {
          position: relative;
          font-size: px2rem(20);
          display: flex;
          justify-content: space-between;
          .num {
            font-size: px2rem(28);
            color: red;
          }
        }
      }
    }
  }
  .product-wrap {
    position: relative;
    .repertory {
      margin-right: px2rem(38);
    }
    .icon-youjiantou {
      position: absolute;
      right: px2rem(20);
      &:before {
        font-size: px2rem(40);
      }
    }
    padding: 0 px2rem(28);
    li {
      display: flex;
      justify-content: space-between;
      font-size: px2rem(30);
      height: px2rem(110);
      line-height: px2rem(110);
      border-bottom: px2rem(1) solid #f3f3f3;
    }
    .number {
      margin-top: px2rem(30);
    }
  }
  .button-wrap {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-top: px2rem(1) solid #ddd;
    button {
      height: px2rem(109);
      width: 50%;
      border: 0;
      font-size: px2rem(30);
    }
    .cancelBtn {
      border-right: px2rem(1) solid #ddd;
      color: #f00;
    }
    .shopCarBtn {
      color: #10903d;
    }
  }
}
</style>
