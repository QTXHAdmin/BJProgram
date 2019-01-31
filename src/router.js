import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/Login';
import Home from './views/Home';
import OutsideOfOrder from './views/zzz/OutsideOfOrder';

import OrderOutsideShop from './views/zhangheShopCar/OrderOutsideShop.vue';
import OrderInsideActive from './views/zhangheShopCar/OrderInsideActive.vue';
import PlaceOrder from './views/zhangheShopCar/PlaceOrder.vue';

import InStoreActivity from './views/zzz/InStoreActivity';

// import OrderOutsideShop from './views/zhangheShopCar/OrderOutsideShop.vue';
// import OrderInsideActive from './views/zhangheShopCar/OrderInsideActive.vue';
import Order from './views/zzz/Order';
import ProductOption from './views/zzz/ProductOption';
import ShoppingCar from './views/zzz/shoppingCart';
import SubmitOrder from './views/zzz/SubmitOrder';

import ProductSelection from './views/zhangheShopCar/ProductSelection.vue';
// import SupermarketChain from './views/zhangheShopCar/SupermarketChain.vue';
import SupermarketChain2 from './views/zhangheShopCar/SupermarketChain2.vue';
// import SubmitOrder from './views/zhangheShopCar/SubmitOrder.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/out',
      name: 'OutsideOfOrder',
      component: OutsideOfOrder
    },
    {
      path: '/home/orderoutsideshop',
      name: 'orderoutsideshop',
      component: OrderOutsideShop
    },
    {
      path: '/home/orderinsideactive',
      name: 'orderinsideactive',
      component: OrderInsideActive
    },
    {
      path: '/home/placeorder',
      name: 'placeorder',
      component: PlaceOrder
    },
    {
      path: '/home/instoreactivity',
      name: 'inStoreActivity',
      component: InStoreActivity
    },
    {
      path: '/home/productoption',
      name: 'ProductOption',
      component: ProductOption
    },
    {
      path: '/home/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/home/shoppingcar',
      name: 'ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/home/submitorder',
      name: 'SubmitOrder',
      component: SubmitOrder
    },
    {
      path: '/home/productselection',
      name: 'productselection',
      component: ProductSelection
    },
    // {
    //   path: '/home/supermarketchain',
    //   name: 'supermarketchain',
    //   component: SupermarketChain
    // },
    {
      path: '/home/supermarketchain2',
      name: 'supermarketchain2',
      component: SupermarketChain2
    },
    {
      path: '/home/submitorder',
      name: 'submitorder',
      component: SubmitOrder
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
