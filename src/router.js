import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
<<<<<<< HEAD
import Login from "./views/Login.vue";
import OrderOutsideShop from "./views/zhangheShopCar/OrderOutsideShop.vue";
import OrderInsideActive from "./views/zhangheShopCar/OrderInsideActive.vue";
=======
>>>>>>> first commit

Vue.use(Router);

export default new Router({
<<<<<<< HEAD
    routes: [{
            path: "/",
            name: "login",
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }, {
            path: "/home/orderoutsideshop",
            name: "orderoutsideshop",
            component: OrderOutsideShop
        }, {
            path: "/home/orderinsideactive",
            name: "orderinsideactive",
            component: OrderInsideActive
        }


        // {
        //     path: "/about",
        //     name: "about",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import ( /* webpackChunkName: "about" */ "./views/About.vue")
        // }
    ]
});
=======
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
>>>>>>> first commit
