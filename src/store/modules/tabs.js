/**
 * 页面 tabs 管理
 */

const state = () => ({
  visitedRoutes: [], // 打开的页面
});

const getters = {
  visitedRoutes: (state) => state.visitedRoutes,
};

const mutations = {
  addVisitedRoute(state, route) {
    const item = state.visitedRoutes.find((item) => item.path === route.path);
    if (!item) {
      state.visitedRoutes.push({ ...route });
    }
  },
  deleteVisitedRoute(state, path) {
    state.visitedRoutes = state.visitedRoutes.filter(
      (item) => item.path !== path
    );
  },
  deleteOthersTabs(state, tab) {
    state.visitedRoutes = state.visitedRoutes.filter(
      (item) => item.path === tab.path
    );
  },
  deleteLeftTabs(state, tab) {
    let flag = false
    state.visitedRoutes = state.visitedRoutes.filter(item => {
      if (item.path === tab.path) {
        flag = true
      }
      return flag
    })
  },
  deleteRightTabs(state, tab) {
    let flag = true
    state.visitedRoutes = state.visitedRoutes.filter(item => {
      if (item.path === tab.path) {
        flag = false
        return true
      }
      return flag
    })
  },
  deleteAllTabs(state) {
    state.visitedRoutes = [];
  },
};

const actions = {
  // 添加 tab
  addVisitedRoute({ commit }, route) {
    commit("addVisitedRoute", route);
  },
  // 移除 tab
  deleteVisitedRoute({ commit }, path) {
    commit("deleteVisitedRoute", path);
  },
  // 关闭其它 tabs
  deleteOthersTabs({ commit }, tab) {
    commit("deleteOthersTabs", tab);
  },
  // 关闭左侧 tabs
  deleteLeftTabs({commit}, tab) {
    commit('deleteLeftTabs', tab)
  },
  // 关闭右侧 tabs
  deleteRightTabs({commit}, tab) {
    commit('deleteRightTabs', tab)
  },
  // 关闭全部
  deleteAllTabs({ commit }) {
    commit("deleteAllTabs");
  },
};

export default { state, getters, mutations, actions };
