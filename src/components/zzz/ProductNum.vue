<template>
  <div class="productNum">
    <div @click="Subtract" class="subtct">-</div>
    <input class="product-number" v-model="number" />
    <div @click="Add" class="add">+</div>
  </div>
</template>

<script>
export default {
  name: 'productNum',
  props: ['repertory', 'totalnum'],
  data() {
    return {
      number: 1
    };
  },
  created: function() {
    this.number = this.repertory;
    console.log(this.repertory);
  },
  methods: {
    Subtract() {
      if (this.number <= 1) {
        return (this.number = 1);
      }
      this.number--;
    },
    Add() {
      if (this.number >= this.totalnum) {
        return (this.number = this.totalnum);
      }
      this.number++;
    }
  }
};
</script>

<style lang="scss" scoped>
.productNum {
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
</style>
