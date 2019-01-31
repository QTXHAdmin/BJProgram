import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import axios from 'axios';
import './registerServiceWorker';
import moment from 'moment';
// import echarts from 'echarts';
import './lib/hotcss/hotcss';
import './assets/common.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import '../src/assets/zhfont/iconfont.css'; //font字体图标样式
import '../src/assets/font/iconfont.css'; //font字体图标样式

// import './lib/mui/css/mui.min.css';
import './lib/zh/mui/css/icons-extra.css';
// import Mock from "mockjs";
import VeeValidate from 'vee-validate';
// import helper from './lib/helper';
Vue.use(VeeValidate);
Vue.use(MintUI);
Vue.use(router);

Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY/MM/DD HH:mm:ss') {
  return moment(dataStr).format(pattern);
});

Vue.config.productionTip = false;
//路由的全局守卫
// router.beforeEach((to, from, next) => {
//   if (to.path != '/') {
//     //校验用户是否登录
//     if (helper.getTypes(store.getters.getLoginUser) === 'Object') {
//       next();
//     } else {
//       next('/');
//     }
//   } else {
//     next();
//   }
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
