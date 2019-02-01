import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LoginUser: sessionStorage.getItem('LoginUser')
      ? JSON.parse(sessionStorage.getItem('LoginUser'))
      : null,
    shoppingCart: [],
    // num: 1, //计数组件绑定的值-zh
    carlist: [], //定义数组接收购买商品的对象数据-zh
    selectshoplist: []
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
    },
    //增加的方法-zh
    // increase(state, maxNum) {
    //   if (state.num >= maxNum) {
    //     return (state.num = maxNum);
    //   }
    //   state.num++;
    // },
    // 减少的方法-zh
    // decrease(state, minNum) {
    //   if (state.num <= minNum) {
    //     return state.num == minNum;
    //   }
    //   state.num--;
    // },
    //点击购物车按钮把选择到的商品数据添加到state中的carlist中-zh
    addToCar(state, productinfo) {
      let flag = false; //设置个flag假设carlist中没有这个商品
      state.carlist.some(item => {
        if (item.id == productinfo.id) {
          //判断id如果存在说明carlist中已经有了这个商品。那么只需要加数量就行了
          item.selectcount += parseInt(productinfo.selectcount);
          flag = true; //为true就代表商品已经存在
          return true;
        }
      });
      if (!flag) {
        //如果循环到最后flag还是false，说明没有添加过这个商品，那么就把商品数据push到carlist中
        state.carlist.push(productinfo);
      }
      // 把添加过的商品数据存放到localstorage中，本地存储
      // localStorage.setItem('carlist', JSON.stringify(state.carlist));
    },
    getselectshoplist(state, selectshopitem) {
      console.log(1);
      let onOff = false;
      if (selectshopitem.selected == true) {
        if (state.selectshoplist.length > 0) {
          state.selectshoplist.forEach(item => {
            if (selectshopitem.id != item.id) {
              onOff = true;
            } else {
              onOff = false;
            }
          });
        } else {
          state.selectshoplist.push(selectshopitem);
        }
        if (onOff) {
          state.selectshoplist.push(selectshopitem);
        }
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
    },
    getcarlist(state) {
      return state.carlist;
    },
    getSelectShop(state) {
      let obj = {};
      state.carlist.forEach(item => {
        obj.id = item.id;
        obj.selected = item.selected;
      });
      return obj;
    }
    //obj={id:2,selected:true}
    // getamount(state) {
    //   let obj = {
    //     amount: 0
    //   };
    //   state.carlist.forEach(item => {
    //     obj.amount = item.price * item.selectcount;
    //   });
    //   return obj;
    // }
    // getcount(state) {
    // return state.carlist;
    // let obj = {
    //   count: 0,
    //   amount: 0
    // };
    // state.carlist.forEach(item => {
    //   obj.count += item.selectcount;
    //   obj.amount += item.price * item.selectcount;
    // });
    // return obj;
    // }
  }
});
