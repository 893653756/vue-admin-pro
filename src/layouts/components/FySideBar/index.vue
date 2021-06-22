<template>
  <div class="side-bar">
    <fy-logo />
    <fy-menu />
  </div>
</template>

<script>
export default {
  name: "FySideBar",
};
</script>

<style lang="scss" scoped>
.side-bar {
  display: flex;
  flex-direction: column;
}
</style>