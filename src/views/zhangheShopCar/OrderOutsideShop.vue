<template>
  <div class="orderoutsideshop">
    <div class="topheader">
      <PublicTopHeader :title="orderoutsidetitle"></PublicTopHeader>
    </div>
    <Search :orderoutsidesearch="shopname"></Search>
    <div class="shoplist">
      <ul>
        <li class="shoplist-item" v-for="(item,index) in shopnamelist" :key="index">
          <div class="shoplist-item-l">
            <h3>{{item.name}}</h3>
            <p class="order-date">下单日期：{{item.order_time | dateFormat}}</p>
            <p class="order-address">{{item.address}}</p>
          </div>
          <div class="shoplist-item-r">
            <span class="iconfont icon-fenye-xiayiye"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import PublicTopHeader from "../../components/PublicTopHeader";
import Search from "../../components/zhangheShopCarcomponent/Search";
import service from "../../service/service.js";
import { Toast } from "mint-ui";
export default {
  name: 'orderoutsideshop',
  data() {
    return {
      orderoutsidetitle: '店外订单',
      shopname: '门店名称编码检索~',
      orderoutsidesearch: '',
      shopnamelist: []//获取所有商店的数据
    }
  },
  created() {
    this.getShopInfo();
  },
  methods: {
    getShopInfo() {
      service.getshopinfo()
        .then(res => {
          if (res.data.code === 1) {
            this.shopnamelist = res.data.message;
            Toast('获取成功');
          } else {
            Toast('获取失败');
          }
        })
        .catch(e => {
          Toast('获取异常');
        })
    }
  },
  components: {
    PublicTopHeader,
    Search
  }
}
</script>
<style lang="scss" scoped>
.orderoutsideshop {
  .shoplist {
    .shoplist-item {
      padding-top: px2rem(30);
      margin-left: px2rem(26);
      height: px2rem(145);
      // background-color: red;
      display: flex;
      justify-content: space-between;
      border-bottom: px2rem(1) solid #ccc;
      .shoplist-item-l {
        h3 {
          font-weight: normal;
          font-size: px2rem(26);
        }
        p {
          font-size: px2rem(24);
          color: #757575;
        }
      }
      .shoplist-item-r {
        line-height: px2rem(95);
        .icon-fenye-xiayiye {
          &:before {
            font-size: px2rem(36);
          }
        }
      }
    }
  }
}
</style>


