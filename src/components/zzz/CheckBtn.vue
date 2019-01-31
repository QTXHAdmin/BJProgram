<template>
  <div class="checkbtnwrap">

    <div @click="changeTab(index)" class="checkBtn">
      <span class="checkpoint-no" :class="{'checkpoint':cliked}"></span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'checkbtnwrap',
  props: ['index'],
  data() {
    return {
      cliked: false
    };
  },
  methods: {
    changeTab(index) {
      console.log(index);
      console.log(this.cliked);
      //获取当前点击的商品id并切换样式
      this.cliked = !this.cliked;
      //将商品id发送到父级，便利数组，在点击确定时创建新数组存入选择的商品
      //全选时，将click全部都设为true
      //创建数组 ，1.加入购物车的商品，2.点击确认按钮时的商品列表
    }
  }
};
</script>

<style lang="scss" scoped>
.checkBtn {
  width: px2rem(27);
  height: px2rem(27);
  border-radius: px2rem(14);
  border: 1px solid #cccccc;
  .checkpoint-no {
    background: #ffff;
  }
  .checkpoint {
    display: inline-block;
    height: px2rem(18);
    width: px2rem(18);
    border-radius: px2rem(12);
    background: #00a2eb;
    // line-height: px2rem(26);
    // text-align: center;
    position: relative;
    top: px2rem(4);
    left: px2rem(4);
  }
}
</style>
