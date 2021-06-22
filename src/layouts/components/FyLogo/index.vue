<template>
  <div class="logo">
    <img :src="logo" alt="" />
    <span fz20>{{ appName }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FyLogo",
  computed: {
    ...mapGetters({
      logo: "settings/logo",
      appName: "settings/appName",
    }),
  },
};
</script>

<style lang="scss" scoped>
.logo {
  background-color: $base-color-info;
  width: $base-menu-width;
  height: $base-nav-height;
  color: $base-color-white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }
  span {
    font-weight: 600;
    margin-left: 12px;
  }
}
</style>