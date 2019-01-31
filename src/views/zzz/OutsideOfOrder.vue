<template>
  <div class="outsideOfOrder">
    <tophead title="店外订单"></tophead>
    <searchinput value="点击进行搜索" @SearchOutSideOrder="RequestSearch"></searchinput>
    <div class="orderlist" v-for="(order,index) in  orderlist" :key="index">
      <outsidelist :title="order.name" :date="order.order_time | dateFormat" :address="order.address" :url="order.id"></outsidelist>
    </div>

  </div>

</template>

<script>
import TopHead from '../../components/TopHead';
import OutsideOderList from '../../components/zzz/OutsideOderList.vue';
import SearchInput from '../../components/zzz/SearchInput.vue';
import service from '../../service/service.js';
import { Toast } from 'mint-ui';
export default {
  name: 'outsideOfOrder',
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
        }
      ]
    };
  },
  components: {
    tophead: TopHead,
    outsidelist: OutsideOderList,
    searchinput: SearchInput
  },
  created: function() {
    this.ShowShop();
  },
  methods: {
    RequestSearch() {
      //发送ajax请求获取店外订单的列表数据
      // console.log(value);
    },
    ShowShop() {
      service
        .getshopinfo()
        .then(res => {
          this.orderlist = res.data;
        })
        .catch(e => {
          console.log(e);
          Toast('从服务器端获取店铺信息失败');
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.outsideOfOrder {
}
</style>
