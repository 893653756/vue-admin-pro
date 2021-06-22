<template>
  <el-submenu :index="itemOrMneu.path">
    <span slot="title">{{ itemOrMneu.meta.title }}</span>
    <template v-for="item of itemOrMneu.children">
      <fy-submenu
        v-if="item.children && item.children.length > 0"
        :key="item.path"
        :itemOrMneu="item"
      />
      <fy-menu-item v-else :key="item.path" :item="item"></fy-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: "FySubmenu",
  props: {
    itemOrMneu: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style>
</style>