<template>
  <!-- 页面头部共用组件 -->
  <div id="app" class="topheader-container">
    <div class="top-main">
      <div class="top-l">
        <!-- 定义左侧插槽，如果别的组件想引用直接引入即可 -->
        <slot name="top-l">
          <span @click="goBack" class="iconfont icon-jiantoushang" v-show="flag"></span>
        </slot>
      </div>
      <div class="top-c">
        <!-- 子组件接收父组件的数据 -->
        <h3>{{title}}</h3>
      </div>
      <div class="top-r">
        <!-- 定义右侧插槽，如果别的组件想改变功能直接改掉即可 -->
        <slot name="top-r">
          <!-- <span class="iconfont icon-touxiang"></span> -->
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topheader",
  data() {
    return {
      //定义一个开关用来判断后退按钮该不该显示
      flag: true
    }
  },
  // title：头部的标题  
  props: { title: { type: String, required: true } },
  created() {
    //判断刷新页面的时候是不是登录页面，如果是后退按钮就不显示，不是就显示
    if (this.$route.path === '/login') {
      this.flag = false;
    } else {
      this.flag = true;
    }
  },
  methods: {
    //后退按钮的功能
    goBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    //利用监听事件，监听路径，如果退到了登录页面，那么后退按钮就不显示
    '$route.path': function (newVal) {
      if (newVal === '/login') {
        this.flag = false;
      } else {
        this.falg = true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$height: px2rem(100);
$headColor: linear-gradient(to right, #24be5a, #29db67); //头部渐变色
.topheader-container {
  //查看控制台里面已经有了border-box!!!
  height: px2rem(152);
  padding-top: px2rem(50); // 留出手机顶部50px的距离
  background: $headColor;
  color: #fff;
  .top-main {
    display: flex;
    background: $headColor;
    justify-content: space-between;
    line-height: $height;
    height: $height;
    padding: 0 px2rem(28);
    //定义插槽注意：用flex布局，那么左右两侧的插槽要固定好相等的宽度，不然中间文字不居中！或者用双飞翼圣杯浮动布局
    .top-l,
    .top-r {
      width: $iconsize;
      height: $height;
    }
    .top-l {
      .icon-jiantoushang {
        // display: inline-block;
        // height: $height;
        &:before {
          //字体图标设置大小要设置before
          font-size: $iconsize;
        }
      }
    }
    .top-c {
      h3 {
        font-size: $btn-head-fontsize;
        font-weight: normal;
      }
    }
  }
}
</style>



