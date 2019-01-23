<template>
  <div class="home">
    <tophead title="SFA">
      <router-link to="/user" span slot="r" class="icon iconfont icon-yonghu">
      </router-link>
    </tophead>
    <div class="main-bd">
      <div class="data-wrap">{{getYearMonth}}</div>
      <div class="progress-wrap">
        <mp title="当前月进度" :val="getDayOfMonth" :percent="true"></mp>
        <mp title="月销售完成度" :val="mounthSealsPercent" :percent="true"></mp>
        <mp title="有效商店数" :val="shops" :percent="false"></mp>
      </div>
    </div>
    <div class="main-nav">
      <div class="nav-cell" v-for="i in 9" :key="i">
        <template v-if="i <= menuList.length">
          <menu-cell :url="menuList[i-1].url" :imgUrl="menuList[i-1].imgUrl" :menuName="menuList[i-1].menuName"></menu-cell>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from '../components/TopHead.vue';
import Progress from '../components/Progress.vue';
import MenuCell from '../components/MenuCell.vue';

const menuList = [
  {
    menuName: "公司通告",
    imgUrl: require("@/assets/img/ggtz.png"),
    url: "/notice"
  },
  {
    menuName: "进店拜访",
    imgUrl: require("@/assets/img/jdbf.png"),
    url: "/visitshop"
  },
  {
    menuName: "电话订单",
    imgUrl: require("@/assets/img/dhdd.png"),
    url: "/phoneorder"
  },
  {
    menuName: "订单状态",
    imgUrl: require("@/assets/img/ddzt.png"),
    url: "/orders"
  },
  {
    menuName: "培训资料",
    imgUrl: require("@/assets/img/pxzl.png"),
    url: "/training"
  },
  {
    menuName: "消息中心",
    imgUrl: require("@/assets/img/xxzx.png"),
    url: "/message"
  },
  {
    menuName: "新增门店",
    imgUrl: require("@/assets/img/xzmd.png"),
    url: "/addedshop"
  },
  {
    menuName: "同步数据",
    imgUrl: require("@/assets/img/sjtb.png"),
    url: "/asyncdata"
  },
  {
    menuName: "电话订单(zzz)",
    imgUrl: require("@/assets/img/dhdd.png"),
    url: "/out"
  },
];
export default {
  name: "home",
  data() {
    return {
      mounthSealsPercent: 0,
      shops: 0,
      menuList
    }
  },
  components: {
    tophead: TopHead,
    mp: Progress,
    menuCell: MenuCell
  },
  methods: {

  },
  computed: {
    getYearMonth() {
      let t = new Date();
      return `${t.getFullYear()}年${t.getMonth() + 1}月`;
    },
    getDayOfMonth() {
      let t = new Date();
      return parseInt((t.getDate() / 30) * 100);
    }
  }
};
</script>
<style lang="scss" scop>
.main-bd {
  height: px2rem(370);
  width: 100%;
  .data-wrap {
    height: px2rem(90);
    text-align: center;
    font-size: px2rem(28);
    line-height: px2rem(100);
  }
  .progress-wrap {
    display: flex;
    justify-content: space-around;
  }
}
.main-nav {
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  align-content: stretch;
  align-items: stretch;
  border-top: 1px solid #cccccc;
  .nav-cell {
    padding: px2rem(72) px2rem(68) px2rem(76);
    border-bottom: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    flex: 1 1 30%;
  }
  .nav-cell:nth-child(3n) {
    border-right: none;
  }
}
</style>
