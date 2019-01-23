import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import moment from "moment";
import "./lib/hotcss/hotcss";
import "./assets/common.css";
import VeeValidate from 'vee-validate';
import axios from "axios";
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
// import "./assets/font/iconfont.css"; //font字体图标样式
// import Mock from "mockjs";
import 'mint-ui/lib/style.css';




Vue.use(VeeValidate);
Vue.prototype.$ajax = axios;


Vue.use(MintUI);
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY/MM/DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
});

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");