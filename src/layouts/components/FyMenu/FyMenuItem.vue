<template>
  <el-menu-item @click="handleLink" :index="item.path">{{
    item.meta.title
  }}</el-menu-item>
</template>

<script>
export default {
  name: "FyMenuItem",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    handleLink() {
      // 此处应当判断是否为外链
      const { target } = this.item.meta;
      if (target) {
        // window.open()
      }
      // 内部路由跳转
      this.$router.push({ path: this.item.path });
    },
  },
};
</script>

<style>
</style>