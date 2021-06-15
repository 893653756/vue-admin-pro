import { getToken, setToken } from "@/utils/token";

const state = () => ({
  token: getToken(),
  isLogin: false,
  userInfo: {},
});

const getters = {
  token: (state) => state.token,
  isLogin: (state) => state.isLogin,
};

const mutations = {
  setToken(state, token) {
    state.token = token;
    setToken(token);
  },
  setLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
};

const actions = {
  async login({ commit }) {
    // 登录
    const token = "daffeasdasd";
    // 保存 token
    commit("setToken", token);
    return true;
  },
  async loginOut() {},
  async getUserInfo({ commit }) {
    commit("setLogin", true);
  },
  // token失效或者退出登录 重置数据
  async resetAll() {},
  setToken({ commit }, token) {
    commit("setToken", token);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
