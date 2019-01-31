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
    }
  ]
});
