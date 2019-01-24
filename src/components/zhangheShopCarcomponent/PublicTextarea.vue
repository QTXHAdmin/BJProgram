<template>
  <div class="publictextarea">
    <div class="history-remark">历史拜访备注：</div>
    <textarea name="" id="" class="remark" :placeholder="insedetitle"></textarea>
  </div>
</template>
<script>
export default {
  name: "publictextarea",
  data() {
    return {
      placeholder: ''
    }
  },
  props: ['insedetitle']
}
</script>
<style lang="scss" scoped>
.history-remark {
  height: px2rem(66);
  line-height: px2rem(66);
  padding-left: px2rem(28);
  font-size: px2rem(22);
  background-color: #fafafa;
  border-top: px2rem(1) solid #ebebeb;
  border-bottom: px2rem(1) solid #ebebeb;
}
.remark {
  padding-top: px2rem(16);
  height: px2rem(200);
  width: 100%;
  border: none;
  border-bottom: px2rem(1) solid #ebebeb;
  font-size: px2rem(20);
  text-indent: px2rem(28);
}
</style>


