import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./lib/hotcss/hotcss";
import "./assets/common.css";
import VeeValidate from 'vee-validate';
import axios from "axios";
import Mint from "mint-ui";
import 'mint-ui/lib/style.css';
Vue.use(Mint);



Vue.use(VeeValidate);
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");