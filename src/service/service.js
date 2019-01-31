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
  },
  //获取下单页面按钮名字
  getplaceorderbtnname() {
    return axios.get('http://localhost:3000/btnnametitle');
  },
  // 获取下单页面的描述信息
  getinfo(tab) {
    return axios.get('http://localhost:3000/' + tab);
  },

  getShopMeg(id) {
    return axios.get('http://localhost:3000/orderinsideactive?id=' + id);
  },
  getTab() {
    return axios.get('http://localhost:3000/btnnametitle');
  },
  getProduct(name) {
    return axios.get('http://localhost:3000/' + name);
  },
  getProductMsg(id) {
    return axios.get('http://localhost:3000/quanbu?id=' + id);
  },
  getProductList() {
    return axios.get('http://localhost:3000/quanbu');
  }
};
