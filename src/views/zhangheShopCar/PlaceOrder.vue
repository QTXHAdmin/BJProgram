<template>
  <div class="placeorder">
    <PublicTopHeader :title="placeordertitle">
      <span slot="top-r" class="iconfont icon-yonghu"></span>
    </PublicTopHeader>
    <Search :srchplaceholder='shopitem'>
      <span slot="search-r" class="iconfont icon-user"></span>
    </Search>
    <!-- 滑动列表 -->
      	<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 1 ? 'mui-active':'']"  @tap="getInFo(item.tab)" data-wid="tab-top-subpage-1.html" v-for="(item,index) of btnname" :key="index">
							{{item.name}}
              <span class="line"></span>
						</a>
				</div>
			</div>
    </div>
      <div class="info"> 
        <div class="info-l">{{listdes.topNum+'/'+listdes.topTotalNum}}</div>
        <div class="info-r">
          {{listdes.topdes1+' / '+listdes.topdes2+' / '+listdes.topdes3}}
          <span class="iconfont icon-fenlei"></span>
        </div>
      </div> 
      <!-- 列表区域 -->
      <div class="order-list">
        <ul>
          <li  v-for="(item,index) of listinfo" :key="index">
            <div class="order-list-img">
              <!-- 图片懒加载 -->
              <img v-lazy="item.img_src">
              <!-- <img :src="item.img_src" alt=""> -->
            </div>
            <div class="order-list-info">
              <h4>{{item.info_title}}</h4>
              <p class="count-info">
                <span>编码：{{item.codeing}}</span>
                <span class="standard">规格：{{item.standardNum}}盒/箱</span>
              </p>
              <p class="price">
                <span>价格：<span class="num">{{item.price}}</span></span>
                <span class="stock">库存：{{item.stock}}箱</span>
                <span class="iconfont icon-shuaxin"></span>
              </p>
            </div>
          </li>
        </ul>
      </div>
  </div>  
</template>
<script>
import PublicTopHeader from '../../components/PublicTopHeader';
import Search from '../../components/zhangheShopCarcomponent/Search';
import service from '../../service/service.js';
// import { Toast } from 'mint-ui';
import mui from '../../lib/mui/js/mui.min.js';
import '../../lib/mui/css/mui.min.css';
export default {
  name: 'placeorder',
  data() {
    return {
      placeordertitle: '下单',
      shopitem: '点击进行搜索~',
      id: this.$route.query.id,
      // aa: '',
      btnname: [], //接收滑动按钮数据
      listdes: [],
      getinfoa: 'cuxiao',
      listinfo: []
    };
  },
  components: {
    PublicTopHeader,
    Search
  },
  created() {
    this.getInFo(this.getinfoa);
    this.getPlaceOrder();
  },
  methods: {
    getPlaceOrder() {
      service.getplaceorderbtnname().then(res => {
        this.btnname = res.data;
        console.log(this.btnname);
      });
    },
    getInFo(tab) {
      if (tab) {
        service.getinfo(tab).then(res => {
          this.listdes = res.data.msg;
          this.listinfo = res.data.infolist;
          console.log(tab);
          console.log(this.listdes);
          console.log(this.listinfo);
        });
      }
    }
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.mui-control-item {
  touch-action: pan-y;
  // 解决chrome浏览器点击出现警告的问题
}
.placeorder {
  .icon-yonghu {
    font-size: px2rem(48);
  }
  .icon-user {
    position: absolute;
    top: px2rem(40);
    right: px2rem(32);
    &:before {
      font-size: px2rem(50);
    }
  }
  .mui-scroll-wrapper {
    height: px2rem(88) !important;
    padding-top: px2rem(30);
    background-color: #fafafa;
    border-bottom: px2rem(1) solid #ddd;
    .mui-control-item {
      font-size: px2rem(28);
      position: relative;
      padding-left: px2rem(28) !important;
      padding-right: px2rem(28) !important;
      .line {
        position: absolute;
        right: 0;
        width: px2rem(1);
        height: px2rem(60);
        display: inline-block;
        background-color: #dddddd;
      }
    }
  }
  .info {
    height: px2rem(85);
    border-bottom: px2rem(1) solid #ddd;
    line-height: px2rem(85);
    display: flex;
    justify-content: space-between;
    margin-left: px2rem(28);
    margin-right: px2rem(76);
    font-size: px2rem(24);
    color: #757575;
    position: relative;
    .info-r {
      padding-right: px2rem(20);
      .icon-fenlei {
        position: absolute;
        font-size: px2rem(30);
        right: px2rem(-50);
        top: 0;
      }
    }
  }
  .order-list {
    margin-left: px2rem(28);
    li {
      padding-bottom: px2rem(22);
      border-bottom: px2rem(1) solid #ccc;
      padding-top: px2rem(20);
      display: flex;
      justify-content: space-between;
      .order-list-img {
        height: px2rem(122);
        width: px2rem(166);
        border: px2rem(1) solid #ddd;
        img {
          width: 100%;
          height: 100%;
        }
        image[lazy='loading'] {
          width: 40px;
          height: 300px;
          margin: auto;
        }
      }
      .order-list-info {
        margin-left: px2rem(28);
        margin-right: px2rem(52);
        width: 100%;
        h4 {
          font-size: px2rem(28);
          font-weight: normal;
          margin-bottom: px2rem(12);
        }
        .count-info {
          font-size: px2rem(20);
          margin-bottom: px2rem(40);
          .standard {
            margin-left: px2rem(50);
          }
        }
        .price {
          position: relative;
          font-size: px2rem(20);
          display: flex;
          justify-content: space-between;
          .num {
            font-size: px2rem(28);
            color: red;
          }
          .stock {
            margin-right: px2rem(30);
          }
          .icon-shuaxin {
            position: absolute;
            right: px2rem(-30);
            top: 0;
            font-size: px2rem(40);
            color: #000;
          }
        }
      }
    }
  }
}
</style>
