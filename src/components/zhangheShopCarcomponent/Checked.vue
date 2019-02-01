<template>
    <div class="checked">
       <div class="check">
         <span class="checkBox-inner" :class="{'active':flag}" @click="ToggleBtn" :v-model="flag"></span>
       </div>
    </div>
</template>
<script>
//多选单选按钮组件
export default {
  name: 'checked',
  data() {
    return {
      // flag: false
      flag: this.$store.getters.getSelectShop.selected
    };
  },
  props: ['getid', 'ItemId'],
  created() {
    // this.$emit('getFlag', this.flag);
    // this.ToggleBtn();
  },
  methods: {
    ToggleBtn() {
      let obj = {
        flag: this.flag,
        getids: this.ItemId
      };
      this.$emit('getFlag', obj);
      this.flag = !this.flag;
    }
  }
};
</script>
<style lang="scss" scoped>
.check {
  border-radius: 50%;
  border: px2rem(1) solid #333;
  height: px2rem(26);
  line-height: px2rem(26);
  width: px2rem(26);
  text-align: center;
  .checkBox-inner {
    border-radius: 50%;
    margin-top: px2rem(5);
    height: px2rem(16);
    width: px2rem(16);
    display: inline-block;
    background: #fff;
  }
  .active {
    background-color: #00a2eb;
  }
}
</style>
