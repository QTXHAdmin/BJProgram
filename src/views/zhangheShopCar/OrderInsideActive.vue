<template>
  <div class="orderinsideactive">

    <PublicTopHeader :title="orderinsidetitle">
      <span slot="top-r" class="end-visit">结束拜访</span>
    </PublicTopHeader>

  </div>
</template>
<script>
import PublicTopHeader from "../../components/PublicTopHeader";
export default {
  name: 'orderinsideactive',
  data() {
    return {
      orderinsidetitle: '店内活动'
    }
  },
  components: {
    PublicTopHeader
  }
}
</script>
<style lang="scss" scoped>
.end-visit {
  font-size: px2rem(20);
}
</style>
