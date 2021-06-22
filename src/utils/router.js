/**
 * 解析route配置
 */
import path from "path";

const metaKeys = [
  "title", // 菜单名
  "icon", // 菜单icon
  "isColumn", // 是否通栏
  // 'isCustomSvg', // icon是否是自定义svg
  // 'noClosable', // 菜单是否不能关闭
  // 'ability', // 按钮权限
];
export function convertRouter(asyncRoutes) {
  return asyncRoutes.map((route) => {
    if (route.type) {
      route.meta = {};
      metaKeys.forEach((k) => {
        route.meta[k] = route[k];
        delete route[k];
      });
      if (route.type === "Layout") {
        route.component = () => import(`@/layouts/index.vue`);
      } else if (route.type === "Menu") {
        route.component = () =>
          import(`@/layouts/components/FyKeepAlive/index.vue`);
      } else if (route.type === "Page") {
        const arr = route.filePath.split("views/");
        route.component = () => import(`@/views/${arr[1]}`);
      }
      if (route.children && route.children.length) {
        route.children = convertRouter(route.children);
      }
      if (route.children && route.children.length === 0) delete route.children;
      return route;
    }
  });
}

/**
 * 过滤
 * @param {*} routes
 * @param {*} baseUrl
 * @returns
 */
export function filterRoutes(routes, baseUrl = "/") {
  return (
    routes
      // .filter((route) => {
      //   if (!route.status) {
      //     return false;
      //   } else return true;
      // })
      .map((route) => {
        if (route.path !== "*") {
          // 如果path携带参数，将参数解析并放入 meta 中
          const pathArr = route.path.split("?");
          route.path = path.resolve(baseUrl, pathArr[0]);
          pathArr[1] &&
            pathArr[1].replace(/([A-Za-z_]+)=([A-Za-z_]+)/g, (...arg) => {
              route.meta[arg[1]] = arg[2];
            });
        }
        route.name = route.path;
        if (route.children) {
          route.children = filterRoutes(route.children, route.path);
          route.redirect = route.children[0].path;
        }
        return route;
      })
  );
}

/**
 * 获取当前激活的路由路径
 */
export function handleActivePath(route) {
  return route.matched[route.matched.length - 1].path
}
