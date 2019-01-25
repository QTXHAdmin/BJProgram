import axios from 'axios';
export default {
  //店外订单页面获取所有超市信息数据
  getshopinfo() {
    return axios.get('http://localhost:3000/shopinfo');
  },
  getLogin(order) {
    return axios.get('http://localhost:3000/login', order);
  },
  getCode(code) {
    return axios.get('http://localhost:3000/code', code);
  },
  //获取店内活动的数据
  getorderinsideactive(id) {
    return axios.get('http://localhost:3000/orderinsideactive?id=' + id);
  }
};
