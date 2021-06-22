<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item of handleRoutes"
      :key="item.name"
      :index="item.name"
    >
      {{ item.meta.title }}
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FyNav",
  data() {
    return {
      activeIndex: "",
    };
  },
  computed: {
    ...mapGetters({
      routes: "router/routes",
    }),
    handleRoutes() {
      return this.routes.filter((route) => {
        return route.meta && route.meta.hidden !== true;
      });
    },
  },
  watch: {
    $route: {
      handler(route) {
        const firstMenu = route.matched[0].name;
        if (this.activeIndex !== firstMenu) {
          this.activeIndex= firstMenu;
          // this.handleTabClick(true);
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleSelect(path) {
      this.$router.push({
        path,
      })
    },
  },
};
</script>

<style>
</style>