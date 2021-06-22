/**
 * 一些配置项
 */
module.exports = {
  /**** vue/cil ****/
  publicPath: "",
  outputDir: "dist",
  assetsDir: "static",
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 开发环境端口
  devPort: 3000,
  /**** net ****/
  baseUrl: process.env.NODE_ENV === "development" ? "/dev-api" : "/dev-api",
  /**** 可更改 settings ****/
  // token失效回退到登录页时是否记录本次的路由（是否记录当前tab页）
  recordRoute: true,
  // 是否打开第一个菜单
  openFirstMenu: true,
  // 布局
  layout: "comprehensive",
};
