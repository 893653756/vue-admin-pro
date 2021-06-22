<template>
  <div class="fy-menu">
    <el-menu
      mode="vertical"
      unique-opened
      collapse-transition
      :default-active="activeMenu"
    >
      <template v-for="item of handleRoutes">
        <fy-submenu
          v-if="item.children && item.children.length > 0"
          :key="item.path"
          :itemOrMneu="item"
        />
        <fy-menu-item
          v-else
          :key="item.path"
          :index="item.path"
          :item="item"
        ></fy-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { handleActivePath } from "@/utils/router";
export default {
  name: "FyMenu",
  data() {
    return {
      activeMenu: "",
    };
  },
  computed: {
    ...mapGetters({
      routes: "router/routes",
      layout: "settings/layout",
    }),
    handleRoutes() {
      if (this.layout === "comprehensive") {
        // console.log(this.$route.path);
        const route = this.routes.find(
          (item) => this.$route.matched[0].path === item.path
        );
        return route.children || [];
      }
      console.log("this.routes", this.routes);
      return this.routes.filter((item) => item.meta && !item.meta.hidden);
    },
  },
  watch: {
    $route: {
      handler(route) {
        this.activeMenu = handleActivePath(route);
        console.log("activeMenu", this.activeMenu);
      },
      immediate: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.fy-menu {
  flex: 1;
  height: 0px;
  overflow-y: auto;
  @include base-scrollbar;
  ::v-deep {
    .el-menu {
      height: 100%;
    }
  }
}
</style>