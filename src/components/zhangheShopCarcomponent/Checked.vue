<template>
    <div class="checked">
       <div class="check">
         <span class="checkBox-inner"></span>
       </div>
    </div>
</template>
<script>
//多选单选按钮组件
export default {
  name: 'checked'
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
    background: #00a2eb;
  }
}
</style>
