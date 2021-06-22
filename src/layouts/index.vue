<template>
  <component :is="`layout-${layoutType}`"></component>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Layouts",
  computed: {
    ...mapGetters({
      layout: "settings/layout",
    }),
    layoutType() {
      const { isColumn } = this.$route.matched[0]?.meta;
      return isColumn && this.layout === "comprehensive"
        ? "column"
        : this.layout;
    },
  },
};
</script>

<style>
</style>