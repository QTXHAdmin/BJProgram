import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./registerServiceWorker";
import moment from "moment";
import echarts from "echarts";
import "./lib/hotcss/hotcss";
import "./assets/common.css";
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import "./assets/font/iconfont.css"; //font字体图标样式
// import Mock from "mockjs";
Vue.use(MintUI);
//使用格式化日期插件格式化事件
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY/MM/DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");