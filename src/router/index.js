import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/control-center",
    component: Layout,
    redirect: '/control-center/menu',
    children: [
      {
        path: "menu",
        component: () =>
          import(/* webpackChunkName: "cc" */ "@/views/ControlCenter/MenuMgr/index.vue"),
      },
      {
        path: "user",
        component: () =>
          import(/* webpackChunkName: "cc" */ "@/views/ControlCenter/UserMgr/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
