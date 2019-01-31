import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LoginUser: sessionStorage.getItem('LoginUser')
      ? JSON.parse(sessionStorage.getItem('LoginUser'))
      : null,
    shoppingCart: []
  },
  mutations: {
    initUser(state, payload) {
      state.LoginUser = payload;
    },
    AddProduct(state, payload) {
      console.log('执行');
      //在添加之前需要判断当前的数组中是否存在当前商品的ID，若存在，改变当前商品的数量+1

      let onOff = false;
      state.shoppingCart.forEach(item => {
        // console.log(item.id + '' + payload.id);
        if (item.id == payload.id) {
          // console.log(item.id + '' + payload.id);
          item.productNum += payload.productNum;
          onOff = true;
        }
      });
      if (!onOff) {
        state.shoppingCart.push(payload);
      }
    }
  },
  actions: {},
  getters: {
    getLoginUser(state) {
      return state.LoginUser;
    },
    getShoppingCart(state) {
      return state.shoppingCart;
    }
  }
});
