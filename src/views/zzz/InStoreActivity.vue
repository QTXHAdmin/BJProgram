<template>
  <div class="inStorActivity">
    <tophead title="店内活动">
      <span slot="r" @click="EndOfVisit">结束拜访</span>
    </tophead>
    <div class="title">{{title}}</div>
    <div class="wrap">
      <div class="monthNum">
        <div class="monthNum-l"><i class="monthNum-icon"></i><span monthNum-icon>本月至今销量</span></div>
        <div class="monthNum-r">{{mounthNum}}</div>
      </div>
      <div class="yearNum">
        <div class="yearNum-l"><i class="yearNum-icon"></i><span>过往半年月均销量</span></div>
        <div class="yearNum-r">{{yearNum}}</div>
      </div>
      <div class="persent">
        <div class="percent-text">
          <div class="percent-text-l"><i class="percent-icon"></i><span>核心分销完成率</span></div>
          <div class="percent-text-r">{{percent}}</div>
        </div>
        <div class="percent-topbar" ref="bartotal">
          <div class="bar" ref="bar"></div>
        </div>
      </div>

    </div>
    <div class="remark">
      <div class="remark-text">历史拜访备注：</div>
      <textarea class="remarktext" name="" cols="30" rows="10">点击填写拜访备注~</textarea>
    </div>

    <div class="orders">
      <input type="button" class="orderBtn" value="下单" @click="GetProductListPage">
      <input type="button" class="signIn" value="商店签到">
    </div>
  </div>
</template>

<script>
import TopHead from '../../components/TopHead';
import service from '../../service/service.js';
import { Toast } from 'mint-ui';
export default {
  name: 'inStorActivity',
  data() {
    return {
      title: 'A超市宝洁11',
      mounthNum: 1111,
      yearNum: 1111,
      percent: '20%',
      urlid: this.$route.query.id
    };
  },
  components: {
    tophead: TopHead
  },
  created: function() {
    this.GetShopMeg();
  },
  mounted: function() {
    this.ChangeWidth();
  },

  methods: {
    ChangeWidth() {
      this.$refs.bar.style.width = this.getWidth;
    },
    EndOfVisit() {
      //跳转到首页
      this.$router.push('/home');
    },
    GetShopMeg() {
      const self = this;
      // console.log(this.urlid);
      //请求数据
      service
        .getShopMeg(this.urlid)
        .then(res => {
          //获取到数据和vue中数据进行绑定
          let data = res.data[0];
          console.log(data);
          self.title = data.title;
          self.mounthNum = data.monthsalesvalumns;
          self.yearNum = data.halfyearmonthvalumns;
          self.percent = data.compelationrate + '%';
          this.ChangeWidth();
        })
        .catch(e => {
          Toast('服务器端请求数据失败！' + e);
        });
    },
    GetProductListPage() {
      //跳转到商品列表页面
      this.$router.push('/home/order');
    }
  },
  computed: {
    getWidth() {
      //获取总宽度
      //返回对应的bar的长度
      let k =
        (parseInt(this.percent) / 100) * this.$refs.bartotal.offsetWidth + 'px';
      return k;
    }
  }
};
</script>

<style lang="scss" scoped>
.inStorActivity {
  .title {
    height: px2rem(86);
    width: 100%;
    line-height: px2rem(86);
    padding-left: px2rem(26);
    font-size: px2rem(28);
    background-color: #fafafa;
    border-bottom: 1px solid #cccccc;
  }
  .wrap {
    height: px2rem(364);
    width: 100%;
    padding-left: px2rem(26);
    border-bottom: 1px solid #cccccc;
    .monthNum,
    .yearNum,
    .percent-text {
      height: px2rem(110);
      line-height: px2rem(110);
      font-size: px2rem(30);
      display: flex;
      justify-content: space-between;
      align-items: center;

      border-bottom: 1px solid #ccc;

      .monthNum-r,
      .yearNum-r,
      .percent-text-r {
        margin-right: px2rem(26);
      }
    }

    .monthNum-icon,
    .yearNum-icon,
    .percent-icon {
      display: inline-block;
      width: px2rem(38);
      height: px2rem(38);
      vertical-align: middle;
      // position: relative;
      // top: px2rem(10);
    }
    .monthNum-icon {
      background: url('../../assets/img/up.png') no-repeat;
    }
    .yearNum-icon {
      background: url('../../assets/img/xl.png') no-repeat;
    }
    .percent-icon {
      background: url('../../assets/img/percent.png') no-repeat;
    }
  }
  .persent {
    .percent-text {
      border-bottom: none;
    }
    .percent-topbar {
      width: px2rem(694);
      height: px2rem(12);
      border-radius: px2rem(6);
      background-color: #e4e4e4;
      .bar {
        transition: width 1s linear 1s;
        width: px2rem(0);
        height: px2rem(12);
        border-radius: px2rem(6);
        // background-color: red;
        background: linear-gradient(to right, #1c59fb, #22be67);
      }
    }
  }
  .remark {
    .remark-text {
      height: px2rem(68);
      background-color: #fafafa;
      font-size: px2rem(28);
      line-height: px2rem(68);
      padding-left: px2rem(26);
    }
    .remarktext {
      width: 100%;
      height: px2rem(200);
      font-size: px2rem(20);
      color: #b2b2b2;
      line-height: px2rem(22);
      padding: px2rem(22) 0 0 px2rem(26);
    }
  }
  .orders {
    margin-top: px2rem(172);
    padding-left: px2rem(136);
    .orderBtn,
    .signIn {
      margin: 0 auto;
      width: px2rem(480);
      height: px2rem(84);
      font-size: px2rem(36);
      color: #10903d;
      border: 1px solid #10903d;
      background-color: #fff;
      border-radius: px2rem(6);
    }
    .signIn {
      margin-top: px2rem(52);
      color: #ffffff;
      background-color: #10903d;
    }
  }
}
</style>
