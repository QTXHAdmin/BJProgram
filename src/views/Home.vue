<template>
  <div class="home">
    <PublicTopHeader :title="homeTitle">
      <!-- 头部组件的右侧插槽 -->
      <span slot="top-r" class="iconfont icon-touxiang"></span>
    </PublicTopHeader>

  </div>
</template>

<script>
// @ is an alias to /src
import PublicTopHeader from "../components/PublicTopHeader";
export default {
  name: "home",
  data() {
    return {
      homeTitle: 'SFA'
    }
  },
  components: {
    PublicTopHeader
  }
};
</script>
<style lang="scss" scoped>
.icon-touxiang {
  &:before {
    font-size: $iconsize;
  }
}
</style>
