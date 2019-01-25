<template>
  <div class="myprogress">
    <div class="label">{{val}}<span v-if="percent">%</span></div>
    <div class="pie-wrap" ref="pie"></div>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
export default {
  name: 'myprogress',
  props: {
    title: { type: String, required: true },
    val: { type: Number, required: true },
    percent: { type: Boolean, require: true, default: false }
  },
  data() {
    return {};
  },
  mounted() {
    this.initCircle();
  },
  methods: {
    initCircle() {
      let data = [];
      if (this.percent) {
        data.push({ value: this.val, name: '' });
        data.push({ value: 100 - this.val, name: '' });
      } else {
        data.push({ value: 0, name: '' });
        data.push({ value: 100, name: '' });
      }
      //基于准备好的dom,初始化echarts实例
      let myChart = echarts.init(this.$refs.pie);
      console.log('开始绘制图表');
      //绘制图表
      myChart.setOption({
        color: ['rgb(102,208,113)', 'rgb(223,223,223)'],
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: ['95%', '100%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'center',
                textStyle: {
                  fontSize: '48',
                  fontWeight: 'bold'
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin hwwrap {
  width: px2rem(180);
  height: px2rem(180);
}
.myprogress {
  position: relative;
  text-align: center;
  width: px2rem(180);
  .label {
    line-height: px2rem(180);
    position: absolute;
    @include hwwrap;
    left: 0;
    top: 0;
    font-size: px2rem(48);
    span {
      vertical-align: super;
      font-size: px2rem(22);
    }
  }
  h3 {
    font-size: px2rem(24);
    padding: px2rem(26) 0 px2rem(52);
    line-height: px2rem(24);
  }

  .pie-wrap {
    @include hwwrap;
    display: inline-block;
  }
}
</style>
