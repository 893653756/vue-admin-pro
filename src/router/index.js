import Vue from "vue";
import VueRouter from "vue-router";
import { publicPath, routerMode } from "@/config";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { routesWhiteList } from "@/config";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login"),
    meta: {
      hidden: true,
    },
  },
];

export const asyncRoutes = [
  {
    path: "/index",
    type: "Layout",
    title: "首页",
    children: [
      {
        path: "home",
        type: "Page",
        filePath: "/views/Home/index.vue",
      },
    ],
  },
  {
    path: "/control-center",
    type: "Layout",
    title: "控制中心",
    children: [
      {
        path: "menu",
        type: "Page",
        title: "菜单管理",
        filePath: "/views/ControlCenter/MenuMgr/index.vue",
      },
      {
        path: "user",
        type: "Page",
        title: "用户管理",
        filePath: "/views/ControlCenter/UserMgr/index.vue",
      },
    ],
  },
];

export function resetRouter(routes = constantRoutes) {
  router.matcher = createRouter(routes).matcher;
}

function createRouter(routes) {
  return new VueRouter({
    mode: routerMode,
    base: publicPath,
    routes,
  });
}

const router = createRouter(constantRoutes);

NProgress.configure({
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false,
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  // 在路由白名单里, 则直接跳转
  if (routesWhiteList.includes(to.path)) {
    console.log("routesWhiteList", to.path);
    return next();
  }
  const token = store.getters["user/token"];
  if (token) {
    const isLogin = store.getters["user/isLogin"];
    if (isLogin) {
      if (to.path === "/") {
        const routes = store.getters["router/routes"];
        next({ path: routes[0].path });
      } else {
        next();
      }
    } else {
      await store.dispatch("user/getUserInfo");
      await store.dispatch("router/getRouters");
      next({ ...to, replice: true });
    }
  } else {
    console.log(to.path);
    next(toRouter(to.path));
  }
});

function toRouter(currentPath) {
  if (currentPath === "/") {
    return {
      path: "/login",
      replace: true,
    };
  } else {
    return {
      path: "/login",
      replace: true,
      query: { redirect: currentPath },
    };
  }
}

router.afterEach(() => {
  NProgress.done();
});

export default router;
