<template>
<div class="number">
  <button @click="lowNum">-</button>
  <input type="number" v-model="num" value="1" ref="inpNum">
  <button @click="addNum" >+</button>
</div>
</template>
<script>
//计数组件
export default {
  name: 'number',
  data() {
    return {
      num: 1,
      counts: ''
    };
  },
  props: ['maxNum', 'count', 'changeid'],
  created() {
    if (this.count >= 1) {
      this.num = this.count;
    }
    this.$emit('getnum', this.num);
  },
  methods: {
    addNum() {
      // if (this.$store.state.num >= this.maxNum) {
      //   return (this.$store.state.num = this.maxNum);
      // }
      // this.$store.state.num++;
      // this.$store.commit('increase', this.maxNum);
      if (this.num >= this.maxNum) {
        return (this.num = this.maxNum);
      }
      this.num++;
      // this.$emit('numm', this.num);
      this.changenumid();
    },
    lowNum() {
      // if (this.$store.state.num <= 1) {
      //   return (this.$store.state.num = 1);
      // }
      // this.$store.state.num--;
      // this.$store.commit('decrease', 1);
      if (this.num <= 1) {
        return (this.num = 1);
      }
      this.num--;
      // this.$emit('numm', this.num);
      this.changenumid();
    },
    //获取从父组件中传递过来的商品id和当前组件中的num值
    changenumid() {
      let obj = {
        id: this.changeid,
        num: this.num
      };
      this.$emit('changenum', obj); //触发父组件的changenum，把当前组件点击的对应的商品id和数量值传递过去
    }
  },
  watch: {
    num: function() {
      this.$emit('getnum', this.num);
    }
  },
  mounted() {
    // console.log(this.$refs.inpNum.value);
    // this.$emit('numm', this.num);
  }
};
</script>
<style lang="scss" scoped>
.number {
  display: flex;
  justify-content: space-around;
  button {
    height: px2rem(40);
    line-height: px2rem(4);
    width: px2rem(40);
    border-color: #000;
    border-radius: px2rem(8);
    font-size: px2rem(30);
  }
  input {
    height: px2rem(40);
    width: px2rem(120);
    border-radius: px2rem(8);
    font-size: px2rem(30);
    text-align: center;
    margin: 0 px2rem(10);
    border-color: #000;
  }
}
</style>
