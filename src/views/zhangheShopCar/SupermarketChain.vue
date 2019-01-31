<template>
  <div class="supermarket">
      <PublicTopHeader :title="markettitle">
        <span slot="top-r" class="edit">编辑</span>
      </PublicTopHeader>
      <div class="inP">
        <template	v-if="flag">
        <p>新乐宝洁小仓位孙丽娜</p>
        </template>
        <template v-else>
        <input type="text" name="" id="" class="remark-inp">
        </template>
        <span class="remark">备注</span>
        <span class="iconfont icon-beizhu" @click="remark"></span>
      </div>
      <div class="info">
         <!-- <div class="info-selectBtn">
          <span class="selectBtn-inner" :class="{}"></span>
        </div> -->
         <div class="order-list-img">
              <!-- 图片懒加载 -->
              <!-- <img v-lazy="productinfo.img_src"> -->
              <!-- <img :src="item.img_src" alt=""> -->
            </div>
            <div class="order-list-info">
              <h4>护舒宝轻柔</h4>
              <p class="count-info">
                <span>选中仓库：7041-新宝孙丽娜</span>
                <span class="standard"></span>
              </p>
              <p class="price">
                <span>价格：<span class="num"></span></span>
              </p>
            </div>
            <Number class="count"></Number>
      </div>
      <div class="inP">
        <div class="selectBtn">
          <span class="selectBtn-inner" :class="{}"></span>
        </div>
        <template	v-if="flag">
        <p>新乐宝洁小仓位孙丽娜</p>
        </template>
        <template v-else>
        <input type="text" name="" id="" class="remark-inp">
        </template>
        <span class="remark">备注</span>
        <span class="iconfont icon-beizhu" @click="remark"></span>
      </div>
      <!-- 列表信息 -->
       <div class="info">
         <!-- <div class="info-selectBtn">
          <span class="selectBtn-inner" :class="{}"></span>
        </div> -->
         <div class="order-list-img">
              <!-- 图片懒加载 -->
              <!-- <img v-lazy="productinfo.img_src"> -->
              <!-- <img :src="item.img_src" alt=""> -->
            </div>
            <div class="order-list-info">
              <h4>护舒宝轻柔</h4>
              <p class="count-info">
                <span>选中仓库：7041-新宝孙丽娜</span>
                <span class="standard"></span>
              </p>
              <p class="price">
                <span>价格：<span class="num"></span></span>
              </p>
            </div>
            <Number class="count"></Number>
      </div>
       <div class="info">
         <!-- <div class="info-selectBtn">
          <span class="selectBtn-inner" :class="{}"></span>
        </div> -->
         <div class="order-list-img">
              <!-- 图片懒加载 -->
              <!-- <img v-lazy="productinfo.img_src"> -->
              <!-- <img :src="item.img_src" alt=""> -->
            </div>
            <div class="order-list-info">
              <h4>护舒宝轻柔</h4>
              <p class="count-info">
                <span>选中仓库：7041-新宝孙丽娜</span>
                <span class="standard"></span>
              </p>
              <p class="price">
                <span>价格：<span class="num"></span></span>
              </p>
            </div>
            <Number class="count"></Number>
      </div>
      <div class="info-foot">
         <!-- <div class="selectBtn">
          <span class="selectBtn-inner" :class="{}"></span>
        </div> -->
        <span>合计：<span class="info-price">138900.15</span>元</span>
        <button class="confirm">确认</button>
      </div>
  </div>  
</template>
<script>
import PublicTopHeader from '../../components/PublicTopHeader';
import Number from '../../components/zhangheShopCarcomponent/Number';
export default {
  name: 'supermarket',
  data() {
    return {
      markettitle: '保定惠友超市连锁',
      flag: true
    };
  },
  methods: {
    remark() {
      this.flag = !this.flag;
    }
  },
  components: {
    PublicTopHeader,
    Number
  }
};
</script>
<style lang="scss" scoped>
.supermarket {
  .edit {
    font-size: px2rem(28);
  }
  .inP {
    background: #fafafa;
    padding-left: px2rem(80);
    padding-right: px2rem(80);
    height: px2rem(84);
    line-height: px2rem(84);
    display: flex;
    justify-content: space-between;
    position: relative;
    font-size: px2rem(28);
    p {
      font-size: px2rem(28);
      color: #000;
    }
    .remark-inp {
      border: 0;
      width: px2rem(300);
      height: px2rem(50);
      line-height: px2rem(50);
      margin-top: px2rem(17);
      border-radius: px2rem(42);
    }
    .selectBtn {
      position: absolute;
      top: 0;
      left: 0;
      border: px2rem(1) solid #939393;
      border-radius: 50%;
      width: px2rem(25);
      height: px2rem(25);
      margin-top: px2rem(30);
      margin-left: px2rem(28);
      line-height: px2rem(18);
      text-align: center;
      .selectBtn-inner {
        // position: absolute;
        display: inline-block;
        height: px2rem(16);
        width: px2rem(16);
        background-color: #00a2eb;
        border-radius: 50%;
      }
    }
    span {
      color: #10903d;
    }
    .icon-beizhu {
      position: absolute;
      right: px2rem(28);
      top: 0;
      font-size: px2rem(28);
    }
  }
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
  .info {
    padding-left: px2rem(80);
    padding-bottom: px2rem(22);
    padding-top: px2rem(20);
    display: flex;
    position: relative;
    justify-content: space-between;
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
    .count {
      position: absolute;
      bottom: px2rem(23);
      right: px2rem(28);
    }
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
