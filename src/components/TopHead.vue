<template>
  <div class="tophead">
    <div @click="BackToPage" class="th-l"><i class="icon iconfont icon-houtui"></i></div>
    <div class="th-title">{{title}}</div>
    <div class="th-r">
      <slot name="r"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tophead',
  props: ['title', 'backurl'],
  data() {
    return {};
  },
  methods: {
    BackToPage() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.tophead {
  display: flex;
  justify-content: space-between;
  height: px2rem(116);
  width: 100%;
  background-color: #26c65e;
  line-height: px2rem(116);
  font-size: px2rem(34);
  color: #ffff;
  .th-l {
    padding-left: px2rem(20);
  }
  .th-r {
    padding-right: px2rem(20);
  }
  .icon::before {
    font-size: px2rem(40);
  }
}
</style>
