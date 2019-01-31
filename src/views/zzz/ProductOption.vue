<template>
  <div class="productOption">
    <TopHead title="产品选择">

    </TopHead>
    <div class="product-wrap">
      <div class="pic"><img :src="infolistwrap.img_src" alt="" class="pic-wrap"></div>
      <div class="product-text">
        <h3 class="title">{{infolistwrap.info_title}}</h3>
        <div class="msg">
          <p class="msg-text">编码: {{infolistwrap.codeing}}</p>
          <p class="msg-text">规格: {{infolistwrap.standardNum}}盒/箱</p>
        </div>
        <div class="price">价格：<span class="price-color">{{infolistwrap.price}}</span></div>
      </div>
    </div>
    <div class="product-num">
      <div class="entrepot">
        <div class="enterpot-l">仓库</div>
        <div class="entrepot-r"><span class="entrepot-address">乌鲁木齐大西桥玉兰仓库</span><i class="icon iconfont icon-fenye-xiayiye "></i></div>
      </div>
      <div class="repertory">
        <div class="repertory-l">库存</div>
        <div class="repertory-r">{{infolistwrap.stock}}</div>
      </div>
      <div class="number">
        <div class="num-l">数量</div>
        <div class="num-r">
          <div @click="Subtract" class="subtct">-</div>
          <input class="product-number" v-model="number" />
          <div @click="Add" class="add">+</div>
        </div>
      </div>
    </div>
    <div class="button">
      <div class="cancel">取消</div>
      <div class="add-cart" @click="GetCurrtProduct">加入购物车</div>
    </div>

  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
import TopHead from '../../components/TopHead';
import service from '../../service/service.js';
export default {
  name: 'productOption',
  data() {
    return {
      number: 1,
      id: this.$route.query.id,
      infolistwrap: {}

      // infolist:''
    };
  },
  components: {
    TopHead
  },
  created: function() {
    //根据id获取对应商品的详细信息
    this.getProductMsg();
    //console.log(this.id);
  },
  methods: {
    // ...mapMutations(['AddProduct']),
    getProductMsg() {
      //console.log(this.id);
      //获取id,发送ajax请求获取对应的商品详情
      service.getProductMsg(this.id).then(res => {
        //console.log(res);
        this.infolistwrap = res.data.infolist[this.id - 1];
        //console.log(this.infolistwrap);
      });
    },
    Subtract() {
      if (this.number <= 1) {
        return (this.number = 1);
      }
      this.number--;
    },
    Add() {
      if (this.number >= this.infolistwrap.stock) {
        return (this.number = this.infolistwrap.stock);
      }
      this.number++;
    },
    GetCurrtProduct() {
      //将当前的商品存储到vuex中的购物车商品数组中
      this.infolistwrap.productNum = this.number;
      this.$store.commit('AddProduct', this.infolistwrap);
      // this.AddProduct(this.infolistwrap);
      //跳转购物车页面
      this.$router.push('/home/shoppingcar');
    }
  }
};
</script>

<style lang="scss" scoped>
.productOption {
  .product-wrap {
    height: px2rem(182);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    padding: 0 px2rem(26) 0 px2rem(28);
    .pic {
      width: px2rem(124);
      border: 1px solid #cccccc;
      height: px2rem(126);
      .pic-wrap {
        width: 100%;
        height: 100%;
      }
    }
    .product-text {
      width: px2rem(520);
      height: px2rem(126);
      .title {
        font-size: px2rem(28);
        line-height: px2rem(28);
      }
      .msg {
        display: flex;
        justify-content: space-between;
        font-size: px2rem(22);
        width: px2rem(352);
        margin-top: px2rem(14);
        .msg-text {
          font-size: px2rem(22);
        }
      }
      .price {
        font-size: px2rem(22);
        margin-top: px2rem(40);
        .price-color {
          color: red;
        }
      }
    }
  }
  .product-num {
    height: px2rem(332);
    .entrepot,
    .repertory,
    .number {
      height: px2rem(110);
    }
    border-bottom: 1px solid #cccccc;
    .entrepot {
      .entrepot-r {
        .iconfont {
          font-size: px2rem(36);
        }
      }
    }
    .entrepot,
    .repertory,
    .number {
      border-bottom: 1px solid #cccccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 px2rem(26) 0 px2rem(28);
      font-size: px2rem(30);
      .num-r {
        width: px2rem(212);
        height: px2rem(50);
        line-height: px2rem(48);
        display: flex;
        justify-content: space-between;
        .iconfont {
          margin-left: px2rem(18);
          width: px2rem(21);
          height: px2rem(38);
        }
        .subtct,
        .add {
          border: 1px solid #ccc;
          height: px2rem(48);
          width: px2rem(48);
          border-radius: px2rem(4);
          // line-height: 48;
          text-align: center;
        }
        .product-number {
          width: px2rem(90);
          height: px2rem(48);
          border-radius: px2rem(4);
          border: 1px solid #ccc;
          text-align: center;
          line-height: px2rem(48);
          font-size: px2rem(28);
        }
      }
    }
    .repertory {
      border-bottom: 1px solid #cccccc;
    }
  }
  .button {
    height: px2rem(110);
    width: 100%;
    font-size: px2rem(34);
    position: absolute;
    bottom: px2rem(0);
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-top: 1px solid #cccccc;
    .cancel {
      border-right: 1px solid #cccccc;
      flex: 1 1 px2rem(374);
      color: red;
      height: px2rem(110);
      line-height: px2rem(110);
    }
    .add-cart {
      flex: 1 1 px2rem(374);
      height: 100%;
      color: green;
      line-height: px2rem(110);
    }
  }
}
</style>
