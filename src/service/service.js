import axios from 'axios';
export default {
  //店外订单页面获取所有超市信息数据
  getshopinfo() {
    return axios.get('http://localhost:3000/shop');
  },
  getLogin(order) {
    return axios.get('http://localhost:3000/login', order);
  },
  getCode(code) {
    return axios.get('http://localhost:3000/code', code);
  }
};
