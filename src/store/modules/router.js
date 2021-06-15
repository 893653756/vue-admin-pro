import { constantRoutes, asyncRoutes, resetRouter } from "@/router";
import { convertRouter, filterRoutes } from "@/utils/router";
const state = () => ({
  routes: [],
});

const getters = {
  routes: (state) => state.routes,
};

const mutations = {
  setRoutes(state, routes) {
    state.routes = routes;
  },
};

const actions = {
  async getRouters({ commit }) {
    // 请求后端路由
    // const { data } = await getRouterList();
    let list = [...asyncRoutes];
    // 解析后端返回路由
    const routes = convertRouter(list);
    const finallyRoutes = filterRoutes([...routes, ...constantRoutes]);
    // 设置菜单所需路由
    commit("setRoutes", finallyRoutes);
    // 根据可访问路由重置Vue Router
    await resetRouter(finallyRoutes);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
