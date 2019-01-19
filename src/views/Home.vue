<template>
  <div class="home">
<<<<<<< HEAD
    <PublicTopHeader :title="homeTitle">
      <!-- 头部组件的右侧插槽 -->
      <span slot="top-r" class="iconfont icon-touxiang"></span>
    </PublicTopHeader>

=======
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> first commit
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
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
=======
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
>>>>>>> first commit
