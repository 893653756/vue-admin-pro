<template>
  <div class="fy-tabs">
    <el-tabs
      v-model="activeTab"
      type="card"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="tab of visitedRoutes"
        :key="tab.path"
        :name="tab.path"
        closable
      >
        <span slot="label" @contextmenu.prevent="openMenu($event, tab)">{{
          tab.meta.title
        }}</span>
      </el-tab-pane>
    </el-tabs>

    <ul
      v-if="visible"
      class="contextmenu el-dropdown-menu el-dropdown-menu--small"
      :style="{ left: left + 'px', top: top + 'px' }"
    >
      <li
        class="el-dropdown-menu__item"
        :class="{ 'is-disabled': visitedRoutes.length === 1 }"
        @click="closeOthersTabs"
      >
        <span>关闭其他</span>
      </li>
      <li
        class="el-dropdown-menu__item"
        :class="{ 'is-disabled': !visitedRoutes.indexOf(hoverRoute) }"
        @click="closeLeftTabs"
      >
        <span>关闭左侧</span>
      </li>
      <li
        class="el-dropdown-menu__item"
        :class="{
          'is-disabled':
            visitedRoutes.indexOf(hoverRoute) === visitedRoutes.length - 1,
        }"
        @click="closeRightTabs"
      >
        <span>关闭右侧</span>
      </li>
      <li class="el-dropdown-menu__item" @click="closeAllTabs">
        <span>关闭全部</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { handleActivePath } from "@/utils/router";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FyTabs",
  data() {
    return {
      activeTab: "",
      visible: false,
      left: 0,
      top: 0,
    };
  },
  watch: {
    $route: {
      handler(route) {
        this.$nextTick(() => {
          this.addTabs(route);
        });
      },
      immediate: true,
    },
    visible(val) {
      if (val) {
        document.addEventListener("click", this.closeMenu);
      } else {
        document.removeEventListener("click", this.closeMenu);
      }
    },
  },
  computed: {
    ...mapGetters({
      visitedRoutes: "tabs/visitedRoutes",
    }),
  },
  methods: {
    ...mapActions({
      addVisitedRoute: "tabs/addVisitedRoute",
      deleteVisitedRoute: "tabs/deleteVisitedRoute",
      deleteOthersTabs: "tabs/deleteOthersTabs",
      deleteLeftTabs: "tabs/deleteLeftTabs",
      deleteRightTabs: "tabs/deleteRightTabs",
      deleteAllTabs: "tabs/deleteAllTabs",
    }),
    /**
     * 添加tab标签
     */
    async addTabs(tab) {
      if (tab.meta && tab.meta.hidden !== true) {
        const path = handleActivePath(tab);
        await this.addVisitedRoute({
          path: path,
          query: tab.query,
          params: tab.params,
          name: tab.name,
          matched: tab.matched,
          meta: { ...tab.meta },
        });
        this.activeTab = path;
      }
    },
    // 激活
    isActive(path) {
      return path === handleActivePath(this.$route);
    },
    // 跳转到第一个tab
    toFirstTab() {
      const tab = this.visitedRoutes[0];
      if (tab) {
        this.$router.push({ path: tab.path });
      } else {
        this.$router.push("/");
      }
    },
    // 切换tab
    handleTabClick(tab) {
      if (!this.isActive(tab.name)) {
        this.$router.push({ path: this.visitedRoutes[tab.index].path });
      }
      console.log(tab);
    },
    // 删除
    async handleTabRemove(path) {
      await this.deleteVisitedRoute(path);
      // 直接去第一个
      if (this.isActive(path)) {
        this.toFirstTab();
      }
    },
    // 右键菜单
    openMenu(e, item) {
      console.log(e, item);
      const offsetLeft = this.$el.getBoundingClientRect().left;
      const offsetWidth = this.$el.offsetWidth;
      const maxLeft = Math.round(offsetWidth);
      const left = Math.round(e.clientX - offsetLeft);
      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }
      this.top = Math.round(e.clientY - 80);
      this.hoverRoute = item;
      this.visible = true;
    },
    closeMenu() {
      this.hoverRoute = null;
      this.visible = false;
    },
    // 关闭其它
    async closeOthersTabs() {
      await this.deleteOthersTabs(this.hoverRoute);
      this.$router.push({ path: this.hoverRoute.path });
      this.closeMenu();
    },
    // 关闭左侧
    async closeLeftTabs() {
      await this.deleteLeftTabs(this.hoverRoute);
      this.$router.push({ path: this.hoverRoute.path });
      this.closeMenu();
    },
    // 关闭右侧
    async closeRightTabs() {
      await this.deleteRightTabs(this.hoverRoute);
      this.$router.push({ path: this.hoverRoute.path });
      this.closeMenu();
    },
    // 关闭全部
    async closeAllTabs() {
      await this.deleteAllTabs();
      this.$router.push("/");
      this.closeMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
.fy-tabs {
  position: relative;
  height: $base-tabs-height;
  .contextmenu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
}
</style>