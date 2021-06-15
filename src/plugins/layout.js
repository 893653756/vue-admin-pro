/**
 * 加载布局组件
 */
import Vue from "vue";
const Components = require.context("@/layouts/", true, /\.vue$/);
Components.keys()
  .map(Components)
  .forEach((item) => {
    if (item.default.name && item.default.name !== "Layouts")
      Vue.component(item.default.name, item.default);
  });
