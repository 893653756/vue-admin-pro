import { layout } from "@/config";
import { APP_NAME } from "@/constant";
import logo from "@/assets/images/logo.png";
const state = () => ({
  layout,
  logo,
  appName: APP_NAME,
});

const getters = {
  layout: (state) => state.layout,
  logo: (state) => state.logo,
  appName: (state) => state.appName,
};

const mutations = {};

const actions = {};

export default { state, getters, mutations, actions };
