<template>
  <div class="outsideOfOrder">
    <tophead title="店外订单"></tophead>
    <searchinput @SearchOutSideOrder="RequestSearch"></searchinput>
    <div class="orderlist" v-for="(order,index) in  orderlist" :key="index">
      <outsidelist :title="order.listTile" :date="order.listDate" :address="order.listAddress" :url="order.url"></outsidelist>
    </div>

  </div>

</template>

<script>
import TopHead from '../../components/TopHead';
import OutsideOderList from '../../components/zzz/OutsideOderList.vue';
import SearchInput from '../../components/zzz/SearchInput.vue';
export default {
  name: "outsideOfOrder",
  data() {
    return {
      orderlist: [
        {
          listTile: '超市',
          listDate: '下单日期：1992-02-01',
          listAddress: '超市',
          url: ''
        },
        {
          listTile: '超市',
          listDate: '下单日期：1992-02-01',
          listAddress: '超市',
          url: ''
        },
      ]

    }
  },
  components: {
    tophead: TopHead,
    outsidelist: OutsideOderList,
    searchinput: SearchInput
  },
  methods: {
    RequestSearch(value) {
      //发送ajax请求获取店外订单的列表数据
      console.log(value);


    }
  }

}
</script>


<style lang="scss" scoped>
.outsideOfOrder {
}
</style>