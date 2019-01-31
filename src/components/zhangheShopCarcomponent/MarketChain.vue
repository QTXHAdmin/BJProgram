<template>
  <div class="top">
    <Checked class="checke"></Checked>    
    <p>新乐宝洁小仓位孙丽娜</p>
    <span class="remark">备注：<span class="iconfont icon-beizhu"></span></span>
  </div>  
</template>
<script>
// 仓库组件
import Checked from './Checked';
export default {
  name: 'top',
  components: {
    Checked
  }
};
</script>
<style lang="scss" scoped>
.top {
  height: px2rem(84);
  background-color: #fafafa;
  line-height: px2rem(84);
  padding-left: px2rem(80);
  padding-right: px2rem(28);
  display: flex;
  justify-content: space-between;
  position: relative;
  .checke {
    position: absolute;
    top: px2rem(29);
    left: px2rem(28);
  }
  p {
    font-size: px2rem(30);
    color: #000;
  }
  .remark {
    font-size: px2rem(30);
    color: #10903d;
  }
  .icon-beizhu {
    font-size: px2rem(30);
    color: #10903d;
  }
}
</style>
