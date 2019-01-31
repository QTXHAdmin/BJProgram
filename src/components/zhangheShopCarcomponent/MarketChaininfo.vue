<template>
      <div class="Marketinfo">
        <slot name="Marketinfo-l"></slot>
         <div class="order-list-img">
              <!-- 图片懒加载 -->
              <!-- <img :v-lazy="src"> -->
              <img :src="src" alt="">
            </div>
            <div class="order-list-info">
              <h4>{{title}}</h4>
              <p class="count-info">
                <span>选中仓库：7041-新宝孙丽娜</span>
              </p>
              <p class="price">
                <span>总价：<span class="num">{{totalprice}}</span></span>
              </p>
            </div>
            <!-- <Number class="count"></Number> -->
            <slot name="Marketinfo-r"></slot>
      </div>
</template>
<script>
//数据展示组件
export default {
  name: 'Marketinfo',
  data() {
    return {};
  },
  props: ['title', 'totalprice', 'src'],
  components: {}
};
</script>
<style lang="scss" scoped>
.Marketinfo {
  height: px2rem(180);
  padding-left: px2rem(80);
  padding-bottom: px2rem(22);
  padding-top: px2rem(20);
  display: flex;
  position: relative;
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
</style>
