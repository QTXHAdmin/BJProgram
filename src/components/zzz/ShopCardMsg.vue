<template>
  <div class="shopCardMsg">
    <div class="productwrap">
      <slot name="l">
        <!-- <CheckBtn></CheckBtn> -->
      </slot>

      <!-- <div class="selection">
        <div class="checkBtn">
          <span class="checkpoint"></span>
        </div>
      </div> -->
      <div class="productMsg editmargin">
        <div class="pic">
          <img :src="src" alt="" class="pic-wrap">
        </div>
        <div class="wrap">
          <h3 class="title">{{title}}</h3>
          <p class="select-warehouse">选中仓库：{{warehouse}}</p>
          <div class="price-wrap">
            <div class="price">价格：<span>{{price}}元</span></div>
            <div class="product-num">
              <!-- <div @click="Subtract" class="subtct">-</div>
              <input class="product-number" v-model="number" />
              <div @click="Add" class="add">+</div> -->
              <slot name="r">
                <!-- <product-num repertory="totalNum"></product-num> -->
              </slot>

            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
// import CheckBtn from '../zzz/CheckBtn';
// import ProductNum from '../zzz/ProductNum';

export default {
  name: 'shopCardMsg',
  props: ['src', 'title', 'warehouse', 'price'],
  data() {
    return {
      number: 1
    };
  },
  components: {
    // CheckBtn,
    // ProductNum
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.shopCardMsg {
  .productwrap {
    height: px2rem(180);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 px2rem(26) 0 px2rem(28);
    border: 1px solid #cccccc;
    // .selection {
    //   width: px2rem(26);
    //   height: px2rem(26);
    //   border-radius: px2rem(14);
    //   border: 1px solid #cccccc;
    //   .checkBtn {
    //     height: px2rem(20);
    //     width: px2rem(20);
    //     border-radius: px2rem(12);
    //     background: #00a2eb;
    //     // line-height: px2rem(26);
    //     // text-align: center;
    //     position: relative;
    //     top: px2rem(2);
    //     left: px2rem(2);
    //   }
    // }
    .productMsg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: px2rem(24);
      width: px2rem(646);

      .pic {
        width: px2rem(126);
        height: px2rem(126);
        border: 1px solid #cccccc;
        .pic-wrap {
          width: px2rem(126);
          height: px2rem(126);
          background-size: conver;
        }
      }
      .wrap {
        width: px2rem(492);
        .title {
          font-size: px2rem(28);
          line-height: px2rem(28);
        }
        .select-warehouse {
          font-size: px2rem(24);
          color: #757575;
          margin-top: px2rem(16);
        }
        .price-wrap {
          display: flex;
          justify-content: space-between;
          font-size: px2rem(22);
          height: px2rem(68);
          .price {
            margin-top: px2rem(38);
          }
          .product-num {
            width: px2rem(212);
            height: px2rem(50);
            line-height: px2rem(48);
            margin-top: px2rem(20);
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
      }
    }
  }
}
</style>
