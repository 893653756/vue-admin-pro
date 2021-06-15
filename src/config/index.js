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
  requestTimeout: 10000,
  tokenName: "token",
  /**** settings ****/
  // 路由模式，可选值为 history 或 hash
  routerMode: "hash",
  // 路由白名单
  routesWhiteList: ["/login"],
  // token存储位置localStorage sessionStorage cookie
  storage: "localStorage",
  // token失效回退到登录页时是否记录本次的路由（是否记录当前tab页）
  recordRoute: true,
  openFirstMenu: true,
  // 布局
  layout: "comprehensive",
};
